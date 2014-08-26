'use strict';

angular.module('color-guess')
.service('strings_en', [function() {
	return {
		yellow: 'yellow',
		blue: 'blue',
		red: 'red',
		green: 'green',
		cyan: 'cyan',
		brown: 'brown',
		pink: 'pink',
		orange: 'orange',
		purple: 'purple',
		gray: 'gray',
		black: 'black',
		highscores: 'Highscores',
		play: 'Play!',
		back: 'Back',
		about: '<p>This game is a demostration of the <a href="https://en.wikipedia.org/wiki/Stroop_effect" target="_blank">Stroop effect</a>.</p>' +
			'<p>The purpose of the game is to tell if the name of the color matches the color painted on the screen, before the time outs.</p>' +
			'<p>As you guess right more colors the game will get faster, new colors will appear and the game will become more difficult.</p>' +
			'<p>This game is inspired by the wonderful Android game <a href="https://play.google.com/store/apps/details?id=com.aurelhubert.truecolor&hl=en" target="_blank">True Color</a> by Aurélien Hubert.</p>'
	};
}]);

