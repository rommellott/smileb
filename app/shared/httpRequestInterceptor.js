'use strict';

angular.module('app')
	.factory('HttpRequestInterceptor', [
		'$q', '$injector', 'UsuarioService',
		function($q, $injector, UsuarioService){

			var request = function(config){
				if(UsuarioService.getToken() != null)
				{
					config.headers.Authorization = 'Basic ' + UsuarioService.getToken();
				}
				return config;
			};

			var responseError = function(rejection){
				if(rejection.status === 401){
					$injector.get('$state').go('login');
				}
				return $q.reject(rejection);
			};	

			return {
				request: request,
				responseError: responseError
			};
		}
	]);