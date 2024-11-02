/*http://bootstrap-notify.remabledesigns.com/
 * Ejemplos simples
 * msgComee("Este es un mensaje de información", "info");
 * msgComee("Este es un mensaje satisfactorio", "success");
 * msgComee("Este es un mensaje de error", "error");
 */
function msgComee(msg, type) {
    if (msg == "") {
        msg = "Sin mensaje";
    }
    var icono = "";
    var typeV = "info";
    switch (type) {
        case "info":
            icono = "glyphicon glyphicon-info-sign";
            typeV = "info";
            break;
        case "success":
            icono = "glyphicon glyphicon-ok-sign";
            typeV = "success";
            break;
        case "error":
            icono = "glyphicon glyphicon-remove-sign";
            typeV = "danger";
            break;
        case "warning":
            icono = "glyphicon glyphicon-warning-sign";
            typeV = "warning";
            break;    
    }

    $.notify({
        icon: icono,
        title: '',
        message: msg
    }, {
        // settings
        element: 'body',
        position: null,
        type: typeV,
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "center"
        },
        offset: 20,
        spacing: 10,
        z_index: 103100,
        delay: 5000,
        timer: 1000,
        mouse_over: null,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
    });
}