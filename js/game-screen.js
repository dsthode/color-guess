'use strict';

angular.module('color-guess')
.controller('GameScreenCtrl', ['$scope', 'i18n', 'GameService', function($scope, i18n, GameService) {
	$scope.i18n = i18n;
	$scope.currentColor = {};
	$scope.animationStart = null;
	var animationId = null;
	var canvas = document.getElementById('color-container');
	var ctx = canvas.getContext('2d');
	var timeElapsed=0, degrees=0, startx=200, starty=20, radius=200, centerx=startx, centery=0;
	$scope.buttonYes = function() {
		if ($scope.currentColor.answer == true) {
			window.cancelAnimationFrame(animationId);
			nextColor();
		} else {
			gameEnded();
		}
	};
	$scope.buttonNo = function() {
		if ($scope.currentColor.answer == false) {
			window.cancelAnimationFrame(animationId);
			nextColor();
		} else {
			gameEnded();
		}
	};
	$scope.playAgain = function() {
		startNewGame();
	};
	var startNewGame = function() {
	};
	var nextColor = function() {
		$scope.currentColor = GameService.getNextColor();
		window.requestAnimationFrame(animateColorWheel);
	};
	var animateColorWheel = function(timestamp) {
		if ($scope.animationStart === null) {
			$scope.animationStart = timestamp;
		}
		timeElapsed = timestamp - $scope.animationStart;
		degrees = Math.round($scope.currentColor.time / 360);
		centery = starty + radius/2;
		ctx.clearRect(0,0, 500,500);
		ctx.beginPath();
		ctx.arc(centerx, centery, 0, degrees, false);
		ctx.strokeStyle = $scope.currentColor.color;
		ctx.stroke();
		if (timeElapsed < $scope.currentColor.time) {
			animationId = window.requestAnimationFrame(timeElapsed);
		} else {
			timeExpired();
		}
	};
	var timeExpired = function() {
		window.cancelAnimationFrame(animationId);
		gameEnded();
	};
	var gameEnded = function() {
	};
}]);
