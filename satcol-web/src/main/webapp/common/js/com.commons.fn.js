var DOMINIO_CLIENTE = "Confirmaci&oacute;n"
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* Funcion para mejorar el manejo de logs */
/*function logger(msg) {
 if (ENVIRONMENT === 'development') {
 if (window.console && window.console.log) {
 window.console.log(msg);
 }
 }
 }*/

/*comunicacion de eventos con el HTML*/
function callEvent(event) {
    var element = event.target;
    var _action = $(element).attr("href").replace('#', '');
    operacion(_action);
}



function isNull(obj) {
    if (typeof obj === 'undefined' || obj === null || obj == "") {
        return true;
    } else {
        return false;
    }
}



/*
 * Para utilizar la serealizacion es necesario poner el texto $(selecto).serializeJSONX();
 * En los inputs tenemos que poner en el NAME un valor de ( :date ) para poder indicarle que es una fecha
 * Ejm: <input type="text" name="entidad[atributo]:date" value="" />
 * Despues para poder serializar con json le llamamos deesta forma
 * Ejm: $("#formEjemplo").serializeJSONX();
 * Este ejemplo retornara el JSON ya parseado por las fechas
 * para terminar el valor que devuelve es algo similar a esto "2001-01-01T16:01:44.000Z" que es formato time zone
 */
jQuery.fn.extend({
    serializeJSONX: function () {
        var cont = 0;
        var res = null;
        this.each(function () {
            try {
                res = jQuery(this).serializeJSON({
                    customTypes: {
                        date: function (str) { // value is always a string
                            var a = str.split(/-|\s|:/);
                            var fecha = "";
                            if (a.length > 3) {
                                fecha = new Date(a[2], a[1] - 1, a[0], a[3], a[4], 0);
                            } else {
                                fecha = new Date(a[2], a[1] - 1, a[0], 0, 0, 0);
                            }
                            var dateFecha = new Date(fecha);
                            return dateFecha.getTime();
                        }
                    }
                });
            } catch (e) {
                logger(e);
            }
        });
        return res;
    }
});

/* Codigo equipo COM */
function deleteMsg(msg, handleData) {
    bootbox.confirm({
        title: DOMINIO_CLIENTE,
        show: true,
        message: "<div style='width:100%'> <div style='width: 12%;float: left;margin-top: 25px;padding-left: 12px; font-size: 35px; margin-bottom: 20px;'><i class='glyphicon glyphicon-remove-sign'></i> </div> <div style='width:85%; '><p>Esta seguro de querer eliminar " + msg + "?</p> <small>¿Desea continuar?</small></div> </div>  ",
        buttons: {
            'cancel': {
                label: "No",
                className: 'btn-default'
            },
            'confirm': {
                label: "Si",
                className: 'btn-primary'
            }
        },
        callback: function (result) {
            handleData(result);
        }
    });
}

function warningMsg(msg, handleData) {
    bootbox.confirm({
        title: DOMINIO_CLIENTE,
        show: true,
        message: "<div style='width:100%'> <div style='width: 12%;float: left;margin-top: 10px;padding-left: 12px; font-size: 35px; margin-bottom: 20px;'><i class='glyphicon glyphicon-warning-sign'></i> </div> <div style='width:85%; '><p>Advertencia!!!</p> <p>" + msg + "</p></div> </div>  ",
        buttons: {
            'cancel': {
                label: "Cancelar",
                className: 'btn-default'
            },
        },
        callback: function (result) {
            handleData(result);
        }
    });
}

function confirmMsg(msg, handleData) {
    bootbox.confirm({
        title: "",
        show: true,
//        message: "<div style='width:100%'> <div style='width: 12%;float: left;margin-top: 10px;padding-left: 12px; font-size: 35px; margin-bottom: 20px;'><i class='glyphicon glyphicon-question-sign'></i> </div> <div style='width:85%; '><p>Confirma la acción seleccionada?</p> <p>" + msg + "</p></div> </div>  ",
        message: "<div style='width:100%'> <div style='width: 12%;float: left;margin-top: 10px;padding-left: 12px; font-size: 35px; margin-bottom: 20px;'><i class='glyphicon glyphicon-question-sign'></i> </div> <div style='width:85%; '> <p>" + msg + "</p></div> </div>  ",
       
        buttons: {
            'cancel': {
                label: "No",
                className: 'btn-default'
            },
            'confirm': {
                label: "Si",
                className: 'btn-primary'
            }
        },
        callback: function (result) {
            handleData(result);
        }
    });
}


