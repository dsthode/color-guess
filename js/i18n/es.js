'use strict';

angular.module('color-guess')
.service('strings_es', [function() {
	return {
		yellow: 'amarillo',
		blue: 'azul',
		red: 'rojo',
		green: 'verde',
		cyan: 'celeste',
		brown: 'marrón',
		pink: 'rosa',
		orange: 'naranja',
		purple: 'morado',
		gray: 'gris',
		black: 'negro',
		highscores: 'Puntuaciones',
		play: '¡Jugar!',
		back: 'Volver',
		about: '<p>Este juego es una demostración del <a href="https://es.wikipedia.org/wiki/Efecto_Stroop" target="_blank">efecto Stroop</a>.</p>' +
			'<p>El propósito del juego es determinar si el nombre del color coincide con el color pintado en la pantalla, antes de que el tiempo se acabe.</p>' +
			'<p>Según vayas acertando más colores, el juego se volverá más rápido y nuevos colores aparecerán para hacer la partida más difícil.</p>' +
			'<p>Este juego está inspirado en el divertido juego para Android <a href="https://play.google.com/store/apps/details?id=com.aurelhubert.truecolor&hl=es" target="_blank">True Color</a> por Aurélien Hubert.</p>'
	};
}]);

