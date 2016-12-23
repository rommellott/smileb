(function() {
  'use strict';

  function NavegacaoService() {

      var objetosNavegados = [];
	  var paginasNavegadas = [];

      var registrarObjetoNavegado = function(objetoNavegado){
          objetosNavegados.push(objetoNavegado);
      };
	  
	  var removerUltimoObjetoNavegado = function() {
		  if (objetosNavegados.length > 0) {
			objetosNavegados.pop();
		  }
	  }
	  
	  var obterObjetosNavegados = function()
	  {
		  return objetosNavegados;
	  }
	  
	  var limparNavegacao = function()
	  {
		  objetosNavegados = [];
		  paginasNavegadas = [];
	  }
	  
	  var registrarEstado = function(estado, parametrosEstado)
	  {
		  paginasNavegadas.push({ nome: estado.name, parametros: parametrosEstado });
	  }
	  
	  var popEstadoAnterior = function()
	  {
		  return paginasNavegadas.pop();
	  }

	  var getTarefa = function() {
	  	return objetosNavegados[0];
	  }

	  var getAPR = function() {
	  	return objetosNavegados[1];
	  }

      return {
        registrarObjetoNavegado: registrarObjetoNavegado,
        obterObjetosNavegados: obterObjetosNavegados,
		limparNavegacao: limparNavegacao,
		registrarEstado: registrarEstado,
		popEstadoAnterior: popEstadoAnterior,
		getTarefa: getTarefa,
		getAPR: getAPR,
		removerUltimoObjetoNavegado: removerUltimoObjetoNavegado
      };
  }

  angular.module('app')
    .factory('NavegacaoService', [NavegacaoService]);
})();

