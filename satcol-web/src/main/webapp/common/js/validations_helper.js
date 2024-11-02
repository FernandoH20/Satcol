/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * /*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 */

(function ($)
{
    /*
     * Validacion de fecha nacimiento
     * Ej. debe ser mayor a 18 anios
     */
    $.validator.addMethod("nacimiento", function (value, element) {
        var rs = false;
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var minDate = new Date(year - 18, month, day);
        var selDate = value.split(symbolDate);
        var selDate = new Date(selDate[2], selDate[1], selDate[0])
        if (selDate.getFullYear() <= minDate.getFullYear() && selDate.getMonth() - 1 <= minDate.getMonth() && selDate.getDate() <= minDate.getDate())
            rs = true;
        return this.optional(element) || rs;
    }, 'debe ser mayor de edad.');
    /*
     * Validacion de numero de telefono de cualquier longitud
     * pero este puede contener guiones, no puede contener letras ni otro caracter especial
     * Ej. correctos: 123456789-1123456 o 12345678 o 123456-12345678-1354698
     */
    $.validator.addMethod("phoneNumbers", function (value, element) {
        return this.optional(element) || /[0-9]+[-]?[0-9]?$/i.test(value);
    }, 'Numero de telefono no valido.');
    /*
     * Validacion del C.I. Carnet de identidad
     * en el cual solo pueden ir numeros y letras el cual si o si
     * tiene que empezar con numeros, no puede empezar con letras,
     * no puede contener solo letras y tampoco simbolos especiales
     * Ej. correctos: 12345678 o 12345678asdfg
     */
    $.validator.addMethod("ci", function (value, element) {
        return this.optional(element) || /^\d[0-9-a-zA-Z-]*$/i.test(value);
    }, 'C.I no valido.');

    $.validator.addMethod("ley1886", function (value, element) {
        console.log(value);
        console.log(element);
        return this.optional(element) || /^\d[0-9a-zA-Z-]*$/i.test(value);
    }, 'Ley1886, no aplica.');

    /*
     * Validacion de numeros decimales
     * solo se validaran numeros con dos decimales
     * saldra error con mas de dos decimales o caracter alfanumerico
     * EJ: 123456.12 12456789.00 correcto, 123456.234 incorrecto
     */
    $.validator.addMethod("decimal", function (value, element) {
        return this.optional(element) || /^\d+(\.\d{1,2})?$/i.test(value);
    }, 'datos no validos, ej. 123 o 123.12');


    /*
     * Validacion de fecha maxima 
     * se tiene encuenta la validacion para fechas en formato dd-MM-yyyy
     * formato ingles no contemplado, ha de generar errores
     * return true si la fecha del input es menor a la fecha actual Date.now()
     * EJ: 10-06-2016,  25-10-2016,
     */
    $.validator.addMethod("maxDateCurrent", function(value, element) {
        var maxDate = Date.now();
        var date = element.value.split(/-|\s|:/);
        curDate = new Date(date[2], date[1] - 1, date[0], 0, 0, 0);
        console.log(this.value, curDate, maxDate);
        if (curDate <= maxDate) {
            return true;
        }
        return false;
    });

    /*
     * Validacion de fecha minima 
     * se tiene encuenta la validacion para fechas en formato dd-MM-yyyy
     * formato ingles no contemplado, ha de generar errores
     * return true si la fecha del input es mayor a la fecha actual Date.now()
     * EJ: 10-06-2016,  25-10-2016,
     */
    $.validator.addMethod("minDateCurrent", function(value, element) {
        var curDate = Date.now();
        var date = element.value.split(/-|\s|:/);
        maxDate = new Date(date[2], date[1] - 1, date[0], 0, 0, 0);
        console.log(this.value, curDate, maxDate);
        if (curDate <= maxDate) {
            return true;
        }
        return false;
    });

    /*
     * Validacion de numero mayor a otro 
     * se validara si el numero de un campo es mayor a otro
     * return true si el numero del input es mayor al numero del otro elemento
     * EJ: 100, 200
     * */
    $.validator.addMethod("greaterThan", function (value, element, param) {
        var $otherElement = $(param);
        var labelParam = $('label[for="'+ $(param).attr('name') +'"]').text();
        var labelElement = $('label[for="'+ $(element).attr('name') +'"]').text();
        return parseInt(value, 10) > parseInt($otherElement.val(), 10);
    });

    $.fn.validation = function (options) {
        jQuery.validator.setDefaults({
            debug: false,
            lang: 'es',
            onclick: false,
            ignoreTitle: true,
            success: "valid",
            ignore: ".ignore",
            errorClass: "has-error",
            validClass: "has-success",
            errorContainer: "#messageBox",
            highlight: function (element, errorClass, validClass) {
                $(element).closest(".form-group").removeClass(validClass).addClass(errorClass);
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).closest(".form-group").removeClass(errorClass).addClass(validClass);
            },
            errorPlacement: function (error, element) {
                $(error).addClass(this.errorClass).addClass("control-label");
                //$(element).parent().parent().append(error);
            },
            invalidHandler: function (form, validator) {
                var errors = validator.numberOfInvalids();
                if (errors) {
                    var element = $(validator.errorList[0].element);
                    validator.errorList[0].element.focus(); //Set Focus
                }
            }
        });
        jQuery.extend(jQuery.validator.messages, {
            required: "Este campo es obligatorio.",
            remote: "Por favor, rellena este campo.",
            email: "Por favor, escribe una dirección de correo válida",
            url: "Por favor, escribe una URL válida.",
            date: "Por favor, escribe una fecha válida.",
            dateISO: "Por favor, escribe una fecha (ISO) válida.",
            number: "Por favor, escribe un número entero válido.",
            digits: "Por favor, escribe sólo dígitos.",
            equalTo: "Por favor, escribe el mismo valor de nuevo.",
            accept: "Por favor, escribe un valor con una extensión aceptada.",
            maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
            minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
            rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
            range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
            max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
            min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}."),
            creditard: "Por favor, escribe un número de tarjeta válido.",
            ci: "Por favor, escribe un número de ci válido."
        });
        return $(this).validate().settings;
    };
})(jQuery);

/*
 Para poder utilizar solo seleccionar el formulario con jquery
 $(selector).validationReset();
 */
jQuery.fn.extend({
    validationReset: function () {
        jQuery(this).validate().resetForm();
        this.each(function () {
            var selector = jQuery(this);
            selector.find("label").parent("div.form-group").removeClass("has-error");
            selector.find("label").parent("div.form-group").removeClass("has-feedback");
            selector.find("label").parent("div.form-group").removeClass("has-success");
            selector.find("span.form-control-feedback").removeClass("glyphicon-remove");
            selector.find("span.form-control-feedback").removeClass("glyphicon-ok");
        });
    }
});


/*
 * Ejemplo de uso para el JQUERY VALIDATE
 * #formExample es el id del formulario <form id="formExample">
 * $("#formExample").validateMsj();
 */
jQuery.fn.extend({
    validateMsj: function () {
        try {
            var form = $(this);
            var summary = "";
            $.each(form.validate().errorList, function (index, item) {
                var obj = $(item.element);
                summary += "<span><strong>" + obj.closest(".form-group").find(".control-label").text() + ":</strong> " + this.message + "</span><br/>";
            });
            var title = "<strong>Verifica tu informaci&oacute;n</strong><p></p>" + summary;
            msgComee(title, "error")
        } catch (e) {
            logger(e);
        }
    }
});



