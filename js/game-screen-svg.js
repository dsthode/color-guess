'use strict';

angular.module('color-guess')
.controller('GameScreenSVGCtrl', ['$scope', 'i18n', 'GameService', function($scope, i18n, GameService) {
	var setupCanvas = function() {
		if (container.clientWidth > container.clientHeight) {
			dimension = container.clientHeight;
		} else {
			dimension = container.clientWidth;
		}
		container.style.width = dimension + "px";
		container.style.height = dimension + "px";
		container.style.margin = "0 auto";
	};
	var container = document.getElementById('color-container');
	$scope.i18n = i18n;
	$scope.currentColor = {};
	$scope.playing = false;
	$scope.score = 0;
	var dimension = 0;
	var animationId = null;
	setupCanvas();
	var timeElapsed=0, 
		rads=0, 
		radius=(container.clientWidth/2)-20,
		centerx=(container.clientWidth/2), 
		centery=(container.clientHeight/2), 
		startx=centerx,
		starty=centery-radius,
		animationStart = null,
		arcStart=-(Math.PI/2),
		destx=0,
		desty=0,
		degrees=0,
		pathString = null;
	var paper = Raphael(container, dimension, dimension);
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
		degrees = rads * 180 / Math.PI;
		destx = startx + radius*Math.sin(degrees);
		desty = starty - radius*(1 - Math.cos(degrees));
		pathString = Raphael.format("M{0},{1} A{2},{3} {4} {5},{6} {7},{8}",
			startx, starty, radius, radius, 0, (degrees>180)? 1:0, (degrees <= 180)? 1:0, destx, desty)
		paper.clear();
		paper.path(pathString)
			.attr('stroke', $scope.currentColor.color)
			.attr('stroke-width', 20);
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
