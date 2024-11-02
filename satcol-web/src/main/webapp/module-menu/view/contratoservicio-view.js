var modalView = new GenericView("#modalContratoservicio");
modalView.openCreatev = function () {
    this.ui.modal("show");
}
modalView.fillDataModalcli = function (d) {
    this.ui.find("input[name='cliente[id]']").val(d.id);
    this.ui.find("input[name='cliente[nombre]']").val(d.nombre);
}
modalView.fillSelectserv = function (data) {

    var opt = "<option value=''>Seleccione</option>";
    $.each(data.tiposervicioList, function (index, registro) {
        opt += "<option value='" + registro[0] + "'>" + $.formatField(registro[1]) + "</option>";
    });
    return opt;
}
modalView.apply = function (retorna) {
    var self = this;
    self.validation();
    var form = self.ui.find("#formContratoservicio");
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
    var form = self.ui.find("#formContratoservicio");
    settings = form.validation();
    $.extend(true, settings, {
        rules: {
            "cliente[id]": {
                number: true,
                required: true
            }
//            "tiposervicio[id]": {
//                required: true
//            }
        }
    });
}
modalView.drawTablecontrato = function (data) {
    var self = this;
    var headTable = "";

    headTable = "<table id='tblcontrato' class='table table-hover'><thead><tr>";
    headTable += "<th><input type='checkbox' name='selectAllCheckbox' value='1' /></th>";
    headTable += "<th>Nro</th>";
    headTable += "<th>Servicio</th>";
    headTable += "<th>Precio (Bs.)</th>";
    headTable += "</tr></thead>";
    var rowsTable = "";
    var marca = "";
    $.each(data.tiposervicioList, function (i, registro) {

        rowsTable += "<tr data-id='" + registro[0] + "'>";
//        rowsTable += "<td class='FCheckbox'><input type='checkbox' name='facFacturaDeudaPendiente" + registro[0] + "' data-id='" + registro[0] + "' class='checkboxSel' /></td>";

        rowsTable += "<td><input type='checkbox' name='id" + registro[0]+ "' data-id='" + registro[0] + "' " + registro[0] + " class='checkboxSel' /></td>";
        rowsTable += "<td class='data'> <font size =3, color=#024A86><b>" + $.formatField(registro[0]) + "</b></td>";
        rowsTable += "<td class='data'> <font size =3, color=#024A86><b>" + $.formatField(registro[1]) + "</b></td>";
        rowsTable += "<td class='data'> <font size =3, color=#024A86><b>" + $.formatField(registro[2]) + "</b></td>";
        rowsTable += "</tr>";

    });
    headTable = headTable + "<tbody>" + rowsTable + "</tbody></table>";
    this.ui.find("#table_content1").html(headTable);
    $("#tblcontrato").DataTable({
        language: {url: "../../plugins/datatable/json/Spanish.json"},
        "lengthMenu": [[5, 10, 25, 50, 75, -1], [5, 10, 25, 50, 75, "Mas"]]
//        order: [[10, 'desc']]
    });
    row_select("tblcontrato", "nucremesa");
    self.selectAllCheckboxControl();

};
modalView.selectAllCheckboxControl = function () {
    data_tiposer.tiposervicioList = [];
    var self = this;
    var cAll = self.ui.find("input[name='selectAllCheckbox']");
    cAll.click(function (event) {
        if (cAll.is(":checked")) {
            self.ui.find("#tblcontrato").find("tr").each(function (i, ele) {
                var id_deuda = $(ele).attr('data-id');
                var chBox;
                chBox = $(ele).find(".checkboxSel");
                chBox.prop('checked', 'true');
                data_tiposer.tiposervicioList.push({id: id_deuda});
            });
        } else
        {
            self.ui.find("#tblcontrato").find("tr").each(function (i, ele) {
                var chBox;
                var id_deuda = $(ele).attr('data-id');
                chBox = $(ele).find(".checkboxSel");
                chBox.prop('checked', false);
                data_tiposer.tiposervicioList.push({id: id_deuda});

            });

        }
    });
//    var self = this;
//    var cAll = self.ui.find("input[name='selectAllCheckbox']");
//    data_deuda.ideuda = [];
//    data_tiposer.tiposervicioList = [];
//    cAll.click(function (event) {
//        if (cAll.is(":checked")) {
//            self.ui.find("#collapseDet10").find("tbody>tr").each(function (i, ele) {
//                var chBox;
//                chBox = $(ele).find(".checkboxSel");
//                chBox.prop('checked', 'true');
//                var id_deuda = $(ele).attr('data-id');
//                data_tiposer.tiposervicioList.push(id_deuda);
//            });
//        } else
//        {
//            self.ui.find("#collapseDet10").find("tbody>tr").each(function (i, ele) {
//                var chBox;
//                chBox = $(ele).find(".checkboxSel");
//                chBox.prop('checked', false);
//            });
//        }
//        modalView.calcularTotalDeConsumidor();
//    });
//    self.ui.find(".checkboxSel").click(function (event) {
//        if (!$(this).is(':checked')) {
//            modalView.calcularTotalDeConsumidor();
//        } else {
//            modalView.calcularTotalDeConsumidor();
//        }
//    });

}