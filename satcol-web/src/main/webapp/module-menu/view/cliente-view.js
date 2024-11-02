var tableView = new GenericTable("#tableCliente");
var modalView = new GenericView("#modalCliente");
var filterView = new GenericView("#filtercliente");
//var filterCobroMultipleView = new GenericView("#filterCobroMultiple");// DAV
modalView.fillDataModalconsumidor = function (data, dav) {
    var self = this;
    var form = self.ui.find("#formFilter");
    form.find('input[name="contratoservicio[nombretipo]"]').val(data);
//    form.find('input[name="codigoDto[dav]"]').val(dav);
}
modalView.submit = function (callback) {
    this.validateForm();
    var self = this;
    this.submitGeneric("#formFilter", function (dataSerealize) {
        return callback(dataSerealize);

    });
}
modalView.openCreatev = function () {
    this.ui.modal("show");
}
tableView.drawTable = function (data) {
    var self = this;
    var headTable = "";
    headTable = "<table id='tblcliente' class='table table-hover'><thead><tr>";
    headTable += "<th>Nombre</th>";
    headTable += "<th>Apellido Paterno</th>";
    headTable += "<th>Telefono</th>";
    headTable += "<th>Celular</th>";
    headTable += "<th>CI</th>";
    headTable += "<th>Nit</th>";
    headTable += "<th>Direccion</th>";
    headTable += "<th>Estado</th>";
    headTable += "<th>Tipo</th>";

    // headTable += "<th>Usuario Login</th>";
    headTable += "</tr></thead>";
    var rowsTable = "", desc = "", tip = "";
    $.each(data.clienteList, function (i, registro) {
        rowsTable += "<tr data-id='" + registro[0] + "'>";
        rowsTable += "<td class='data'>" + $.formatField(registro[1]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[2]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[3]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[4]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[5]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[6]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[7]) + "</td>";
        if (registro[8] === 1)
        {
            desc = "Habilitado";
        } else
        {
            desc = "Deshabilitado";
        }
        rowsTable += "<td class='data'>" + $.formatField(desc) + "</td>";
        if (registro[9] === 1)
        {
            tip = "Eventual";
        } else
        {
            tip = "Fijo";
        }
        rowsTable += "<td class='data'>" + $.formatField(tip) + "</td>";
//        rowsTable += "<td class='data'>" + $.formatField($.formatFieldDateTz(registro[8])) + "</td>";
        rowsTable += "</tr>";
    });
    var tableReport = headTable + "<tbody>" + rowsTable + "</tbody></table>";

    self.ui.find("#table_content").html(tableReport);
    self.ui.find("#tblcliente").toDataTable(true);
    self.bindEventSelect(false);
}
modalView.apply = function (retorna) {
    var self = this;
    self.validation();
    var form = self.ui.find("#formCliente");
    form.submit(function (event) {
        event.preventDefault();
        if (form.valid()) {
            var dataIn = form.serializeJSONX();
            retorna(dataIn);
        } else {
            form.validateMsj();
        }
    });

}
modalView.validation = function () {
    var self = this;
    var form = self.ui.find("#formCliente");
    settings = form.validation();
    $.extend(true, settings, {
        rules: {
            "cliente[nombre]": {
//                number: true,
                required: true
            },
            "cliente[apellido]": {

                required: true
            },
            "cliente[telefono]": {

                required: true
            },
            "cliente[celular]": {
                number: true,
                required: true
            },
            "cliente[ci]": {
                required: true
            },
            "cliente[nit]": {
                number: true,
                required: true
            },
            "cliente[direccion]": {

                required: true
            },
            "cliente[estado]": {

                required: true
            },
            "cliente[tipo]": {
                required: true

            }

        }
    });
}
modalView.fillDataModalcliente = function (d) {
    this.ui.find("input[name='cliente[id]']").val(d.id);
    this.ui.find("input[name='cliente[nombre]']").val(d.nombre);
    this.ui.find("input[name='cliente[apellido]']").val(d.apellido);
    this.ui.find("input[name='cliente[telefono]']").val(d.telefono);
    this.ui.find("input[name='cliente[celular]']").val(d.celular);
    this.ui.find("input[name='cliente[ci]']").val(d.ci);
    this.ui.find("input[name='cliente[nit]']").val(d.nit);
    this.ui.find("input[name='cliente[direccion]']").val(d.direccion);
    this.ui.find("select[name='cliente[estado]']").val(d.estado);
    this.ui.find("select[name='cliente[tipo]']").val(d.tipo);


}
modalView.reset = function () {
    this.ui.find("#formCliente").validationReset();
//     this.ui.find("input[name='cliente[id]']").val(d.id);
    this.ui.find("input[name='cliente[nombre]']").val("");
    this.ui.find("input[name='cliente[apellido]']").val("");
    this.ui.find("input[name='cliente[telefono]']").val("");
    this.ui.find("input[name='cliente[celular]']").val("");
    this.ui.find("input[name='cliente[ci]']").val("");
    this.ui.find("input[name='cliente[nit]']").val("");
    this.ui.find("input[name='cliente[direccion]']").val("");
    this.ui.find("select[name='cliente[estado]']").val("");
    this.ui.find("select[name='cliente[tipo]']").val("");
    this.ui.find("#formCliente").trigger('reset');

}