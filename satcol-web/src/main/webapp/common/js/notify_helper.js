
function msgSuccess(msg) {
    $.notifyBar({cssClass: "success", html: msg});
}

function msgWarning(msg) {
    $.notifyBar({cssClass: "warning", html: msg});
}

function msgError(msg) {
    $.notifyBar({cssClass: "error", html: msg});
}

function msgInfo(msg) {
    $.notifyBar({cssClass: "info", html: msg});
}
