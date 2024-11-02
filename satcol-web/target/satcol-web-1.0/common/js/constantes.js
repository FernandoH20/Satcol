/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*Start statics notifications*/
var NOTIFIERS = {
    MESSAGES: {
        CREATE: 'Creaci&oacute;n correctamente !',
        CREATEIMP: 'Se Importo correctamente !',
        ERROR: 'Proceso no realizado correctamente !',
        INFO: 'Advertencia, desea continuar con la operaci&oacute;n !',
        SUCCESS: 'Proceso realizado correctamente !',
        WARNING: 'Proceso realizado correctamente !',
        UPDATE: 'Modificac&oacute;n realizada correctamente !',
        DELETE: 'Eliminaci&oacute;n realizada correctamente !',
        DELETECONFIRM: '¿Esta seguro de eliminar?',
        REQUIRED_ROW: 'Es necesario seleccionar una fila !',
        REQUIRED_ROW1: 'No Existe selección de ninguna deuda !',
        REQUIREDMONTO: 'Importe entregado es menor al importe seleccionado.',
        
        URL_NOT_FOUND: 'Url asignada, no esta respondiendo !',
        PENDING: '<center>DEVELOPES MESSAGE<br/>Estamos trabajando en ello!!!</center>',
        NO: 'No',
        YES: 'Si',
        PLACEHOLDER: 'Ingresa ',
        TITLE: 'Ingresa ',
        TITLE_SELECT: 'Selecciona ',
        REQUIRED_FIELDS: 'Se requiere al menos dato!!!',
        RECLAMO_FINALIZADO: 'Proceso no realizado, el reclamo ha sido finalizado',
        REQUIRED_OPERADOR: 'Requiere Operador!!!',
        REQUIRED_CONSUMIDOR: 'Requiere Consumidor!!!',
        REQUIRED_SOLICITUD: 'Requiere Solicitud!!!',
        REQUIRED_MEDIDOR: 'Requiere Medidor!!!',
        REQUIRED_UNIDAD: 'Requiere Unidad!!!',
        REQUIRED_ESTADO: 'No fue posible definir el estado actual de la orden!!!',
        REQUIRED_UNIDAD_OPERADOR: 'Requiere Operador y Unidad!!!',
        REQUIRED_CONTRATO: 'Solicitud improcendente, no ha se encontrado contrato asociado!!!',
        DOCUMENTOS_REQUIRED: 'Documentos asociados al registro, no se han creado!!!',
        ORDENES_EN_PROCESO: 'Ordenes pendientes de ejecutar!!!',
        COMFIRM_EXECUTE: "Esta seguro de continuar con la operaci&oacute;n",
        REQUIRED_MORE_DATA: 'Falta uno o varios valores para asignar!!!',
        NOT_RESULT: 'No existen resultados',
        NOT_ARCHIVOINCO:'Archivo incorrecto',
        ARCHIVO_CORRE:'Se importo correctamente',
        ESTADO_NO_IDENTIFICADO: 'Estado no identificado!!!',
        USUARIO_NO_ENCONTRADO: "Usuario o contrasña incorrecto",
        ELEMENTO_NO_ENCONTRADO: "No se encontro elemento JQUERY",
        ERROR_DAV: "El codigo autoverificador (DAV) no corresponde al consumidor.",
        SIN_DEUDA_PENDIENTE: "______El consumidor no tiene deuda pendiente",
        REQUIRED_NUMBER_MEDIDOR: 'Requiere un N&uacute;mero de Medidor!!!',
        REQUIRED_NUMBER_SOLICITUD: 'Requiere un N&uacute;mero de Solicitud!!!',
        NUMBER_MEDIDOR_NOT_FOUND: 'N&uacute;mero medidor no encontrado.',
        NUMBER_SOLICITUD_NOT_FOUND: 'N&uacute;mero de solicitud no encontrado',
        FORMATO_NO_SOPORTADO: 'Formato de archivo no soportado',
        CONSUMIDOR_NOT_SERVICE: 'Consumidor sin servicio, <br />Verifique si el servicio esta CONECTADO y tiene medidor asignado',
        SERVICIO_ESTATE_CONSUMIDOR: 'Servicio del consumidor se encuentra en estado: '
    },
    TYPES: {
        INFO: 'info',
        SUCCESS: 'success',
        ERROR: 'error'
    },
};

