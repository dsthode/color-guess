'use strict';

angular.module('color-guess')
.service('Colors', [function() {
	var colors = [
		{
			color: '#ffff00',
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
			color: '#00ff00',
			name: 'green',
		},
		{
			color: '#00ffff',
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
