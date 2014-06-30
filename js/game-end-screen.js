'use strict';

angular.module('color-guess')
.controller('GameEndScreenCtrl', ['$scope', '$location', 'GameService', 'i18n', function($scope, $location, GameService, i18n) {
	$scope.i18n = i18n;
	$scope.score = GameService.getScore();
}]);
