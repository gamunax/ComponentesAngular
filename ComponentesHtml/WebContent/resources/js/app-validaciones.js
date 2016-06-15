!(function(mydoc) {
  'use strict';

  var searchDocApp = angular.module('InputDataApp', ['ngAnimate', 'ngMessages'])
    .controller('inputController', ['$scope', '$http', '$timeout',
      function(scope, $http, $timeout) {
        var vm = this;
        vm.value = '';
        // vm.maxlength = undefined;
        switch (vm.tipo) {
            case 'numero':
            case 'moneda':
              scope.inputType = 'number';
              break;
            case 'tiempo':
              scope.inputType = 'datetime-local';
              break;
            case 'email':
              scope.inputType = 'email';
              break;
            case 'cc':
              scope.inputType = 'number';
              break;
            default:
              scope.inputType = 'text';
          }
      }
    ])
    .directive('validacion', [function() {
      return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
          tipo: '='
        },
        link: function(scope, element, attrs, ngModel) {
          if (scope.tipo === 'numero' || scope.tipo === 'moneda') {
            ngModel.$validators.stnumero = function(value) {
              var regexNum = /^-?\d+\.?\d*$/;
              return (value && regexNum.test(value));
            }
          }
          if (scope.tipo === 'caracter') {
            ngModel.$validators.stcaracter = function(value) {
              var regexCar = /^[a-z0-9]+$/gi;
              return (value && regexCar.test(value));
            }
          }
          if (scope.tipo === 'tiempo') {
            ngModel.$validators.sttiempo = function(value) {
              var regexTime = /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/gi;
              return (value && regexTime.test(value));
            }
          }
          if (scope.tipo === 'email') {
            //http://emailregex.com/
            ngModel.$validators.stemail = function(value) {
              var regexEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
              return (value && regexEmail.test(value));
            }
          }
          if (scope.tipo === 'cc') {
            //http://www.richardsramblings.com/2012/12/the-perfect-credit-card-number-regex/
            ngModel.$validators.stcc = function(value) {
              var regexCC = /\b(?:3[47]\d|(?:4\d|5[1-5]|65)\d{2}|6011)\d{12}\b/i;
              return (value && regexCC.test(value));
            }
          }
        }
      }
    }])
    .directive('inputData', [function() {
      return {
        restrict: 'E',
        scope: {},
        bindToController: {
          label: '@',
          valor: '=',
          tipo: '@',
          sid: '@',
          sname: '@',
          placeholder: '@',
          maxlong: '@?',
          minlong: '@?'
        },
        link:function(){
          
        },
        templateUrl: 'form-validaciones.html',
        controller: 'inputController',
        controllerAs: 'ctrl'
      }
    }]);


  angular.element(mydoc).ready(function() {
    angular.bootstrap(mydoc, ['InputDataApp']);
  });

})(window.document);