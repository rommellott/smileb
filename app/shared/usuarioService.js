(function() {
  'use strict';

  function UsuarioService() {

      var usuario;
      var empresa;
      var token = {};

      var setDadosLogin = function(loginUsuario, empresaUsuario, tokenAuth){
          usuario = loginUsuario;
          empresa = empresaUsuario;
          token = tokenAuth;
      };

      var getToken = function(){
          if(token != null)
          {
            return token;
          }
          return null;
      };

      var getUsuario = function(){
          return usuario;
      };

      var getEmpresa = function(){
        if (empresa != null) {
          return empresa;
        }
        return null;
      };

      var logout = function(){
          usuario = {};
          token = {};
      };

      return {
        getUsuario: getUsuario,
        getEmpresa: getEmpresa,
        getToken : getToken,
        setDadosLogin: setDadosLogin,
        logout : logout
      };
  }

  angular.module('app')
    .factory('UsuarioService', [UsuarioService]);
})();

