/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * table_helper.js
 */

/**
 * 
 * @param {type} table_id, el identificado de la tabla
 * @param {type} prefijo, prefijo asociado a la tabla
 * @returns 
 */
var row_selected_dobleClick = function (table_id, prefijo, row) {
    prefijo || (prefijo = '');
    $("#" + table_id + " tbody tr").removeClass('selected');
    var list_check = $("#" + table_id).find("tbody input[type=checkbox]:checked");

    $.each(list_check, function (index, item) {
        $(item).prop("checked", false);
    });

    $(row).addClass('selected');
    $(row).find("input[type=checkbox]").prop("checked", true);
    $(row).parent().parent().find("thead input[type=checkbox]").prop("checked", false);
    $("#hiddenId" + prefijo).remove();
    var id = $(row).find("input[data-id]").attr("data-id");
    var input = "<input type='hidden' value='" + id + "' name='hiddenId" + prefijo + "' id='hiddenId" + prefijo + "' />";
    $(row).parent().parent().parent().append(input);
};

// 
/*
 * permite seleccion simple en las tablas, el segundo atributo 'prefijo' es opcional
 * @param table_id  identificar de la tabla 
 * @version 03/2016
 * ejemplo rowSelectSingle(id_tabla, prefijo);
 */
var row_simple_select = function rowSelectSingle(table_id, prefijo)
{
    prefijo || (prefijo = '');

    $('#' + table_id + ' tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $(this).find("input[type=checkbox]").prop("checked", false);
            $("#hiddenId" + prefijo).remove();
        } else {
            $("#" + table_id + " tbody tr").removeClass('selected');
            var list_check = $("#" + table_id).find("tbody input[type=checkbox]:checked");

            $.each(list_check, function (index, item) {
                $(item).prop("checked", false);
            });

            $(this).addClass('selected');
            $(this).find("input[type=checkbox]").prop("checked", true);
            $(this).parent().parent().find("thead input[type=checkbox]").prop("checked", false);
            $("#hiddenId" + prefijo).remove();
            var id = $(this).find("input[data-id]").attr("data-id");
            var input = "<input type='hidden' value='" + id + "' name='hiddenId" + prefijo + "' id='hiddenId" + prefijo + "' />";
            $(this).parent().parent().parent().append(input);
        }
    });
};

/*
 * permite seleccion simple en las tablas, el segundo atributo 'prefijo' es opcional
 * @param table_id  identificar de la tabla 
 * @version  08/2016
 * ejemplo rowSelectSingle(id_tabla, prefijo);
 */
