'use strict';

angular.module('color-guess')
.controller('HighscoresScreenCtrl', ['$scope', 'i18n', function($scope, i18n) {
	$scope.i18n = i18n;
	$scope.scores = [];
}]);
