angular.module('color-guess', [])
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
