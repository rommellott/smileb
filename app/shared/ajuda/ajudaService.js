(function() {
	'use strict';

	function AjudaService($resource, EnderecoServicos) {
		var url = EnderecoServicos.obterEnderecoApi('Ajuda');

		return $resource(url, {}, {
			dados: { method: 'GET'}
		});
	}

	angular.module('app')
		.factory('AjudaService', [
			'$resource',
			'EnderecoServicos',
			AjudaService
		]);
})();
