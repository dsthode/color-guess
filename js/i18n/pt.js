'use strict';

angular.module('color-guess')
.service('strings_pt', [function() {
	return {
		yellow: 'amarelo',
		blue: 'azul',
		red: 'vermelho',
		green: 'verde',
		cyan: 'celeste',
		brown: 'marrom',
		pink: 'rosa',
		orange: 'laranja',
		purple: 'roxo',
		gray: 'cinza',
		black: 'preto',
		highscores: 'Highscores',
		play: 'Jogar!',
		back: 'Atras',
		about: '<p>This game is a demostration of the <a href="https://pt.wikipedia.org/wiki/Efeito_Stroop" target="_blank">Stroop effect</a>.</p>' +
			'<p>The purpose of the game is to tell if the name of the color matches the color painted on the screen, before the time outs.</p>' +
			'<p>As you guess right more colors the game will get faster, new colors will appear and the game will become more difficult.</p>' +
			'<p>This game is inspired by the wonderful Android game <a href="https://play.google.com/store/apps/details?id=com.aurelhubert.truecolor&hl=pt" target="_blank">True Color</a> by Aurélien Hubert.</p>'
	};
}]);

