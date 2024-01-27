(function ($, App) {
	"use strict";
	$("input").live("change", App.saveOptions);
	$("#quant").live("change", App.canvi);
	$("#captura").live("click", App.genera);
	$(document).ready(App.init);
}(jQuery, App));

$(document).ready(function(){
		if(chrome.i18n){
			$("title").text(chrome.i18n.getMessage("title"));
			$("#text_title").text(chrome.i18n.getMessage("title"));
			$("#text_passwordlength").text(chrome.i18n.getMessage("password_length"));
			$("#captura").val(chrome.i18n.getMessage("generate"));
			$("#text_lowers").text(chrome.i18n.getMessage("lowers"));
			$("#text_uppers").text(chrome.i18n.getMessage("uppers"));
			$("#text_simbol").text(chrome.i18n.getMessage("simbol"));
			$("#text_numbers").text(chrome.i18n.getMessage("numbers"));
		}
	});	