var row_simple_select_advanced = function rowSelectSingleNew(table_id, prefijo)
{
    prefijo || (prefijo = '');
    var change_checkbox = false;
    var item_unselect_checkbox = "";

    $('#' + table_id + ' tbody tr td').on('click', 'input[data-table=true]', function () {  
        change_checkbox = true;
        var listArrayId = "";
        var id_unselect = "";
        if ($(this).prop("checked") === false) {
            id_unselect = $(this).attr("data-id");  //lista de elementos
        }

        var input_array_id = $("#hiddenId" + prefijo).val();
        if (input_array_id !== null && input_array_id !== undefined) {
            listArrayId = input_array_id;
        }

        var array_aux = eval(listArrayId);
        listArrayId = "";
        if (array_aux instanceof Array) {
            $.each(array_aux, function (index, item) {
                if (id_unselect !== undefined && id_unselect !== "") {
                    if (item !== parseInt(id_unselect))
                        listArrayId += "," + item;
                } else {
                    listArrayId += "," + item;
                }
            });
        } else {
            if (id_unselect !== undefined && id_unselect !== "") {
                if (array_aux !== parseInt(id_unselect))
                    listArrayId += "," + array_aux;
            } else {
                listArrayId += array_aux;
            }
        }
        listArrayId = listArrayId.replace(/^,|,$/g, '');
        if ($(this).prop("checked") === true) {
            var ids = $(this).attr("data-id");  //lista de elementos
            listArrayId += listArrayId !== "" ? "," + ids : ids;
            $(this).closest("tr").addClass("selected");
            item_unselect_checkbox = "";
        } else {
            $(this).closest("tr").removeClass("selected");
            item_unselect_checkbox = $(this);
        }
        if (listArrayId === "" && $(this).closest("tr").hasClass("selected")) {
            $(this).closest("tr").removeClass("selected");
        }
    });

    $('#' + table_id + ' tbody').on('click', 'tr', function ()
    {
        if ($(this).hasClass('selected'))
        {
            var listId = $("#hiddenId" + prefijo).val();
            if (listId !== null && listId !== undefined) {
                var _aux_sel = $(this).find("input[data-table=true]").attr("data-id");
                if (listId.indexOf(_aux_sel) >= 0 && $(this).find("input[data-table=true]").prop("checked")) {
                    change_checkbox = false;  //se debe hacer seleccion unica
                }
            }
            
            var list_check = $("#" + table_id).find("tbody input[data-table=true]:checked");
            if (!change_checkbox) {
                var list_check_tr = $("#" + table_id).find("tbody tr");
                var select_all_check = true;  //suponemos que todos estas seleccionados
                list_check_tr.each(function () {
                    if (!$(this).hasClass("selected")) {
                        select_all_check = false;
                    }
                });

                if (select_all_check) {
                    $("#" + table_id + " tbody tr td").find("input[data-table=true]").prop("checked", false);
                    $("#" + table_id + " tbody tr").removeClass('selected');
                    $(this).parent().parent().find("thead input[data-table=true]").prop("checked", false);
                } 
                $.each(list_check, function (index, item) {
                    $(item).prop("checked", false);
                    $(this).closest("tr").removeClass('selected');
                });
                $(this).closest("tr").addClass('selected');
                $(this).find("input[data-table=true]").prop("checked", true);
                
                $("#hiddenId" + prefijo).remove();
                var value = $(this).find("input[data-table=true]").attr("data-id");
                var input = "<input type='hidden' value='" + value + "' name='hiddenId" + prefijo + "' id='hiddenId" + prefijo + "' />";
                $(this).parent().parent().parent().append(input); 
            }else{
                $("#hiddenId" + prefijo).remove();
                var list_item = "";
                $.each(list_check, function (index, item) {
                    list_item += ","+$(item).attr("data-id");
                });
                list_item = list_item.replace(/^,|,$/g, '');
                var value = list_item.indexOf(",") > -1 ? "[" + list_item.replace('[', '').replace(']', '') + "]" : list_item;
                var input = "<input type='hidden' value='" + value + "' name='hiddenId" + prefijo + "' id='hiddenId" + prefijo + "' />";
                $(this).parent().parent().parent().append(input); 
            }
            
            if(list_check !==undefined && list_check.length === 1){
                $("#hiddenId" + prefijo).remove();
                $(this).closest("tr").removeClass('selected');
                $(this).find("input[data-table=true]").prop("checked", false);
            }
        } else
        {
            var list_check = $("#" + table_id).find("tbody input[data-table=true]:checked");
            var item_eliminado = item_unselect_checkbox !== "" ? item_unselect_checkbox.attr("data-id") : "";
            var selected_unique = false;
            var listId = $("#hiddenId" + prefijo).val();
            if (listId !== null && listId !== undefined) {
                if (listId.indexOf(item_eliminado) > 0 && list_check.length > 1) {
                    selected_unique = true;
                }
                if (list_check.length === 1) { selected_unique = true;}
            }
            if (list_check.length <= 0 || !selected_unique) {
                change_checkbox = false;
            }

            if (!change_checkbox) {
                $("#" + table_id + " tbody tr").removeClass('selected');
                $.each(list_check, function (index, item) {
                    $(item).prop("checked", false);
                });
                $(this).addClass('selected');
                $(this).find("input[data-table=true]").prop("checked", true);
                $(this).parent().parent().find("thead input[data-table=true]").prop("checked", false);
                $("#hiddenId" + prefijo).remove();
                var id = $(this).find("input[data-id]").attr("data-id");
                var input = "<input type='hidden' value='" + id + "' name='hiddenId" + prefijo + "' id='hiddenId" + prefijo + "' />";
                $(this).parent().parent().parent().append(input);
            } else {
                var listArrayId = "";
                $.each(list_check, function (index, item) {
                    listArrayId += ","+$(item).attr("data-id");
                });
                listArrayId = listArrayId.replace(/^,|,$/g, '');
                if ($(this).prop("checked") === true) {
                    var ids = $(this).attr("data-id");  //lista de elementos
                    listArrayId += listArrayId !== "" ? "," + ids : ids;
                } 
                $("#hiddenId" + prefijo).remove();
                var value = listArrayId.indexOf(",") > -1 ? "[" + listArrayId.replace('[', '').replace(']', '') + "]" : listArrayId;
                var input = "<input type='hidden' value='" + value + "' name='hiddenId" + prefijo + "' id='hiddenId" + prefijo + "' />";
                $(this).parent().parent().parent().append(input);
            }
        }
    });
};

/*
 * permite seleccion multiple en las tablas, el segundo atributo 'prefijo' es opcional
 * @param table_id  identificar de la tabla 
 * ejemplo rowSelectMultiple(id_tabla, prefijo);
 * el resultado es un input oculto, con los id  separados por "," (12,4,7,8), con id=hiddenId + prefijo_cliente
 */
