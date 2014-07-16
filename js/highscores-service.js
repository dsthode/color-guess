'use strict';

angular.module('color-guess')
.service('HighscoresService', [function() {
	var highscores = angular.fromJson(window.localStorage['highscores']) || [];
	return {
		getHighscores: function() {
			return highscores;
		},
		addScore: function(score) {
			if (score > 0) {
				highscores.push(score);
				highscores = highscores.sort(function(a,b){return b-a;}).slice(0,5);
				window.localStorage['highscores'] = angular.toJson(highscores);
			}
		}
	};
}]);
