var modalPresenter = new GenericPresenter(modalView, request);
var data_tiposer = {};
modalPresenter.openCreate = function () {

//    this._view.reset();
    this._view.openCreatev();

}

modalPresenter.getConsumidor = function () {
    var self = this;
    presenterModalBuscar.openModal(function (data)
    {
        dataIn = data[0];
        request.post(rest.cli.cliente.findByIdedit_uri, {cliente: {id: parseInt(data[0])}}).then(function (data) {
            if (data.result == 0)
            {
                modalPresenter._view.fillDataModalcli(data.cliente);

            } else
            {
                self._view.messageWarning(data.resultMessage);
            }
        }).catch(function (e) {
            console.log(e);
        });
    })
}
modalPresenter.fillSelectservicio = function () {
    var self = this;
    var dataInput =
            {
                tiposervicio:
                        {
                            nombretipo: null
                        }

            };
    request.post(rest.ser.tiposervicio.findall_uri, dataInput).then(function (data) {
        var opts = self._view.fillSelectserv(data);
        self._view.ui.find("select[name='tiposervicio[id]']").html(opts);
    }).catch(function (e) {

    });
}
modalPresenter.init = function () {
    var self = this;

    self._view.ui.find("select[name='tiposervicio[id]']").on('change', function () {
        var self = $(this);
        var idser = self.val();
        modalPresenter.fillSelecttipserv(idser)
    });
}
modalPresenter.fillSelecttipserv = function (id) {
    var self = this;

    request.post(rest.ser.tiposervicio.findByIdedit_uri, {tiposervicio: {id: parseInt(id)}}).then(function (data) {
        self._view.ui.find("input[name='tiposervicio[precio]']").val(data.tiposervicio.precio);
    }).catch(function (e) {

    });
}
modalPresenter.addRow = function (event) {

}
modalPresenter.listatipo = function () {
    var self = this;

    var dataInput =
            {
                tiposervicio:
                        {
                            nombretipo: null
                        }

            };
    request.post(rest.ser.tiposervicio.findall_uri, dataInput).then(function (data) {
        self._view.drawTablecontrato(data);
        self._view.rowsSelected = [];
    }).catch(function (e) {

    });
}
modalPresenter.submit = function () {
    var self = this;
    self._view.apply(function (data1)
    {
        if (data_tiposer.tiposervicioList == false)
        {
            self._view.messageInfo(NOTIFIERS.MESSAGES.REQUIRED_ROW1);
        } else
        {   data_tiposer.cliente = {id: data1.cliente.id};
            data_tiposer.contratoserviciodetalle = {observacion: data1.contratoserviciodetalle.observacion};
//            data_tiposer.cobranza = {id: data1.cobranza.id};
            request.post(rest.con.contratoserv.createcontrato_uri, data_tiposer).then(function (data) {
                if (data.result == 0)
                {
                    self._view.messageSuccess(data.resultMessage);

                } else
                {
                    self._view.messageWarning(data.resultMessage);
                }
            }).catch(function (e) {
                console.log(e);
            });
        }
    });


}