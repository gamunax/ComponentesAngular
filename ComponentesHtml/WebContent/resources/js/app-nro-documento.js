!(function(mydoc) {
  'use strict';

  var searchDocApp = angular.module('SearchDocApp', [])
    .component('busquedaForm', {
      templateUrl: 'form-nro-documento.html',
      controller: ['$http', '$timeout', function($http, $timeout) {
        var vm = this;
        vm.id = undefined;
        vm.hayResultado = false;
        vm.loading = false;
        vm.resultado = {};
        vm.nodata = false;

        vm.tipoDoc = [{
          id: "DNI",
          enabled: true,
          desc: "DNI"
        }, {
          id: "RUC",
          enabled: false,
          desc: "RUC"
        }, {
          id: "PAS",
          enabled: false,
          desc: "Pasaporte"
        }, {
          id: "CNE",
          enabled: false,
          desc: "Carnet de Extranjeria"
        }];

        vm.buscardoc = function() {
          vm.nodata = false;
          vm.hayResultado = false;
          vm.loading = true;

          $http.get(vm.id + '.json').then(function(response) {
            $timeout(function() {
              vm.resultado = response.data;
              vm.hayResultado = true;
              vm.loading = false;
            }, 1800);

          }, function() {
            $timeout(function() {
              vm.nodata = true;
              vm.loading = false;
            }, 2000);

          });

        }
      }],
      bindings: {

      }
    });


  angular.element(mydoc).ready(function() {
    angular.bootstrap(mydoc, ['SearchDocApp']);
  });

})(window.document);

                