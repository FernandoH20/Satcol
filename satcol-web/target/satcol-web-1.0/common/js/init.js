/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    logger(ENVIRONMENT);  //inicializacion del logger
    $.ajaxSetup({//inicializacion de ajax global
        global: false,
        headers: request.getHeadersAuth(),
        cache: false,
        type: "POST",
        dataType: request.dataType,
        contentType: request.responseType,
        beforeSend: function (xhr) {
            //show preloader
        }
    });
});