'use strict';

angular.module('color-guess')
.service('strings_fr', [function() {
	return {
		yellow: 'jaune',
		blue: 'bleu',
		red: 'rouge',
		green: 'vert',
		cyan: 'bleu clair',
		brown: 'brun',
		pink: 'rose',
		orange: 'orange',
		purple: 'pourpre',
		gray: 'gris',
		black: 'noir',
		highscores: 'Highscores',
		play: 'Jouer!',
		back: 'Back',
		about: '<p>This game is a demostration of the <a href="https://fr.wikipedia.org/wiki/Effet_Stroop" target="_blank">Stroop effect</a>.</p>' +
			'<p>The purpose of the game is to tell if the name of the color matches the color painted on the screen, before the time outs.</p>' +
			'<p>As you guess right more colors the game will get faster, new colors will appear and the game will become more difficult.</p>' +
			'<p>This game is inspired by the wonderful Android game <a href="https://play.google.com/store/apps/details?id=com.aurelhubert.truecolor&hl=fr" target="_blank">True Color</a> by Aurélien Hubert.</p>'
	};
}]);

