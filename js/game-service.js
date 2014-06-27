'use strict';

angular.module('color-guess')
.service('GameService', ['MAX_INITIAL_COLORS', 'Colors', function(Colors) {
	var max_colors = MAX_INITIAL_COLORS;
	var score = 0;
	function randomNumber(max) {
		return Math.floor(Math.random() * max);
	};
	return {
		getNexColor: function() {
			var color_idx = randomNumber(max_colors);
			var name_idx = randomNumber(max_colors);
			score += 1;
			return {
				color: Colors[color_idx].color,
				name: Colors[name_idx].name,
				answer: color_idx == name_idx,
				time: 5000
			};
		},
		newGame: function() {
			max_colors = MAX_INITIAL_COLORS;
			score = 0;
		},
		getScore: function() {
			return score;
		}
	};
}]);
