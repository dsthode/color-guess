'use strict';

angular.module('color-guess')
.controller('GameScreenCtrl', ['$scope', 'i18n', 'GameService', function($scope, i18n, GameService) {
	var setupCanvas = function(canvas) {
		var container = document.getElementById('color-container');
		if (container.clientWidth > container.clientHeight) {
			dimension = container.clientHeight;
		} else {
			dimension = container.clientWidth;
		}
		canvas.width = dimension;
		canvas.height = dimension;
		canvas.style.width = dimension + "px";
		canvas.style.height = dimension + "px";
		container.style.width = dimension + "px";
		container.style.margin = "0 auto";
	};
	$scope.i18n = i18n;
	$scope.currentColor = {};
	$scope.playing = false;
	$scope.score = 0;
	var dimension = 0;
	var animationId = null;
	var canvas = document.getElementById('color-wheel');
	var ctx = canvas.getContext('2d');
	setupCanvas(ctx.canvas);
	var timeElapsed=0, 
		rads=0, 
		radius=(ctx.canvas.width/2)-20, 
		centerx=(ctx.canvas.width/2), 
		centery=(ctx.canvas.height/2), 
		arcStart=-(Math.PI/2),
		animationStart = null;
	$scope.buttonYes = function() {
		if ($scope.playing) {
			if ($scope.currentColor.answer == true) {
				nextColor();
			} else {
				gameEnded();
			}
		}
	};
	$scope.buttonNo = function() {
		if ($scope.playing) {
			if ($scope.currentColor.answer == false) {
				nextColor();
			} else {
				gameEnded();
			}
		}
	};
	$scope.playAgain = function() {
		startNewGame();
	};
	var startNewGame = function() {
		$scope.playing = true;
		GameService.newGame();
		nextColor();
	};
	var nextColor = function() {
		$scope.currentColor = GameService.getNextColor();
		$scope.score = $scope.currentColor.score;
		animationStart = null;
		window.requestAnimationFrame(animateColorWheel);
	};
	var animateColorWheel = function(timestamp) {
		if (animationStart === null) {
			animationStart = timestamp;
		}
		timeElapsed = timestamp - animationStart;
		if (timeElapsed > $scope.currentColor.time) {
			timeElapsed = $scope.currentColor.time;
		}
		rads = (timeElapsed * 2 * Math.PI / $scope.currentColor.time) + arcStart;
		ctx.clearRect(0, 0, dimension, dimension);
		ctx.font = "25pt Arial";
		ctx.textAlign = "center";
		ctx.fillStyle = $scope.currentColor.color;
		ctx.fillText(i18n.getString($scope.currentColor.name), centerx, centery, radius*2);
		ctx.beginPath();
		ctx.arc(centerx, centery, radius, arcStart, rads, false);
		ctx.lineWidth = 15;
		ctx.strokeStyle = $scope.currentColor.color;
		ctx.stroke();
		if ($scope.playing && timeElapsed < $scope.currentColor.time) {
			animationId = window.requestAnimationFrame(animateColorWheel);
		} else {
			timeExpired();
		}
	};
	var timeExpired = function() {
		gameEnded();
	};
	var gameEnded = function() {
		$scope.playing = false;
	};
	startNewGame();
}]);
