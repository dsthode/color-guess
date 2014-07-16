'use strict';

angular.module('color-guess')
.controller('HighscoresScreenCtrl', ['$scope', 'i18n', 'HighscoresService', function($scope, i18n, HighscoresService) {
	$scope.i18n = i18n;
	$scope.highscores = HighscoresService.getHighscores();
}]);