var row_select = function rowSelectMultiple(table_id, prefijo) {
    prefijo || (prefijo = '');

    $('#' + table_id + ' tbody').on('click', 'tr', function () {
        var listArrayId = "";
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $(this).find("input[type=checkbox]").prop("checked", false);
            var input_array_id = $("#hiddenId" + prefijo).val();
            if (input_array_id !== null && input_array_id !== undefined) {
                listArrayId = input_array_id;
            }
            var id_unselect = $(this).find("input[data-id]").attr("data-id");  //lista de elementos
            var array = eval(listArrayId);
            listArrayId = "";
            if (array instanceof Array) {
                $.each(array, function (index, item) {
                    if (item !== parseInt(id_unselect))
                        listArrayId += "," + item;
                });
            } else {
                if (array !== parseInt(id_unselect))
                    listArrayId += array;
            }

            listArrayId = listArrayId.replace(/^,|,$/g, '');
            if (listArrayId === "")
                $("#hiddenId" + prefijo).remove();
            else {
                var value = listArrayId.indexOf(",") > -1 ? "[" + listArrayId + "]" : listArrayId;
                $("#hiddenId" + prefijo).val(value);
            }
        } else {
            $(this).addClass('selected');
            $(this).find("input[type=checkbox]").prop("checked", true);
            $(this).parent().parent().find("thead input[type=checkbox]").prop("checked", false);
            var input_array_id = $("#hiddenId" + prefijo).val();
            if (input_array_id !== null && input_array_id !== undefined) {
                listArrayId = input_array_id;
            }
            var ids = $(this).find("input[data-id]").attr("data-id");  //lista de elementos
            listArrayId += listArrayId !== "" ? "," + ids : ids;
            $("#hiddenId" + prefijo).remove();
            var value = listArrayId.indexOf(",") > -1 ? "[" + listArrayId.replace('[', '').replace(']', '') + "]" : listArrayId;
            var input = "<input type='hidden' value='" + value + "' name='hiddenId" + prefijo + "' id='hiddenId" + prefijo + "' />";
            $(this).parent().parent().parent().append(input);
        }
    });
};

/*
 * agrega acciones al control asociado, el atributo 'prefijo' es opcional
 * @param checkbox  un componente de tipo checkbox 
 * ejemplo de uso onclick='rowsSelectedCheckbox(this, prefijo)'
 */
var table_select_all = function rowsSelectedCheckbox(checkbox, prefijo) {
    var parent_table = $(checkbox).parent().parent().parent().parent();  //obtengo la tabla 
    prefijo || (prefijo = '');
    var listArrayId = "";
    if ($(parent_table).is("table")) {
        var list_check = $(parent_table).find("tbody input[type='checkbox']");
        if ($(checkbox).is(":checked")) {
            $.each(list_check, function(index, item){
                $(item).closest("tr").addClass("selected");
                $(item).prop("checked", true);
                var ids = $(item).attr("data-id");  //lista de elementos
                listArrayId += "," + ids;
            });

            listArrayId = listArrayId.replace(/^,|,$/g, '');
            var input_array_id = $("#hiddenId" + prefijo).val();  //lista de ids
            if (input_array_id !== null && input_array_id !== undefined) {
                $("#hiddenId" + prefijo).val("[" + listArrayId + "]");
            } else {
                var input = "<input type='hidden' value='[" + listArrayId.replace('[', '').replace(']', '') + "]' name='hiddenId" + prefijo + "' id='hiddenId" + prefijo + "' />";
                parent_table.append(input);
            }
        } else {
            $.each(list_check, function(index, item){
                $(item).closest("tr").removeClass("selected");
                $(item).prop("checked", false);
            });
            $("#hiddenId" + prefijo).remove();
        }
    } else {
        alert("No se encontro ninguna tabla.");
    }
};

/*
 * metodo devuelve el row seleccionado de una tabla indicada
 * @param {list_json} param, lista de objectos en formato json
 * ejemplo
 * var json = [{
 "id" : "1", 
 "msg"   : "hi",
 "tid" : "2013-05-05 23:35",
 "fromWho": "hello1@email.se"
 },
 {
 "id" : "2", 
 "msg"   : "there",
 "tid" : "2013-05-05 23:45",
 "fromWho": "hello2@email.se"
 }
 ];
 var object_seleccionado = $("#tblOperacionesList").getItemRowSelect(json);
 *   tblOperacionesList, id de la tabla que se desea tratar
 */
$.fn.extend({
    getItemRowSelectObject: function (listJson) {
        var $this = $(this);
        var $tr_selected = $this.find("tbody tr[class~=selected]");
        if ($tr_selected.length > 0) {
            var checkbox = $tr_selected.find("input[type='checkbox']");
            var id_selected = checkbox.attr("data-id");
            var object_return = "";
            $.each(listJson, function (index, value) {
                if (value.id === id_selected)
                    object_return = value;
            });
            return object_return;
        } else {
            return undefined;
        }
    }
});

/*
 *  metodo que devuelve el row item seleccionado, id del objecto seleccionado.
 */
$.fn.extend({
    getItemRowSelect: function () {
        var $this = $(this);
        var $tr_selected = $this.find("tbody tr[class~=selected]");
        if ($tr_selected.length > 0) {
            var checkbox = $tr_selected.find("input[type='checkbox']");
            var id_selected = checkbox.attr("data-id");
            return id_selected;
        } else {
            return undefined;
        }
    }
});