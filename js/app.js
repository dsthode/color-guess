'use strict';

window.requestAnimationFrame = window.requestAnimationFrame || 
															window.mozRequestAnimationFrame ||
															window.webkitRequestAnimationFrame || 
															window.msRequestAnimationFrame;
window.cancelAnimationFrame = window.cancelAnimationFrame || 
													window.mozCancelAnimationFrame;

angular.module('color-guess', ['ngRoute'])
.constant('MAX_INITIAL_COLORS', 4)
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/welcome-screen.html',
		controller: 'WelcomeScreenCtrl'
	})
	.when('/game', {
		templateUrl: 'partials/game-screen.html',
		controller: 'GameScreenCtrl'
	})
	.when('/highscores', {
		templateUrl: 'partials/highscores-screen.html',
		controller: 'HighscoresScreenCtrl'
	})
	.otherwise('/');
}])
;
