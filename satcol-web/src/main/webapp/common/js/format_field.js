$.formatField = function (field, _format) {
    var value = "";
    if (Boolean(field)) {
        value = field
    }
    return value;
};

$.formatFieldDate = function (field, _format) {
    var value = "";
    if (Boolean(field)) {
        if (Boolean(_format)) {
            var date = new Date(parseInt(field)).toJSON();
            value = moment(date, "YYYY-MM-DD HH:mm").format(_format);//$.format.date(date, _format);
        } else {
            var date = new Date(parseInt(field)).toJSON();
            value = moment(date, "YYYY-MM-DD HH:mm")._d;//$.format.date(date, formatDate);
        }
    }
    return value;
};

$.formatFieldFloat = function (field, digitos) {
    var value = "";
    if (Boolean(field))
        value = field

    if (typeof digitos == "undefined")
        digitos = 2

    if (field == 0)
        value = 0

    return parseFloat(value).toFixed(digitos);
};
formatFieldComaDecimal = function (field) {
    if (typeof field == 'number') {
        return number_format(field, 2, ',', '');
    } else {
        console.error("No es del tipo float");
        return null;
    }
};