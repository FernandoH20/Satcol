var modalPresenter = new GenericPresenter(modalPresenterView, request);
modalPresenter.submit = function () {
    var self = this;
    self._view.submitGeneric("#formLogin", function (dataSerialize)
    {
        request.post(rest.usu.usuario.verificaexist_uri, dataSerialize).then(function (data) {
            if (data.result === 0)
            {
                self._view.messageSuccess(data.resultMessage);
                self._view.ejecuta();
            } else
            {
                self._view.messageError(data.resultMessage);
            }

        }).catch(function (e) {
            console.log("error" + e);
        });
    });
};