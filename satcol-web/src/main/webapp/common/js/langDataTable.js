(function ($) {
    $.getLangDataTable = function () {
        var langDataTable = {
            "decimal": translate("{{csg_tbl_trs_decimal}}"),
            "emptyTable": translate("{{csg_tbl_trs_emptyTable}}"),
            "info": translate("{{csg_tbl_trs_info}}"),
            "infoEmpty": translate("{{csg_tbl_trs_infoEmpty}}"),
            "infoFiltered": translate("{{csg_tbl_trs_infoFiltered}}"),
            "infoPostFix": translate("{{csg_tbl_trs_infoPostFix}}"),
            "thousands": translate("{{csg_tbl_trs_thousands}}"),
            "lengthMenu": translate("{{csg_tbl_trs_lengthMenu}}"),
            "loadingRecords": translate("{{csg_tbl_trs_loadingRecords}}"),
            "processing": translate("{{csg_tbl_trs_processing}}"),
            "search": translate("{{csg_tbl_trs_search}}"),
            "zeroRecords": translate("{{csg_tbl_trs_zeroRecords}}"),
            "paginate": {
                "first": translate("{{csg_tbl_trs_first}}"),
                "last": translate("{{csg_tbl_trs_last}}"),
                "next": translate("{{csg_tbl_trs_next}}"),
                "previous": translate("{{csg_tbl_trs_previous}}")
            },
            "aria": {
                "sortAscending": translate("{{csg_tbl_trs_sortAscending}}"),
                "sortDescending": translate("{{csg_tbl_trs_sortDescending}}")
            }
        };
        return langDataTable;
    }
})(jQuery);
