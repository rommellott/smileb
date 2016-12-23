'use strict';

angular.module('app').directive("navegacao", ['$rootScope', '$state', 'NavegacaoService', function($rootScope, $state, NavegacaoService) {
    return {
        restrict: 'E',
        scope: {
			textoBotaoCriar: '@',
			modoEdicao: '@',
			modoVisualizacao: '=',
			onCriar: '='
        },
		link: function(scope, elem, attr) {
			var listaObjetosNavegados = NavegacaoService.obterObjetosNavegados();
			if (angular.isArray(listaObjetosNavegados)){
				scope.itensNavegados = listaObjetosNavegados.join(' > ');
			}
			
			scope.onVoltar = function() {
				if (!scope.modoEdicao) {
					NavegacaoService.removerUltimoObjetoNavegado();
				}
				
				var estadoAnterior = NavegacaoService.popEstadoAnterior();
				$rootScope.$broadcast('voltarPressionado');
				$state.go(estadoAnterior.nome, estadoAnterior.parametros);
			}
			
			scope.onCriarClick = function() {
				if (!scope.somenteVisualizacao && scope.onCriar) {
					scope.onCriar(scope.onVoltar);
				}
			}
		},
        templateUrl: 'shared/navegacao/navegacao.html'
    }
}]);