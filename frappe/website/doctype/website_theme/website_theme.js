// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt

frappe.require('assets/frappe/js/lib/jscolor/jscolor.js');

frappe.provide("frappe.website_theme");
$.extend(frappe.website_theme, {
	color_variables: ["background_color", "top_bar_color", "top_bar_text_color",
		"footer_color", "footer_text_color", "text_color", "link_color"]
});

frappe.ui.form.on("Website Theme", "onload_post_render", function(frm) {
	$.each(frappe.website_theme.color_variables, function(i, v) {
		$(frm.fields_dict[v].input).addClass('color {required:false,hash:true}');
	});
	jscolor.bind();
});

frappe.ui.form.on("Website Theme", "refresh", function(frm) {
	frm.toggle_display(["module", "custom"], !frappe.boot.developer_mode);
	if (!frm.doc.custom && !frappe.boot.developer_mode) {
		frm.set_read_only();
		frm.disable_save();
	} else {
		frm.enable_save();
	}
});
