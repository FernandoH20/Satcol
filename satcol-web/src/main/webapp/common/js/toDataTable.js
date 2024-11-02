var dataTableLanguage = {
    "sProcessing": translate("{{procesando}}"),
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": translate("{{notFoundRows}}"),
    "sEmptyTable": translate("{{notFoundRowEnable}}"),
    "sInfo": translate("{{sInfo}}"),
    "sInfoEmpty": translate("{{sInfoEmpty}}"),
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": translate("{{searchInCurrentView}}:"),
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": translate("{{Cargando...}}"),
    "oPaginate": {
        "sFirst": translate("{{primero}}"),
        "sLast": translate("{{ultimo}}"),
        "sNext": translate("{{siguiente}}"),
        "sPrevious": translate("{{anterior}}")
    },
    buttons: {
        pageLength: translate("{{mostrar}}") + ' %d ' + translate("{{registros}}")
    }
};

$.fn.toDataTable = function (saveState) {
    translate("#" + $(this).attr("id"));
    var table = $(this).DataTable({
        'dom': 'Bfrtip',
        "aaSorting": [],
        "pageLength": 15,
        "aLengthMenu": [[15, 30, 50, 100, -1], [15, 30, 50, 100, translate("{{todo}}")]],
        buttons: [
        ],
        "sPaginationType": "full_numbers",
        "bStateSave": isNull(saveState) ? false : saveState,
        oTableTools: {
            aButtons: [
                {
                    sExtends: "xls",
                    oSelectorOpts: {filter: 'applied', order: 'current'}
                }
            ]
        },
        "language": {
            "sProcessing": translate("{{procesando}}"),
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": translate("{{notFoundRows}}"),
            "sEmptyTable": translate("{{notFoundRowEnable}}"),
            "sInfo": translate("{{sInfo}}"),
            "sInfoEmpty": translate("{{sInfoEmpty}}"),
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": translate("{{searchInCurrentView}}:"),
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": translate("{{Cargando...}}"),
            "oPaginate": {
                "sFirst": translate("{{primero}}"),
                "sLast": translate("{{ultimo}}"),
                "sNext": translate("{{siguiente}}"),
                "sPrevious": translate("{{anterior}}")
            },
            buttons: {
                pageLength: translate("{{mostrar}}") + ' %d ' + translate("{{registros}}")
            }
        }
    });
    
    var exportButtonContainer = $(".btn-toolbar");
    if (exportButtonContainer.length > 0) {
        var print_link = exportButtonContainer.find(".print-table");
        var print_excel = exportButtonContainer.find(".excel-table");
        var print_csv = exportButtonContainer.find(".csv-table");

        //var export_filename = $.formatFieldDate(new Date(), "dd-MM-yyyy");
        var export_filename = "";
        new $.fn.dataTable.Buttons(table, {
            buttons: [
                {
                    text: '<i class="fa fa-lg fa-print"></i>',
                    extend: 'print',
                    className: 'btn btn-default glyphicon glyphicon-print print-table assets-select-btn export-print',
                    footer: false,
                    title: export_filename,
                    exportOptions: {
                        orthogonal: 'filter',
                    }
                },
                {
                    text: '<i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: 'excel',
                    className: 'btn btn-default glyphicon glyphicon-save excel-table assets-export-btn export-xls ttip',
                    footer: false,
                    title: export_filename,
                    extension: '.xls',
                    exportOptions: {
                        orthogonal: 'filter',
                    }
                },
                {
                    text: '<i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: 'csv',
                    className: 'btn btn-default glyphicon glyphicon-save excel-table assets-export-btn export-xls ttip',
                    footer: false,
                    title: export_filename,
                    extension: '.csv',
                    exportOptions: {
                        orthogonal: 'filter',
                    }
                },
            ],
        });

        var print_dataTable = $(table.buttons().container()[0].childNodes[0]);//button print datatable
        var excel_dataTable = $(table.buttons().container()[0].childNodes[1]);  //button print excel
        var csv_dataTable = $(table.buttons().container()[0].childNodes[2]);  //button print excel

        print_link.replaceWith(print_dataTable);
        print_excel.replaceWith(excel_dataTable);
        print_csv.replaceWith(csv_dataTable);
    }

    return(table);
};


$.fn.toDataTableNoPagination = function (saveState) {
    translate("#" + $(this).attr("id"));
    var table = $(this).DataTable({
        'dom': 'Bfrtip',
        "aaSorting": [],
        "pageLength": 15,
        "aLengthMenu": [[15, 30, 50, 100, -1], [15, 30, 50, 100, translate("{{todo}}")]],
        buttons: [
        ],
        "sPaginationType": "full_numbers",
        "paging": false,
        "bStateSave": isNull(saveState) ? false : saveState,
        oTableTools: {
            aButtons: [
                {
                    sExtends: "xls",
                    oSelectorOpts: {filter: 'applied', order: 'current'}
                }
            ]
        },
        "language": {
            "sProcessing": translate("{{procesando}}"),
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": translate("{{notFoundRows}}"),
            "sEmptyTable": translate("{{notFoundRowEnable}}"),
            "sInfo": translate("{{sInfo}}"),
            "sInfoEmpty": translate("{{sInfoEmpty}}"),
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": translate("{{searchInCurrentView}}:"),
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": translate("{{Cargando...}}"),
            "oPaginate": {
                "sFirst": translate("{{primero}}"),
                "sLast": translate("{{ultimo}}"),
                "sNext": translate("{{siguiente}}"),
                "sPrevious": translate("{{anterior}}")
            },
            buttons: {
                pageLength: translate("{{mostrar}}") + ' %d ' + translate("{{registros}}")
            }
        }
    });

    //funcionalidad para el print, y download excel
    var exportButtonContainer = $(".btn-toolbar");
    if (exportButtonContainer.length > 0) {
        var print_link = exportButtonContainer.find(".print-table");
        var print_excel = exportButtonContainer.find(".excel-table");

        //var export_filename = $.formatFieldDate(new Date(), "dd-MM-yyyy");
        var export_filename = "";
        new $.fn.dataTable.Buttons(table, {
            buttons: [
                {
                    text: '<i class="fa fa-lg fa-print"></i>',
                    extend: 'print',
                    className: 'btn btn-default glyphicon glyphicon-print print-table assets-select-btn export-print',
                    footer: false,
                    title: export_filename,
                    exportOptions: {
                        orthogonal: 'filter',
                    }
                },
                {
                    text: '<i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: 'excel',
                    className: 'btn btn-default glyphicon glyphicon-save excel-table assets-export-btn export-xls ttip',
                    footer: false,
                    title: export_filename,
                    extension: '.xls',
                    exportOptions: {
                        orthogonal: 'filter',
                    }
                },
            ],
        });

        var print_dataTable = $(table.buttons().container()[0].childNodes[0]);//button print datatable
        var excel_dataTable = $(table.buttons().container()[0].childNodes[1]);  //button print excel

        print_link.replaceWith(print_dataTable);
        print_excel.replaceWith(excel_dataTable);
    }
};
