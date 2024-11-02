jQuery(document).ready(function ($) {
    tablePresenter.list();
    modalPresenter.submit();
    filterPresenter.submit();
});
function fixFecha(fecha) {
    var arreglo = fecha.split("-");
    return arreglo[2] + "-" + arreglo[1] + "-" + arreglo[0]
}
$.formatFieldDateTz = function (field, _format) {
    var value = "";
    if (Boolean(field)) {
        if (typeof field === "string")
            field = field.replace(/-/g, "/");
        if (Boolean(_format)) {
            var date = new Date(field);
            value = moment(date).format(_format);
        } else {
            var date = new Date(field);
            value = moment(date).format(simpleFormatDateTimePiker);
        }
    }
    return value;
}