(function() {
	'use strict';

	function LoginCtrl($scope, $state, $http, LoginService, UsuarioService, NavegacaoService, AjudaService, CONFIG) {
		var viewModel = this;
		$localForage.removeItem('tarefasCriadas', function(){});

		viewModel.loading = false;
		viewModel.ajuda = {
			versaoFrontend: CONFIG.versao,
			versaoBackend: obterVersaoBackend()
		};

		function obterVersaoBackend() {
			AjudaService.dados(function(dados) {
				if(dados.Sucesso) {
					viewModel.ajuda.versaoBackend = dados.Versao;
				}
			}, function(error){
				console.log('Erro ao buscar a versão. Status: ' + error.status + '. Status text: ' + error.statusText + '. Data: ' + error.data);
			});
		}
		
		viewModel.login = function(){
			if(viewModel.validarLogin()){
				viewModel.loading = true;
				LoginService.login(viewModel.dadosLogin, function(data){
					if(data != null && data.Sucesso){
						UsuarioService.setDadosLogin(viewModel.dadosLogin.Usuario, data.Empresa, data.Token);
						$state.go('pesquisa');
						viewModel.loading = false;
					}
					else{
						viewModel.exibirMensagemAutenticacaoFalhou();
						viewModel.loading = false;
					}
				},
				function(){
					viewModel.exibirMensagemAutenticacaoFalhouComunicacao();
					viewModel.loading = false;
				});
			}
		};

		viewModel.exibirMensagemAutenticacaoFalhou = function(){
			navigator.notification.alert('Não foi possível fazer o login. Verifique o usuário e senha informados	 e tente novamente.', function(){}, 'Autenticação falhou', 'OK');
		};

		viewModel.exibirMensagemAutenticacaoFalhouComunicacao = function(){
			navigator.notification.alert('Não foi possível comunicar com o servidor.', function(){}, 'Autenticação falhou', 'OK');
		};

		viewModel.validarLogin = function(){
			if(viewModel.dadosLogin == null || viewModel.dadosLogin.Usuario == null || viewModel.dadosLogin.Usuario === ''){
				navigator.notification.alert('Preencha o usuário para fazer o login.', function(){}, 'Usuário não informado', 'OK');
				return false;
			}
			else if(viewModel.dadosLogin != null && viewModel.dadosLogin.Senha == null || viewModel.dadosLogin.Senha === ''){
				navigator.notification.alert('Preencha a senha para fazer o login.', function(){}, 'Senha não informada', 'OK');
				return false;
			}
			return true;
		};
	}

	angular.module('app')
		.controller('LoginCtrl', [
			'$scope', '$state', '$http', 'LoginService', 'UsuarioService', 'NavegacaoService', 'AjudaService', 'CONFIG',
			LoginCtrl
		]);
})();