function confirmMsgSuccess(msg, handleData) {
    bootbox.confirm({
        title: "",
        show: true,
        message: "<div style='width:100%'> <div style='width: 12%;float: left;margin-top: 10px;padding-left: 12px; font-size: 35px; margin-bottom: 20px;'><i class='glyphicon glyphicon-ok'></i> </div> <div style='width:85%; '><p> Exito </p> <p>" + msg + "</p></div> </div>  ",
        buttons: {
            'cancel': {
                label: "No",
                className: 'btn-default'
            },
            'confirm': {
                label: "Si",
                className: 'btn-primary'
            }
        },
        callback: function (result) {
            handleData(result);
        }
    });
}

/****
 * funcion que permite gestionar los place holder y los titles de los input y los textArea
 * Ejemplo de utilización
 * $("#yourFomr").replaceHolder();
 * $("#yourDiv").replaceHolder();

 Parametros configurables.
 none: no realiza ningun cambio, deja en blanco el texto del componente
 custom: mantiene el texto ingresado, quitando el prefijo "custom:"

 Nota:
 Si existe el title o el place, el contenido es reemplazado
 En caso no exista el title o el placeholder este se contruye en base al contenido del label que acompaña al componente.

 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
    $.fn.extend({
        replaceHolder: function () {
            var inputs = $(this).find("input");
            $.each(inputs, function (index, value) {
                var placeholder = $(value).attr("placeholder");
                var title = $(value).attr("title");
                var text_label = $(this).closest('.form-group').find('label');  //input-group
                if (text_label.length > 0) {
                    text_label = text_label.html().replace(":", "").replace(/<(\w+)[^>]*>.*<\/\1>/gi, "");
                    if ((placeholder !== undefined && placeholder !== '') && (title !== undefined && title !== '')) {
                        if (placeholder !== 'none') {
                            if (placeholder.indexOf("custom:") >= 0) {
                                $(value).attr("placeholder", placeholder.replace("custom:", ""));
                            } else {
                                var readonly_input = $(value).attr("readonly");
                                var disabled_input = $(value).attr("disabled");
                                if ((readonly_input !== null && readonly_input !== undefined) || (disabled_input !== null && disabled_input !== undefined)) {
                                    $(value).attr("placeholder", "");
                                } else {
                                    $(value).attr("placeholder", NOTIFIERS.MESSAGES.PLACEHOLDER + " " + text_label.toLowerCase());
                                }
                            }
                        } else {
                            $(value).attr("placeholder", placeholder.replace("none", ""));
                        }

                        if (title !== 'none')
                        {
                            if (title.indexOf("custom:") >= 0) {
                                $(value).attr("title", title.replace("custom:", ""));
                            } else {
                                $(value).attr("title", NOTIFIERS.MESSAGES.TITLE + " " + text_label.toLowerCase());
                            }
                        } else {
                            $(value).attr("title", placeholder.replace("none", ""));
                        }
                    } else {
                        var readonly_input = $(value).attr("readonly");
                        var disabled_input = $(value).attr("disabled");
                        if ((readonly_input !== null && readonly_input !== undefined) || (disabled_input !== null && disabled_input !== undefined)) {
                            $(value).attr("placeholder", "");
                        } else {
                            $(value).attr("placeholder", NOTIFIERS.MESSAGES.PLACEHOLDER + " " + text_label.toLowerCase());
                        }
                        $(value).attr("title", NOTIFIERS.MESSAGES.TITLE + " " + text_label.toLowerCase());
                    }
                }
            });

            /*** para los textArea ***/
            var textAreas = $(this).find("textarea");

            $.each(textAreas, function (index, value) {
                //var type = $(value).attr("type");
                var placeholder = $(value).attr("placeholder");
                var title = $(value).attr("title");
                var text_label = $(this).closest('.form-group').find('label');  //input-group
                if (text_label.length > 0) {
                    text_label = text_label.html().replace(":", "").replace(/<(\w+)[^>]*>.*<\/\1>/gi, "");
                    if ((placeholder !== undefined && placeholder !== '') && (title !== undefined && title !== '')) {
                        if (placeholder !== 'none') {
                            if (placeholder.indexOf("custom:") >= 0) {
                                $(value).attr("placeholder", placeholder.replace("custom:", ""));
                            } else {
                                var readonly_input = $(value).attr("readonly");
                                var disabled_input = $(value).attr("disabled");
                                if ((readonly_input !== null && readonly_input !== undefined) || (disabled_input !== null && disabled_input !== undefined)) {
                                    $(value).attr("placeholder", "");
                                } else {
                                    $(value).attr("placeholder", NOTIFIERS.MESSAGES.PLACEHOLDER + " " + text_label.toLowerCase());
                                }
                            }
                        } else {
                            $(value).attr("placeholder", placeholder.replace("none", ""));
                        }

                        if (title !== 'none')
                        {
                            if (title.indexOf("custom:") >= 0) {
                                $(value).attr("title", title.replace("custom:", ""));
                            } else {
                                $(value).attr("title", NOTIFIERS.MESSAGES.TITLE + " " + text_label.toLowerCase());
                            }
                        } else {
                            $(value).attr("title", title.replace("none", ""));
                        }
                    } else {
                        var readonly_input = $(value).attr("readonly");
                        var disabled_input = $(value).attr("disabled");
                        if ((readonly_input !== null && readonly_input !== undefined) || (disabled_input !== null && disabled_input !== undefined)) {
                            $(value).attr("placeholder", "");
                        } else {
                            $(value).attr("placeholder", NOTIFIERS.MESSAGES.PLACEHOLDER + " " + text_label.toLowerCase());
                        }
                        $(value).attr("title", NOTIFIERS.MESSAGES.TITLE + " " + text_label.toLowerCase());
                    }
                } else
                {
                    if ($(value).attr("placeholder")) {
                        if (placeholder !== 'none' && placeholder !== undefined) {
                            if (placeholder.indexOf("custom:") >= 0) {
                                $(value).attr("placeholder", placeholder.replace("custom:", ""));
                            } else {
                                var readonly_input = $(value).attr("readonly");
                                var disabled_input = $(value).attr("disabled");
                                if ((readonly_input !== null && readonly_input !== undefined) || (disabled_input !== null && disabled_input !== undefined)) {
                                    $(value).attr("placeholder", "");
                                } else {
                                    $(value).attr("placeholder", NOTIFIERS.MESSAGES.PLACEHOLDER + " " + placeholder.toLowerCase());
                                }
                            }
                        } else {
                            if (placeholder !== undefined)
                                $(value).attr("placeholder", placeholder.replace("none", ""));
                        }

                        if (title !== 'none' && title !== undefined)
                        {
                            if (title.indexOf("custom:") >= 0) {
                                $(value).attr("title", title.replace("custom:", ""));
                            } else {
                                $(value).attr("title", NOTIFIERS.MESSAGES.TITLE + " " + placeholder.toLowerCase());
                            }
                        } else {
                            if (title !== undefined)
                                $(value).attr("title", title.replace("none", ""));
                        }
                    } else {
                        var readonly_input = $(value).attr("readonly");
                        var disabled_input = $(value).attr("disabled");
                        if ((readonly_input !== null && readonly_input !== undefined) || (disabled_input !== null && disabled_input !== undefined)) {
                            $(value).attr("placeholder", "");
                        } else {
                            $(value).attr("placeholder", NOTIFIERS.MESSAGES.PLACEHOLDER + " " + text_label.toLowerCase());
                        }
                        $(value).attr("title", NOTIFIERS.MESSAGES.TITLE + " " + text_label.toLowerCase());
                    }
                }
            });

            var selects = $(this).find("select");
            $.each(selects, function (index, value) {
                var title = $(value).attr("title");
                var text_label = $(this).closest('.form-group').find('label');  //input-group
                if (text_label.length > 0) {
                    text_label = text_label.html().replace(":", "").replace(/<(\w+)[^>]*>.*<\/\1>/gi, "");
                    if ((title !== undefined && title !== '')) {
                        if (title !== 'none')
                        {
                            if (title.indexOf("custom:") >= 0) {
                                $(value).attr("title", title.replace("custom:", ""));
                            } else {
                                $(value).attr("title", NOTIFIERS.MESSAGES.TITLE_SELECT + " " + text_label.toLowerCase());
                            }
                        } else {
                            $(value).attr("title", '');
                        }
                    } else {
                        $(value).attr("title", NOTIFIERS.MESSAGES.TITLE_SELECT + " " + text_label.toLowerCase());
                    }
                }
            });
        }
    });
})(jQuery);

/*get parameter by name from url*/
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*open new window tab chrome browser*/
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
function beforeCreatedrawMenu() {
    $(".sliderMenuColpase").click(function (event) {
        $(this).parent('li').children('ul').slideToggle("fast");
    });
    $(".dropdown").hover(
            function () {
                $('.dropdown-menu', this).stop().fadeIn("fast");
            },
            function () {
                $('.dropdown-menu', this).stop().fadeOut("fast");
            });
}

//convirte el contenido de un archivo en base64
function converFileToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[ i ]);
    }
    return window.btoa(binary);
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2)
        return parts.pop().split(";").shift();
}
;