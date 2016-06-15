!(function(mydoc) {
  'use strict';

  var searchDocApp = angular.module('SearchDocApp', [])
    .controller('rucController', ['$scope', '$http', '$timeout', 
    function(scope, $http, $timeout) {
      var vm = this;
      vm.id = '';
      vm.hayResultado = false;
      vm.loading = false;
      vm.resultado = {};
      vm.nodata = false;
      vm.isInValid = true;

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
      vm.onkeydown = function(e) {
        var keyCode = e.keyCode || e.which;
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
          // Allow: Ctrl+A
          (keyCode == 65 && e.ctrlKey === true) ||
          // Allow: Ctrl+C
          (keyCode == 67 && e.ctrlKey === true) ||
          // Allow: Ctrl+X
          (keyCode == 88 && e.ctrlKey === true) ||
          // Allow: home, end, left, right
          (keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }

        if (((e.shiftKey || (keyCode < 48 || keyCode > 57)) && (keyCode < 96 || keyCode > 105))) {
          e.preventDefault();
          return false;
        }
      };

      vm.onblur = function() {
        if (isNaN(vm.id) || vm.id.length <= 10) {
          vm.isInValid = true;
          scope.stform.numerodoc.$invalid = true;
        }
      };

      vm.onkeyup = function() {
        if (isNaN(vm.id) || vm.id.length !== 11) {
          scope.stform.$invalid = true;
          vm.isInValid = true;
        } else {
          vm.isInValid = false;
        }
      };

    }])
    .directive('busquedaRucForm', [function() {
      return {
        restrict: 'E',
        templateUrl: 'form-consulta-ruc.html',
        link: function(scope, element, attrs, ngModel) {

        },
        controller: 'rucController',
        controllerAs: 'ctrl'
      }
    }]);


  angular.element(mydoc).ready(function() {
    angular.bootstrap(mydoc, ['SearchDocApp']);
  });

})(window.document);