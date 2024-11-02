/**
 * Esta clase GenericView contiene todos los metodos necesarios
 * y el atributo $ que llama al objeto JQUERY
 *
 * @author  Juan Perez
 * @see     msgInfo(), msg
 */
(function ($) {
    // Define our constructor

    this.GenericTable = function (contenedor) {
        GenericView.apply(this, arguments);
        this.rowsSelected = [];
        this.rowsDataItemSelected = [];
    };
    this.GenericTable.prototype = GenericView.prototype;

    this.GenericTable.prototype.bindEventSelect = function (isMultipleSeleccion) {
        this.rowsSelected = [];
        var _self = this;
        var table = _self.ui.find('table');
        table.find('tbody').on('click', 'tr', function () {
            var id = (Boolean(this.attributes["data-id"])) ? this.attributes["data-id"].nodeValue : null;
            var item = {};
            if (Boolean(this.attributes["data-item"]))
                item = JSON.parse(this.attributes["data-item"].nodeValue);
            var index = $.inArray(id, _self.rowsSelected);
            if (index === -1) {
                _self.rowsSelected.push(id);
                _self.rowsDataItemSelected.push(item);
                table.find('tbody').find(this).toggleClass('selected');
                if (Boolean(table.find('tbody').find(this).find("input[type='checkbox']")))
                    table.find('tbody').find(this).find("input[type='checkbox']").prop("checked", true);
            } else {
                _self.rowsSelected.splice(index, 1);
                _self.rowsDataItemSelected.splice(index, 1);
                table.find('tbody').find(this).toggleClass('selected');
                if (Boolean(table.find('tbody').find(this).find("input[type='checkbox']")))
                    table.find('tbody').find(this).find("input[type='checkbox']").prop("checked", false);
            }

            if (!isMultipleSeleccion)
            {
                $.each(table.find('tbody tr'), function (index, item) {
                    var _id = item.attributes["data-id"].nodeValue;
                    if (id != _id) {
                        _self.ui.find(item).removeClass('selected');
                        if (_self.rowsSelected.indexOf(_id) > -1) {
                            _self.rowsSelected.splice(_self.rowsSelected.indexOf(_id), 1);
                            _self.rowsDataItemSelected.splice(index, 1);
                        }
                        if (Boolean(table.find('tbody').find(this).find("input[type='checkbox']")))
                            _self.ui.find(item).find("input[type='checkbox']").prop("checked", false);
                    }
                });
            }


        });
    };

}(jQuery));