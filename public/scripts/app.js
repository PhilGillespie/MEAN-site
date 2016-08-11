var app = angular.module('testApp', [
	'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'partials/home.html',
				controller: 'homeCtrl'
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
				templateUrl: 'partials/about.html',
				controller: 'aboutCtrl' 
			})
			.state('stuff', {
				url: '/stuff',
				templateUrl: 'partials/stuff.html',
				controller: 'stuffCtrl' 
			})
	}]);
