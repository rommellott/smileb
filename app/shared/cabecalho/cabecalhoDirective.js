'use strict';

angular.module('app').directive("cabecalho", ['$state', 'NavegacaoService', 'UsuarioService', 'FiltroService', function($state, NavegacaoService, UsuarioService, FiltroService) {
    return {
        restrict: 'E',
        scope: {
			titulo: '@',
			esconderPesquisa: '@',
			esconderLogout: '@'
        },
		link: function(scope, elem, attr){
			scope.filtros = {};
			scope.filtros.area = (FiltroService.getArea() ? FiltroService.getArea().Nome : null);
			scope.filtros.celula = (FiltroService.getCelula() ? FiltroService.getCelula().Nome : null);
			scope.filtros.instalacao = (FiltroService.getInstalacao() ? FiltroService.getInstalacao().Nome : 'Todos');
			scope.filtros.dataInicial = FiltroService.getDataInicial();
			scope.filtros.dataFinal = FiltroService.getDataFinal();
			scope.filtros.emitente = FiltroService.getEmitente();
			
			scope.onPesquisaClick = function(){
				navigator.notification.confirm('Tem certeza que deseja voltar para a tela de pesquisa?', pesquisa, 'Confirmar voltar para pesquisa', ['Ok', 'Cancelar']);
			};
			
			var pesquisa = function(voltar) {
				if (voltar == 1) {
					NavegacaoService.limparNavegacao();
					FiltroService.limparFiltros();
					$state.go('pesquisa');
				}
			};
			
			scope.onLogoutClick = function(){
				navigator.notification.confirm('Tem certeza que deseja sair?', logout, 'Confirmar logout', ['Ok', 'Cancelar']);
			};
			
			var logout = function(sair) {
				if (sair == 1) {
					UsuarioService.logout();
					NavegacaoService.limparNavegacao();
					FiltroService.limparFiltros();
					$state.go('login');
				}
			};
		},
        templateUrl: 'shared/cabecalho/cabecalho.html'
    }
}]);