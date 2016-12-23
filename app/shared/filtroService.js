(function() {
  'use strict';

  function FiltroService() {
  	var area;
  	var celula;
  	var instalacao;
  	var dataInicial;
  	var dataFinal;
  	var emitente;
  	var numeroApr;

  	var setDadosFiltro = function(area, celula, instalacao, dataInicial, dataFinal, emitente, numeroApr) {
  		this.area = area;
  		this.celula = celula;
  		this.instalacao = instalacao;
  		this.dataInicial = dataInicial;
  		this.dataFinal = dataFinal;
  		this.emitente = emitente;
  		this.numeroApr = numeroApr;
  	}

	var getArea = function(){
		return this.area;
	};
	
	var getCelula = function(){
		return this.celula;
	};
	
	var getInstalacao = function(){
		return this.instalacao;
	};
	
	var getDataInicial = function(){
		return this.dataInicial;
	};
	
	var getDataFinal = function(){
		return this.dataFinal;
	};
	
	var getEmitente = function(){
		return this.emitente;
	};

	var getNumeroApr = function(){
		return this.numeroApr;
	};
	  
	var limparFiltros = function(){
		this.area = null;
		this.celula = null;
		this.instalacao = null;
		this.dataInicial = null;
		this.dataFinal = null;
		this.area = null;
		this.emitente = null;
		this.numeroApr = null;
	}
	  
	return {
	getArea: getArea,
	getCelula: getCelula,
	getInstalacao: getInstalacao,
	getDataInicial: getDataInicial,
	getDataFinal: getDataFinal,
	getEmitente: getEmitente,
	getNumeroApr: getNumeroApr,
		setDadosFiltro: setDadosFiltro,
		limparFiltros: limparFiltros
	};
  }

  angular.module('app')
    .factory('FiltroService', [FiltroService]);
})();

