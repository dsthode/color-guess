'use strict';

angular.module('color-guess')
.controller('GameScreenSVGCtrl', ['$scope', 'i18n', 'GameService', '$timeout', '$location', 
	function($scope, i18n, GameService, $timeout, $location) {
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
			half_pi=Math.PI/2,
			arcStart=-half_pi,
			destx=0,
			desty=0,
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
			destx = centerx + radius*Math.cos(rads);
			desty = centery + radius*Math.sin(rads);
			pathString = Raphael.format("M{0},{1} A{2},{3} {4} {5},{6} {7},{8}",
				startx, starty, radius, radius, 0, (rads>half_pi)? 1:0, 1, destx, desty)
			paper.clear();
			paper.path(pathString)
				.attr('stroke', $scope.currentColor.color)
				.attr('stroke-width', 20);
			paper.text(centerx, centery, i18n.getString($scope.currentColor.name).toUpperCase())
				.attr('fill', $scope.currentColor.color)
				.attr('font-size', 30)
				.attr('font-weight', 'bold');
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
				$timeout(function() {
					$location.url('/game-end');
				}, 1000);
		};
		startNewGame();
}]);
