(function ($) {
    // Define our constructor
    this.GenericPresenter = function (view, request) {

        this._options = {};
        var _defaults = {
        }
        this._defaults = {
        };
        this._view = view;
        this._request = request;
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
    GenericPresenter.prototype.init = function () {
        //translate(this._view);
    };
}(jQuery));