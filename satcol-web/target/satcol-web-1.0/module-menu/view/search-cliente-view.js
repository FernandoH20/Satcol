var viewModalBuscar = new GenericView("#modalBuscar");
//var tableView = new GenericTable("#tableBusqueda");

viewModalBuscar.getTexto = function () {
    var self = this;
    return self.ui.find("input[name='searchText']").val();
}

viewModalBuscar.drawTable = function () {
    var _self = this;
    var tableNucConsumidor = _self.ui.find('#tablecliente');

    tableNucConsumidor.dataTable({
        "search": false,
        "processing": true,
        "serverSide": true,
        "ordering": true,
        "regex": true,
        "responsive": true,
        "paging": true,
        "autoWidth": false,
        "pageLength": 10,
        "lengthMenu": [[10, 25, 50, 100], [10, 25, 50, 100]],
        "bPaginate": false,
        "pagingType": "full_numbers",
//        "bStateSave": true,
        "order": [[1, "asc"]],
        "ajax": {
//              request.post(rest.cob.cobranza.printcierre_uri, dataIn).then(function (data) {
            "url": request.parseUri('Cliente/listaconsumidores'),
            "type": "POST",
            "contentType": "application/json",
            "data": function (d) {
                d.search.texto = viewModalBuscar.getTexto();
                return JSON.stringify(d);
            }
        },
        "language": {url: "../../plugins/datatable/json/Spanish.json"},
        "rowCallback": function (row, data) {
            if ($.inArray(data.id, _self.rowsSelected) !== -1) {
                $(row).addClass('selected');
            }
        },
        "columnDefs": [
            {
                "targets": [0],
                "visible": false,
                "searchable": false
            }
        ]
    })
    tableNucConsumidor.find('tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            tableNucConsumidor.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

}

viewModalBuscar.buscar = function () {
    var _self = this;
    var form = _self.ui.find("#formBuscar");

    var tableNucConsumidor = _self.ui.find("#tablecliente").DataTable();
    form.submit(function (event) {
        event.preventDefault();
        tableNucConsumidor.ajax.reload();
    });
};

viewModalBuscar.catch = function (callback) {
    var self = this;
    var form = self.ui.find("#formCatch");

    var tableNucConsumidor = self.ui.find("#tablecliente").DataTable();
    form.submit(function (event) {

        event.preventDefault();
        if (Boolean(tableNucConsumidor.row(".selected").data())) {
            self.closeModal();
            self.ui.find("#formCatch").unbind("submit");
            callback(tableNucConsumidor.row(".selected").data());

        } else {
            self.messageWarning(translate("Seleccione una fila"));
        }
    });
};

viewModalBuscar.openModal = function () {
    var _self = this;
    $('body').addClass("overflow-none");
    modalPresenter._view.ui.addClass("changeZIndex");
    _self.ui.modal("show");
}

viewModalBuscar.closeModal = function () {
    var _self = this;
    modalPresenter._view.ui.addClass("overflow-auto");
    modalPresenter._view.ui.removeClass("changeZIndex");
    _self.ui.modal("hide");
}