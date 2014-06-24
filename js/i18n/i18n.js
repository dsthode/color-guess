angular.module('color-guess')
.service('i18n', ['strings_en', 'strings_es', 'strings_fr', 'strings_pt', 'strings_de',
	function(en, es, fr, pt, de) {
		var current_language = en;
		return {
			setLanguage: function(code) {
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
			},
			getString: function(name) {
				var result = name;
				if (current_language[name]) {
					result = current_language[name];
				}
				return result;
			}
		};
	}]
);
