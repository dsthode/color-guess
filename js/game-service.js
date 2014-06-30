'use strict';

angular.module('color-guess')
.service('GameService', ['MAX_INITIAL_COLORS', 'MAX_TIME', 'TIME_SUBSTRACT', 'Colors', 
	function(MAX_INITIAL_COLORS, MAX_TIME, TIME_SUBSTRACT, Colors) {
		var max_colors = MAX_INITIAL_COLORS;
		var time = MAX_TIME;
		var score = -1;
		var color_idx = 0;
		var name_idx = 0;
		var previous_color_idx = 0;
		var previous_name_idx = 0;
		function randomNumber(max) {
			return Math.floor(Math.random() * max);
		};
		return {
			getNextColor: function() {
				while (color_idx == previous_color_idx && name_idx == previous_name_idx) {
					color_idx = randomNumber(max_colors);
					name_idx = randomNumber(max_colors);
				}
				previous_color_idx = color_idx;
				previous_name_idx = name_idx;
				score += 1;
				time = MAX_TIME - (score/10 * TIME_SUBSTRACT);
				if (time < 1000) {
					time = 1000;
				}
				max_colors = Math.floor(MAX_INITIAL_COLORS + (score/30));
				if (max_colors > Colors.length) {
					max_colors = Colors.length;
				}
				return {
					score: score,
					color: Colors[color_idx].color,
					name: Colors[name_idx].name,
					answer: color_idx == name_idx,
					time: time
				};
			},
			newGame: function() {
				max_colors = MAX_INITIAL_COLORS;
				score = -1;
			},
			getScore: function() {
				return score;
			}
	};
}]);
