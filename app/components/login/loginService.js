(function() {
	'use strict';

	function LoginService($resource, EnderecoServicos) {
		var url = EnderecoServicos.obterEnderecoApi('Usuario');

		return $resource(url, {}, {
			login: { method: 'POST'}
		});
	}

	angular.module('app')
		.factory('LoginService', [
			'$resource',
			'EnderecoServicos',
			LoginService
		]);
})();
