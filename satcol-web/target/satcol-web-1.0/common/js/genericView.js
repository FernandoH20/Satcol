/**
 * Esta clase GenericView contiene todos los metodos necesarios
 * y el atributo $ que llama al objeto JQUERY
 *
 * @author  Juan Perez
 * @see     msgInfo(), msg
 */
(function ($) {
// Define our constructor
    this.GenericView = function (container) {

        this._options = {};
        var _defaults = {}
        this._defaults = {};
        this._container = container;
        this._options = extendDefaults(_defaults, arguments[1]);
        this.init();
    };
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
    ;
    GenericView.prototype.init = function () {
        beforeCreatedrawMenu();
        translate(this._container);
        this.ui = $(this._container);
        this.ui.find('[data-toggle="tooltip"]').tooltip();
        this.ui.find("input[type='checkbox']").bootstrapToggle({
            size: 'mini',
            on: translate('{{Si}}'),
            off: translate('{{No}}')
        });
        //this.ui.find("._maxDateTime").mask("9999-99-99 99:99", {placeholder: "____-__-__ __:__"});
        this.ui.find("._maxDateTime").mask("99-99-9999 99:99", {placeholder: "__-__-____ __:__"});
        //this.ui.find("._maxDateTime").datetimepicker({locale: 'es', format: 'YYYY-MM-DD HH:mm', sideBySide: true, useCurrent: false});
        this.ui.find("._maxDateTime").datetimepicker({locale: 'es', format: 'DD-MM-YYYY HH:mm', sideBySide: true, useCurrent: false});
        //this.ui.find("._maskDate").mask("9999-99-99", {placeholder: "____-__-__"});
        this.ui.find("._maskDate").mask("99-99-9999", {placeholder: "__-__-____"});
        //this.ui.find("._fixDate").datetimepicker({locale: 'es', format: 'YYYY-MM-DD', sideBySide: false, useCurrent: false});
        this.ui.find("._fixDate").datetimepicker({locale: 'es', format: 'DD-MM-YYYY', sideBySide: false, useCurrent: false});


        this.ui.find("._fixHour").datetimepicker({locale: 'es', format: 'LT', sideBySide: false, useCurrent: false});
        this.ui.find("._maskHour").mask("__:__", {placeholder: "__:__"});

    };
    GenericView.prototype.submitGeneric = function (selector, callback) {
        var form = this.ui.find("form" + selector);
        var filter = this.ui.find(".formFilter");
        if (form.length > 0) {
            form.submit(function (event) {
                event.preventDefault();
                if (form.valid()) {
                    var dataIn = form.serializeJSONX();
                    if (filter.length > 0)
                        form.findBy(filter);

                    form.validationReset();
                    callback(dataIn);
                } else {
                    form.validateMsj();
                }
            });
        } else {
            debug.info(ELEMENTO_NO_ENCONTRADO + " '" + selector + "'");
        }
    };
    function message(data) {
        switch (data.result) {
            case 0:
            {
                if (Boolean(data.resultMessage)) {
                    msgSuccess(data.resultMessage);
                } else {
                    msgSuccess(NOTIFIERS.MESSAGES.SUCCESS);
                }
                break;
            }
            case 1:
            {
                if (Boolean(data.resultMessage)) {
                    msgError(data.resultMessage);
                } else {
                    msgError(NOTIFIERS.MESSAGES.ERROR);
                }
                break;
            }
            case 2:
            {
                if (Boolean(data.resultMessage)) {
                    msgWarning(data.resultMessage);
                } else {
                    msgWarning(NOTIFIERS.MESSAGES.WARNING);
                }
                break;
            }
            case 3:
            {
                if (Boolean(data.resultMessage)) {
                    msgInfo(data.resultMessage);
                } else {
                    msgInfo(NOTIFIERS.MESSAGES.INFO);
                }
                break;
            }
            default:
            {
                if (Boolean(data.resultMessage)) {
                    msgError(data.resultMessage);
                } else {
                    msgError(NOTIFIERS.MESSAGES.ERROR);
                }
                break;
            }

        }
    }
    GenericView.prototype.message = function (data) {
        message(data);
    };
    GenericView.prototype.messageError = function (_message) {
        var data = {result: 1, resultMessage: _message};
        message(data);
    };
    GenericView.prototype.messageSuccess = function (_message) {
        var data = {result: 0, resultMessage: _message};
        message(data);
    };
    GenericView.prototype.messageInfo = function (_message) {
        var data = {result: 3, resultMessage: _message};
        message(data);
    };
    GenericView.prototype.messageWarning = function (_message) {
        var data = {result: 2, resultMessage: _message};
        message(data);
    };
}(jQuery));