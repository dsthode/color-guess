'use strict';

window.requestAnimationFrame = window.requestAnimationFrame || 
															window.mozRequestAnimationFrame ||
															window.webkitRequestAnimationFrame || 
															window.msRequestAnimationFrame;
window.cancelAnimationFrame = window.cancelAnimationFrame || 
													window.mozCancelAnimationFrame;

angular.module('color-guess', ['ngRoute'])
.constant('MAX_INITIAL_COLORS', 4)
.constant('MAX_TIME', 5000)
.constant('TIME_SUBSTRACT', 250)
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/welcome-screen.html',
		controller: 'WelcomeScreenCtrl'
	})
	.when('/game-canvas', {
		templateUrl: 'partials/game-screen-canvas.html',
		controller: 'GameScreenCanvasCtrl'
	})
	.when('/game-svg', {
		templateUrl: 'partials/game-screen-svg.html',
		controller: 'GameScreenSVGCtrl'
	})
	.when('/game-end', {
		templateUrl: 'partials/game-end-screen.html',
		controller: 'GameEndScreenCtrl'
	})
	.when('/highscores', {
		templateUrl: 'partials/highscores-screen.html',
		controller: 'HighscoresScreenCtrl'
	})
	.otherwise('/');
}])
;
