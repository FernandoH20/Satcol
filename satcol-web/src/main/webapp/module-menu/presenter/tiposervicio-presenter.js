var tablePresenter = new GenericPresenter(tableView, request);
var modalPresenter = new GenericPresenter(modalView, request);
var filterPresenter = new GenericPresenter(filterView, request);
filterPresenter.refrescar = function ()
{
    tablePresenter.list();
};
modalPresenter.openCreate = function () {

   // this._view.reset();
    this._view.openCreatev();

}
tablePresenter.list = function () {
    var self = this;

    var dataInput =
            {
                tiposervicio:
                        {
                            nombretipo: null
                        }

            };
    request.post(rest.ser.tiposervicio.findall_uri, dataInput).then(function (data) {
        self._view.drawTable(data);
        self._view.rowsSelected = [];
    }).catch(function (e) {

    });
}
modalPresenter.submit = function () {

    var self = this;

    self._view.apply(function (data1) {
        // self._view.submitGeneric("#formExportarImportar", function (dataSerialize) {

        var id = self._view.ui.find("input[name='tiposervicio[id]']").val();
        var route = (id > 0) ? rest.ser.tiposervicio.update1_uri : rest.ser.tiposervicio.create_uri;
//        request.post(rest.usu.usuario.create_uri, route).then(function (data) {
        request.post(route, data1).then(function (data) {
            if (data.result == 2)
            {

                self._view.messageInfo(data.resultMessage);

            } else
            {
                tablePresenter.list();
                self._view.message(data);
                self._view.ui.modal("hide");
            }

        }).catch(function (e) {
            alert("FALSE");
        });
    });

}
modalPresenter.delete = function () {
    var self = this;


    var id = tablePresenter._view.rowsSelected[0];
    if (id > 0) {

        confirmMsg(NOTIFIERS.MESSAGES.DELETECONFIRM, function (dataConfirm) {
            if (dataConfirm) {
                request.post(rest.ser.tiposervicio.delete_uri, {tiposervicio: {id: parseInt(id)}}).then(function (data) {

                    if (data.result == 2)
                    {
                        self._view.message(data);
                    } else
                    {
                        tablePresenter.list();
                        self._view.message(data);
                    }
                }).catch(function () {

                });

            }
        });

    } else {
        self._view.messageInfo(NOTIFIERS.MESSAGES.REQUIRED_ROW);
    }
//      
};
modalPresenter.openEdit = function () {
    var self = this;
    var id = tablePresenter._view.rowsSelected[0];
    if (id > 0) {

        request.post(rest.ser.tiposervicio.findByIdedit_uri, {tiposervicio: {id: parseInt(id)}}).then(function (data) {
            if (data.result == 0)
            {
                self._view.fillDataModalservicio(data.tiposervicio);
                self._view.ui.modal("show");
            } else
            {
                self._view.messageError(data.resultMessage);

            }

        }).catch(function (e) {
            console.log(e);
        });

    } else {
        self._view.messageInfo(NOTIFIERS.MESSAGES.REQUIRED_ROW);
    }

};
filterPresenter.submit = function () {
    var self = this;
    self._view.submitGeneric("#formFilter", function (dataSerialize)
    {
        request.post(rest.ser.tiposervicio.findall_uri, dataSerialize).then(function (data) {
            tablePresenter._view.drawTable(data);
        }).catch(function (e) {

        });
    })
}