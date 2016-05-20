!(function(mydoc) {
  'use strict';

  var searchDocApp = angular.module('SearchDocApp', [])
    .component('busquedaForm', {
      templateUrl: 'form.html',
      controller: ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
        var vm = this;
        vm.id = '';
        vm.hayResultado = false;
        vm.loading = false;
        vm.resultado = {};
        vm.nodata = false;
        vm.isInValid = true;

        vm.onblur = function() {
          if (vm.id.length <= 7) {
            vm.isInValid = true;
            $scope.stform.numerodoc.$invalid = true;
          }
        };

        vm.onkeydown = function() {
          var keyCode = event.keyCode || event.which;
          // Allow: backspace, delete, tab, escape, enter and .
          if ($.inArray(event.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Allow: Ctrl+C
            (event.keyCode == 67 && event.ctrlKey === true) ||
            // Allow: Ctrl+X
            (event.keyCode == 88 && event.ctrlKey === true) ||
            // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
          }
          
          if (((event.shiftKey || (keyCode < 48 || keyCode > 57)) && (keyCode < 96 || keyCode > 105))) {
            event.preventDefault();
            return false;
          }
        }
        
        vm.onkeyup = function(){
                    if (vm.id.length !== 8) {
            $scope.stform.$invalid = true;
            vm.isInValid = true;
          } else {
            vm.isInValid = false;
          }
        }

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