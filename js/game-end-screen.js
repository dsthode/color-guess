'use strict';

angular.module('color-guess')
.controller('GameEndScreenCtrl', ['$scope', '$location', 'GameService', 'i18n', 'HighscoresService', 
	function($scope, $location, GameService, i18n, HighscoresService) {
		$scope.i18n = i18n;
		$scope.score = GameService.getScore();
		if ($scope.score > 0) {
			HighscoresService.addScore($scope.score);
		}
	}
]);
