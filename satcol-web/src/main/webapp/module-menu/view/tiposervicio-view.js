var tableView = new GenericTable("#tabletiposervicio");
var modalView = new GenericView("#modalTiposervicio");
var filterView = new GenericView("#filtertiposervicio");
modalView.openCreatev = function () {
    this.ui.modal("show");
}
tableView.drawTable = function (data) {
    var self = this;
    var headTable = "";
    headTable = "<table id='tbltiposervicio' class='table table-hover'><thead><tr>";
    headTable += "<th>Nombre</th>";
    headTable += "<th>Precio</th>";
    headTable += "<th>Fecha registro</th>";
    headTable += "</tr></thead>";
    var rowsTable = "", desc = "", tip = "";
    $.each(data.tiposervicioList, function (i, registro) {
        rowsTable += "<tr data-id='" + registro[0] + "'>";
        rowsTable += "<td class='data'>" + $.formatField(registro[1]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[2]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField($.formatFieldDateTz(registro[3])) + "</td>";
        rowsTable += "</tr>";
    });
    var tableReport = headTable + "<tbody>" + rowsTable + "</tbody></table>";

    self.ui.find("#table_content").html(tableReport);
    self.ui.find("#tbltiposervicio").toDataTable(true);
    self.bindEventSelect(false);
}
modalView.apply = function (retorna) {
    var self = this;
    self.validation();
    var form = self.ui.find("#formTiposervicio");
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
    var form = self.ui.find("#formTiposervicio");
    settings = form.validation();
    $.extend(true, settings, {
        rules: {
            "tiposervicio[nombretipo]": {
//                number: true,
                required: true
            },
            "tiposervicio[precio]": {
                number: true,
                required: true
            }

        }
    });
}
modalView.fillDataModalservicio = function (d) {
    this.ui.find("input[name='tiposervicio[id]']").val(d.id);
    this.ui.find("input[name='tiposervicio[nombretipo]']").val(d.nombretipo);
    this.ui.find("input[name='tiposervicio[precio]']").val(d.precio);

}
modalView.reset = function () {
    this.ui.find("#formTiposervicio").validationReset();
//     this.ui.find("input[name='cliente[id]']").val(d.id);
    this.ui.find("input[name='tiposervicio[nombretipo]']").val("");
    this.ui.find("input[name='tiposervicio[precio]']").val("");
    this.ui.find("#formTiposervicio").trigger('reset');

}