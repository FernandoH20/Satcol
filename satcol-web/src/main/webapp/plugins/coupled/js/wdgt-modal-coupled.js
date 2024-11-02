/**
 * PluginName modalCoupled
 * @description Modal cuopled show modal fixed on top document
 * @autor Vincen Alvarado Nina
 * @requires jQuery, tmpl,translate,undefined
 * @example basic initialize
 * @param uriTemplate url get templates
 * @param tmplid selector to find template
 * @param uriRest url rest get data
 * @param btnOpen selector element to open this modal
 * @param data data format JSON object to send request
 $("target").modalCoupled({
 tmplid:"#tmpl-consumidor",
 uriRest:base_url('atc/widgetconsumidortop'),
 btnOpen:'#btnDetailsConsumidor',
 data:{action:"getCondumidorByCodigo",consumidor:{codigo:$("input[name='solicitud[consumidorId][codigo]']").val()}}
 });
 * @example get instance $(selector).data('wdgtDocumento');
 * @example call methods from data $(selector).data('wdgtDocumento').show();
 * @function openBind,toggle,bind
 * @return this
 */
(function ($, _request) {
    // Define our constructor
    this.ModalCoupled = function () {

        // Create global element references
        // Define option defaults
        this.options = {};
        var modalid = $(".modalCoupled").length;
        this.modal = "#coupled" + modalid++;
        this.contentId = "#pane-content";
        this.btnClose = "#pane-footer";
        this.template = "";
        var defaults = {
            uriTemplate: "../template/tmpl-widget.html",
            tmplid: null,
            uriRest: null,
            data: null,
            btnOpen: null
        }
        this._defaults = defaults;
        this.options = extendDefaults(defaults, arguments[0]);
        this.init();
    }
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
    ModalCoupled.prototype.init = function () {
        var _self = this;
        $('body').append(drawModal(_self.modal));
        _self.modal = $(document.getElementById(_self.modal));
        _self.btnClose = _self.btnClose;
        if (!Boolean(_self.options.btnOpen)) {
            console.error("var btnOpen isn't defined");
        }
        $(_self.options.btnOpen).click(function (e) {
            e.preventDefault();
            if (_self.options.uriRest)
                _self.openBind();
            else
                console.error("var uriRest isn't loaded");
        });
        _self.modal.find(_self.btnClose).click(function (e) {
            e.preventDefault();
            if (!$(_self.modal).is(":hidden")) {
                _self.toggle();
            }
        });
        if (Boolean(_self.options.tmplid)) {
            loadView(this.options.uriTemplate).then(function (data) {
                var div = document.createElement("div");
                div.innerHTML = translate(data);
                if ($(div).find(_self.options.tmplid).length > 0)
                    _self.template = $(div).find(_self.options.tmplid).html();
                else
                    console.error("template not found");
            }).catch(function (error) {
                console.error(error);
            });
        } else {
            console.error("var tmplid isn't loaded");
        }

    };
    ModalCoupled.prototype.bind = function (data) {
        var _self = this;
        if (Boolean(_self.template)) {
            _self.modal.find(_self.contentId).html(tmpl(_self.template, data));
        } else {
            console.error("template isn't loaded");
        }
    };
    ModalCoupled.prototype.setSendData = function (data) {
        if (!Boolean(data)) {
            console.error("args isn't defined");
            return undefined;
        }
        this.options.data = data;
    };
    ModalCoupled.prototype.openBind = function () {
        var _self = this;
        if (!Boolean(_self.template)) {
            console.error("template isn't loaded");
            return undefined;
        }
        if (_self.options.data !== "") {
            _request.post(_self.options.uriRest, _self.options.data).then(function (data) {
                if (Boolean(data.objectWidget)) {
                    _self.bind(data);
                    _self.toggle();
                }
            }).catch(function (error) {
                console.log(error);
                _self.toggle();
            });
        } else {
            console.error("options.data is empty");
            _self.toggle();
        }
    };
    ModalCoupled.prototype.toggle = function () {
        if ($(this.modal).is(":hidden"))
            $(this.modal).slideToggle("open");
        else {
            $(this.modal).slideToggle("close");
            $(this.contentId).html('');
        }
    };

    function drawModal(modalCoupledId) {
        var _modal = '<div class="modalCoupled" id="' + modalCoupledId + '" style="display:none;">';
        _modal += '  <div class="pane">  ';
        _modal += '   <form method="post" id="pane-content">';
        _modal += '   </form>';
        _modal += '    <div class="misc text-center" id="pane-footer">';
        _modal += '<a href="javacript:(void)"><i class="glyphicon glyphicon-chevron-up"></i></a>';
        _modal += '    </div>';
        _modal += ' </div>';
        _modal += ' </div>';
        return _modal;
    }
    function loadView(url) {
        return  new Promise(function (resolve, reject) {
            $.ajax({
                type: "GET",
                cache: false,
                url: url,
                contentType: 'application/html',
                beforeSend: function (xhr) {
                },
                success: function (data, textStatus, jqXHR) {
                    resolve(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    reject(jqXHR);
                }
            });
        });
    }
    ;
}(jQuery, request));