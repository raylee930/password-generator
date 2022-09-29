//  Password generator

var PasswordGenerator = (function ($) {
	"use strict";
	var r = {},
		tipus = {
			"uppers": ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
			"lowers": ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
			"numbers": ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
			"simbols": ['(', ')', '~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '=', '+', '_', '.', ',', '`', '{', '}', '[', ']', '|', '\'', '\\', '\"', '/', '?', ':', ';', '>', '<']
		},
		text = [];

	r.generate = function (quant) {
		var actual, clau = "", i;
		if(text.length > 0) {
			for (i = 0; i < quant; i += 1) {
				actual = Math.floor(Math.random() * (text.length));
				clau = clau + text[actual];
			}
		}
		r.last = clau;
		return clau;
	};

	r.getTipus = function () {
		return tipus;
	};

	r.init = function (tipus) {
		var current;
		text = [];
		if (tipus) {
			for (current in tipus) {
				if (tipus.hasOwnProperty(current)) {
					text = text.concat(tipus[current]);
				}
			}
		}
	};

	r.setTipus = function (t) {
		text = text.concat(tipus[t]);
	};

	return r;


}(jQuery));