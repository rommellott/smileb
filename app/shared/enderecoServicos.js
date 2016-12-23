(function(){
	'use strict';

	function EnderecoServicos(CONFIG, UsuarioService) {

		var enderecos = {
			local: 'http://localhost/APR/',
			  dev: 'http://192.168.0.5/APR/',			  
			 prod: 'http://10.131.60.191:8801/'
		};

		var obterEnderecoBase = function(sufixo) {
			return enderecos[CONFIG.env] + sufixo;
		};

		var obterEnderecoApi = function(sufixo) {
			return obterEnderecoBase('api/' + sufixo);
		};

		return {
			obterEnderecoApi: obterEnderecoApi,
			obterEnderecoBase: obterEnderecoBase
		};
	}

	angular.module('app').factory('EnderecoServicos', ['CONFIG', 'UsuarioService', EnderecoServicos]);
})();
