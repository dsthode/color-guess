'use strict';

angular.module('color-guess')
.service('i18n', ['strings_en', 'strings_es', 'strings_fr', 'strings_pt', 'strings_de',
	function(en, es, fr, pt, de) {
		var current_language = null;
		var setLanguageCode = function(code) {
			if (code === 'en') {
				current_language = en;
			} else if (code === 'es') {
				current_language = es;
			} else if (code === 'fr') {
				current_language = fr;
			} else if (code === 'pt') {
				current_language = pt;
			} else if (code === 'de') {
				current_language = de;
			} else {
				current_language = en;
			}
		};
		var browserLanguage = navigator.language || 
			navigator.browserLanguage ||
			navigator.systemLanguage ||
			navigator.userLanguage ||
			'en';
		setLanguageCode(browserLanguage.substring(0, 2));
		return {
			setLanguage: function(code) {
				setLanguageCode(code);
			},
			getString: function(name) {
				var result = 'miss:' + name;
				if (current_language[name]) {
					result = current_language[name];
				}
				return result;
			}
		};
	}]
);
