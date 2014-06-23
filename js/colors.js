angular.module('color-guess')
.service ('Colors', [function() {
	var colors = [
		{
			color: '#ffff00',
			en: 'yellow',
			es: 'amarillo',
			fr: 'jaune',
			pt: 'amarelo',
			de: 'gelb'
		},
		{
			color: '#0000ff',
			en: 'blue',
			es: 'azul',
			fr: 'bleu',
			pt: 'azul',
			de: 'blau'
		},
		{
			color: '#ff0000',
			en: 'red',
			es: 'rojo',
			fr: 'rouge',
			pt: 'vermelho',
			de: 'rot'
		},
		{
			color: '#00ff00',
			en: 'green',
			es: 'verde',
			fr: 'vert',
			pt: 'verde',
			de: 'grün'
		},
		{
			color: '#00ffff',
			en: 'light blue',
			es: 'celeste',
			fr: 'bleu clair',
			pt: 'celeste',
			de: 'hellblau'
		},
		{
			color: '#61380b',
			en: 'brown',
			es: 'marron',
			fr: 'brun',
			pt: 'marrom',
			de: 'braun'
		},
		{
			color: '#ff00ff',
			en: 'pink',
			es: 'rosa',
			fr: 'rose',
			pt: 'rosa',
			de: 'rosa'
		},
		{
			color: '#ff8000',
			en: 'orange',
			es: 'naranja',
			fr: 'orange',
			pt: 'laranja',
			de: 'orange'
		},
		{
			color: '#6a0888',
			en: 'purple',
			es: 'morado',
			fr: 'pourpre',
			pt: 'roxo',
			de: 'lila'
		},
		{
			color: '#848484',
			en: 'gray',
			es: 'gris',
			fr: 'gris',
			pt: 'cinza',
			de: 'grau'
		},
		{
			color: '#000000',
			en: 'black',
			es: 'negro',
			fr: 'noir',
			pt: 'preto',
			de: 'schwartz'
		}
	];
}]);
