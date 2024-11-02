var presenterModalBuscar = new GenericPresenter(viewModalBuscar, request);
//var tablePresenter = new GenericPresenter(tableView, request);

presenterModalBuscar.init = function () {
    var _self = this;
    _self._view.drawTable();
//    presenterModalBuscar.submit();
       _self.buscar();
}

presenterModalBuscar.catch = function (callBack) {
    var _self = this;
    _self._view.catch(callBack);
}

presenterModalBuscar.buscar = function () {
    var _self = this;
    _self._view.buscar();

}

//presenterModalBuscar.listar = function () {
//    var _self = this;
//    _self._request.post(rest.ins.insestado.findall_uri, {}).then(function (data) {
//        _self._view.drawTable(data);
//    }).catch(function (error) {
//        debug.error(error.message);
//        _self._view.messageError();
//    });
//}

presenterModalBuscar.openModal = function (callBack) {
    var _self = this;
    _self._view.openModal();
    _self.catch(callBack);
}

presenterModalBuscar.closeModal = function () {
    var self = this;
    self._view.closeModal();
}