'use strict';

angular.module('color-guess')
.service('Colors', [function() {
	return [
		{
			color: '#ddff00',
			name: 'yellow',
		},
		{
			color: '#0000ff',
			name: 'blue',
		},
		{
			color: '#ff0000',
			name: 'red',
		},
		{
			color: '#00cc00',
			name: 'green',
		},
		{
			color: '#66ccff',
			name: 'light_blue',
		},
		{
			color: '#61380b',
			name: 'brown',
		},
		{
			color: '#ff00ff',
			name: 'pink',
		},
		{
			color: '#ff8000',
			name: 'orange',
		},
		{
			color: '#6a0888',
			name: 'purple',
		},
		{
			color: '#848484',
			name: 'gray',
		},
		{
			color: '#000000',
			name: 'black',
		}
	];
}]);
