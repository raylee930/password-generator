//  Password generator
var _gaq = _gaq || [];

var App = (function ($, PasswordGenerator, gaq) {
	"use strict";
	var r = {},
		wide_version = true,
		local,
		opts,
		json_opts,
		quant,
		tipus;

	r.canvi = function () {
		$("#num").html($("#quant").val());
		gaq.push(['_trackEvent', 'option', 'change']);
	};

	r.saveOptions = function () {
		json_opts = $("form").serializeArray();
		local.setItem("tek_password_ext_opts", JSON.stringify(json_opts));
	};

	r.init = function () {
		var actual;
		tipus = PasswordGenerator.getTipus();
		if (window.localStorage) {
			local = window.localStorage;
		}
		json_opts = local.getItem("tek_password_ext_opts");
		if (json_opts) {
			opts = JSON.parse(json_opts);
		}
		for (actual in opts) {
			if (opts.hasOwnProperty(actual)) {
				if (opts[actual].value === "on") {
					$("#" + opts[actual].name).attr("checked", "checked");
				} else {
					$("#" + opts[actual].name).val(opts[actual].value);
				}
			}
		}
		$("#num").html($("#quant").val());
		gaq.push(['_trackEvent', 'load', 'ready']);
	};

	function showresults(clau) {
		$("#result").val(clau);
	}

	function complete() {
		var clau = PasswordGenerator.generate(quant);
		r.last = clau;
		showresults(clau);
	}

	r.genera = function () {
		var clau = "", text = [], current;
		PasswordGenerator.init();
		for (current in tipus) {
			if (tipus.hasOwnProperty(current)) {
				if ($("#" + current).prop("checked")) {
					PasswordGenerator.setTipus(current);
				}
			}
		}

		quant = parseInt($("#quant").val(), 10);
		if (quant > 24) {
			if (!wide_version) {
				$('div.rounded').animate({width : '+=120'}, 290);
				$('div.box').animate({width : '+=120'}, 330, complete);
				wide_version = true;
				gaq.push(['_trackEvent', 'generate', 'wideversion']);
			} else {
				complete();
			}
		} else {
			complete();
		}
		gaq.push(['_trackEvent', 'generate', 'click']);
	};

	return r;


}(jQuery, PasswordGenerator, _gaq));