var nuc = {
    message: {
        REQUIRED_CONSUMIDOR: "Selecciona un consumidor para continuar"
    }
};
var cpt = {
    general: {
        configuracion: "Configuracion",
        detalle: "Detalle",
        puntocontrol: "Punto Control",
        cronograma: "Cronograma"
    },
    campana: {
        at: 'A',
        mt: 'M',
        bt: 'B',
        ct: 'T',
        dt: 'D'
    },
    estado: {
        general: "1",
        periodo: "2",
        puntocontrol: "3",
        cronograma: "4",
        analisis: "5"
    },
    estadoPuntoControl: {
        pendiente: "1",
        cronograma: "2",
        modificado: "3",
        procesado: "4",
        penalizado: "5",
        invalido: "6",
        reduccion: "7"
    },
    modal: {
        insertar: "Insertar",
        insertar_configuracion: "Agregar Configuraci&oacute;n",
        modificar: "Modificar",
        modificar_configuracion: "Modificar Configuraci&oacute;n",
        eliminar: "Eliminar"
    },
    messages: {
        limiteInferior: "El limite inferior no puede ser mayor al superior",
        required_header_row: 'Es necesario seleccionar una fila de la lista!',
        required_detail_row: 'Es necesario seleccionar una fila del detalle!',
        required_fields: 'Datos requeridos sin asignar!',
        required_config_row: 'Es necesario seleccionar una fila de la Configuraci&oacute;n!',
        required_periodo_row: 'Es necesario seleccionar una fila de Periodo!',
        required_puntocontrol_row: 'Es necesario seleccionar una fila de Punto de Control!',
        punto_cronograma: 'El punto esta en CRONOGRAMA, editelo! ',
        punto_procesado: 'El punto esta PROCESADO, no se puede editar',
        punto_penalizado: 'El punto esta PENALIZADO, se preceder&aacute; con la REMEDICI&Oacute;N',
        punto_invalido: 'El punto esta INV&Aacute;LIDO, se preceder&aacute; con la NUEVA MEDICI&Oacute;N'
    }
};
var med = {
    message: {
        selected_empty_posicion: "No fue seleccionada ninguna posici&oacute;n.",
        selected_empty_serie: "No fue seleccionada ninguna serie.",
        selected_empty_codigo_precinto: "No fue seleccionado ningun c&oacute;digo de precinto.",
        selected_empty_codigo_medidor: "No fue seleccionado ningun c&oacute;digo de medidor.",
        selected_empty_codigo: "No fue introducido ningun n&uacute;mero de precinto.",
        selected_empty_numero_medidor: "No fue introducido ningun n&uacute;mero de medidor.",
        selected_min_codigo: "El n&uacute;mero de precinto debe ser mayor a 0.",
        selected_min_codigo_medidor: "El n&uacute;mero de medidor debe ser mayor a 0.",
        row_empty_precintos: "Debe a&ntilde;adir precintos para asignar al medidor.",
        codigo_inicial_mayor_codigo_final: "El n&uacute;mero de precinto Inical no puede ser mayor al Final.",
        codigo_inicial_mayor_codigo_final_medidor: "El n&uacute;mero de medidor Inical no puede ser mayor al Final.",
        cantidad_min: "La cantidad a introducir debe ser mayor a 0.",
        cantidad_empty: "No fue introducida ninguna cantidad.",
        row_empty_transferencia: "Debe seleccionar equipos de medicion y/o precintos a transferir.",
        codigo_not_found: "El c&oacute;digo no existe."
    },
    estado: {
        disponible: "DISPONIBLE"
    }
};
var cob = {
    message: {
        valid_50mil: "Para cobros mayores a 50.000 Bs solo se cobran por cheque",
        selected_amount: "No selecciono deuda a cancelar",
        required_amount: "No existen conceptos para cobrar",
        minimum_amount: "Monto no alcanza",
        confirmar_pago: "Esta seguro que quiere confirmar el pago",
        error_general: "Existe un error al enviar los datos",
        error_impresion: "No se logro generar la impresi&oacute;n",
        confirmar_anulacion: "Está seguro de anular el cobro seleccionado?",
        fecha_sistema: "Solo selecciona las fechas vencidas",
        anticipo:"Quiere generar un pago a cuenta?",
        cierrecaja:"Esta seguro de cerrar su caja? No podra cobrar mas.",
        cierre:"Debe cerrar caja",
        exportar:"Esta seguro de exportar?"
        
        // seleccione_deuda_obligatorio: "No selecciono deuda a cancelar...."
    }
};
var lec = {
    message: {
        selected_remesa: "Es necesario seleccionar una Remesa.",
        selected_ruta: "Es necesario seleccionar una Ruta.",
        selected_consumidor: "Es necesario seleccionar un Consumidor."
    }
};

var rec = {
    message: {
        finalizar_reclamo: "El reclamo %s, se ha de comunicar, desea continuar?",
        artefacto_agregado: "El artefacto %s, ya se encuentra en lista",
        sector_requerido: "No se ha especificado ningun sector de DERIVACION",
        pronunciar_procedente: "Seguro de querer pronunciar como procedente?",
        imposible_comunicar: "Han transcurrido %s d&iacuteas, aun tiene tiempo para realizar la comunicaci&oacute;n ",
        reclamos_proceso: "Reclamos en proceso:",
        cancelar : "La información actual se ha de perder, esta seguro de querer cancelar el proceso actual.",
        contesto : "El Cliente ha contestado la llamada.",
        comunicado : "Reclamo %s, ya fue comunicado"
    },
    codeTipoReclamo: {
        artefactoQuemado: "130000",
        reclamoTecnico: "100000",
        reclamoComercial: "200000"
    },
    codeCategoriaNotificacion: {
        real: "REAL",
        procesal: "PROCESAL",
        especial: "ESPECIAL"
    },
    codeNotificacion: {
        reclamante: "REC",
        telefono: "TELF",
        email: "EMAIL",
        fax: "FAX",
        agencia: "AG"
    },
    comunicacion: {
        diasImposibilidadComunicacion: 5
    },
    estado:{
        comunicado: '999'
    }
}
