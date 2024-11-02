var tableView = new GenericTable("#tableUsuario");
var modalView = new GenericView("#modalUsuario");
var filterView = new GenericView("#filterusuario");
modalView.openCreatev = function () {
    this.ui.modal("show");
}
tableView.drawTable = function (data) {
    var self = this;
    var headTable = "";
    headTable = "<table id='tblUsuario' class='table table-hover'><thead><tr>";
    headTable += "<th>Nombre</th>";
    headTable += "<th>Apellido Paterno</th>";
    headTable += "<th>Apellido Materno</th>";
    headTable += "<th>Direccion</th>";
    headTable += "<th>Ci</th>";
    headTable += "<th>Cargo</th>";
    headTable += "<th>Estado</th>";
    headTable += "<th>Fecha registro</th>";
    // headTable += "<th>Usuario Login</th>";
    headTable += "</tr></thead>";
    var rowsTable = "", desc = "";
    $.each(data.usuarioList, function (i, registro) {
        rowsTable += "<tr data-id='" + registro[0] + "'>";
        rowsTable += "<td class='data'>" + $.formatField(registro[1]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[2]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[3]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[4]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[5]) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField(registro[6]) + "</td>";
        if (registro[7] === 1)
        {
            desc = "Habilitado";
        } else
        {
            desc = "Deshabilitado";
        }
        rowsTable += "<td class='data'>" + $.formatField(desc) + "</td>";
        rowsTable += "<td class='data'>" + $.formatField($.formatFieldDateTz(registro[8])) + "</td>";
        rowsTable += "</tr>";
    });
    var tableReport = headTable + "<tbody>" + rowsTable + "</tbody></table>";

    self.ui.find("#table_content").html(tableReport);
    self.ui.find("#tblUsuario").toDataTable(true);
    self.bindEventSelect(false);
}
modalView.apply = function (retorna) {
    var self = this;
    self.validation();
    var form = self.ui.find("#formUsuario");
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
    var form = self.ui.find("#formUsuario");
    settings = form.validation();
    $.extend(true, settings, {
        rules: {
            "usuario[nombre]": {
//                number: true,
                required: true
            },
            "usuario[apellidopat]": {

                required: true
            },
            "usuario[apellidomat]": {

                required: true
            },
            "usuario[direccion]": {

                required: true
            },
            "usuario[username]": {
                required: true
            },
            "usuario[password]": {

                required: true
            },
            "usuario[cargo]": {

                required: true
            },
            "usuario[estado]": {

                required: true
            },
            "usuario[telefono]": {
                number: true,
                required: true

            },
            "usuario[ci]": {
                number: true,
                required: true

            }
        }
    });
}
modalView.fillDataModal1 = function (d) {
    this.ui.find("input[name='usuario[id]']").val(d.id);
    this.ui.find("input[name='usuario[nombre]']").val(d.nombre);
    this.ui.find("input[name='usuario[apellidopat]']").val(d.apellidopat);
    this.ui.find("input[name='usuario[apellidomat]']").val(d.apellidomat);
    this.ui.find("input[name='usuario[direccion]']").val(d.direccion);
    this.ui.find("input[name='usuario[username]']").val(d.username);
    this.ui.find("input[name='usuario[password]']").val(d.password);
    this.ui.find("select[name='usuario[cargo]']").val(d.cargo);
    this.ui.find("select[name='usuario[estado]']").val(d.estado);
    this.ui.find("input[name='usuario[ci]']").val(d.ci);
    this.ui.find("input[name='usuario[telefono]']").val(d.telefono);

}
modalView.reset = function () {
    this.ui.find("#formUsuario").validationReset();
    this.ui.find("input[name='usuario[id]']").val("");
    this.ui.find("input[name='usuario[nombre]']").val("");
    this.ui.find("input[name='usuario[apellidopat]']").val("");
    this.ui.find("input[name='usuario[apellidomat]']").val("");
    this.ui.find("input[name='usuario[direccion]']").val("");
    this.ui.find("input[name='usuario[username]']").val("");
    this.ui.find("input[name='usuario[password]']").val("");
    this.ui.find("select[name='usuario[cargo]']").val("");
    this.ui.find("select[name='usuario[estado]']").val("");
    this.ui.find("input[name='usuario[ci]']").val("");
    this.ui.find("input[name='usuario[telefono]']").val("");
    this.ui.find("#formUsuario").trigger('reset');

}