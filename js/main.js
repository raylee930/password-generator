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

function copy() {
  var copyText = document.getElementById("result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "已複製\u2705";

  setTimeout(function() {
    tooltip.innerHTML = "複製";
  }, 2000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('ModeSwitch');

    // Set the default theme to dark if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'light';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';

    switchElement.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
        }
    });
});