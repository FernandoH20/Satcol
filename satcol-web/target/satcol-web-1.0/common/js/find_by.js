/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * @param {type} $
 * @returns {string}
 */

(function ($) {
    $.fn.extend({
        findBy: function (filter) {
            var idSelector = filter;
            idSelector.html("");
            /*** para los Inputs***/
            var inputs = $(this).find('input[type="text"]');
            $.each(inputs, function (index, value) {
                var val = $(value).val();
                var text_label = $(this).closest('.form-group').find('label');
                if (val !== "")
                {
                    idSelector.append(text_label.html() + val + ",&nbsp;");
                }
            });
            /*** para los Inputs checkbox***/
            var inputs = $(this).find('input[type="checkbox"]');
            $.each(inputs, function (index, value) {
                var val = "";
                if ($(value).is(':checked')) {
                    val = "Si";
                }
                var text_label = $(this).closest('.form-group').find('label');
                if (val !== "")
                {
                    idSelector.append(text_label.html() + val + ",&nbsp;");
                }
            });

            /*** para los Inputs select***/
            var inputs = $(this).find('select option:selected');
            $.each(inputs, function (index, value) {
                var val = $(value).val();
                var text_label = $(this).closest('.form-group').find('label');
                if (val !== "0" && val !== "")
                {
                    idSelector.append(text_label.html() + $(value).html() + ",&nbsp;");
                }
            });
            filter.closest(".panel").find(".panel-collapse").collapse("hide");
        }
    });
})(jQuery);

