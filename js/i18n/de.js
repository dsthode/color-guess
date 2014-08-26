'use strict';

angular.module('color-guess')
.service('strings_de', [function() {
	return {
		yellow: 'gelb',
		blue: 'blau',
		red: 'rot',
		green: 'grün',
		cyan: 'hellblau',
		brown: 'braun',
		pink: 'rosa',
		orange: 'orange',
		purple: 'lila',
		gray: 'grau',
		black: 'schwartz',
		highscores: 'Highscores',
		play: 'Play!',
		back: 'Back',
		about: '<p>This game is a demostration of the <a href="https://de.wikipedia.org/wiki/Stroop-Effekt" target="_blank">Stroop effect</a>.</p>' +
			'<p>The purpose of the game is to tell if the name of the color matches the color painted on the screen, before the time outs.</p>' +
			'<p>As you guess right more colors the game will get faster, new colors will appear and the game will become more difficult.</p>' +
			'<p>This game is inspired by the wonderful Android game <a href="https://play.google.com/store/apps/details?id=com.aurelhubert.truecolor&hl=de" target="_blank">True Color</a> by Aurélien Hubert.</p>'
	};
}]);
