var app = angular.module('testApp', [
	'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'partials/home.html' 
			})
			.state('toDo', {
				url: '/todo',
				templateUrl: 'partials/toDo.html', 
				controller: 'todoCtrl',
				resolve: {
					todoList: ['Todo', function(Todo){
						return Todo.get();
					}]
				}
			})
			.state('about', {
				url: '/about',
				templateUrl: 'partials/about.html' 
			})
			.state('stuff', {
				url: '/stuff',
				templateUrl: 'partials/stuff.html' 
			})
	}]);
