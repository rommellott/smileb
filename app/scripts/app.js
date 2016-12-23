'use strict';

var app = angular.module('app', [
	'ngRoute',
	'ui.router',
	'template-test',
	'ngResource'
]);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	'$httpProvider',
	function($stateProvider, $urlRouterProvider, $httpProvider){
		$httpProvider.interceptors.push('HttpRequestInterceptor');
		$urlRouterProvider.otherwise('/doctorsList');
		$stateProvider
			.state('login', {
				url: '/',
				templateUrl: 'components/login/login.html'
			})
			.state('doctorsList', {
				url: '/doctorsList',
				templateUrl: 'components/doctorsList/doctorsList.html'
			});
	}]);
	
app.run(['$rootScope', function($rootScope) {
}]);
