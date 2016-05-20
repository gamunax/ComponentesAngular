!(function(mydoc) {
  'use strict';

  var ubigeoApp = angular.module('UbigeoApp', [])
    .component('ubigeoForm', {
      templateUrl: 'ubigeo.html',
      controller: ['$scope', '$timeout', function($scope, $timeout) {
        var vm = this;
        vm.level1 = '';
        vm.level2 = '';
        vm.level3 = '';

        vm.ubigeo = [{
          "name": "Ancash",
          "id": "01",
          "dep": [{
            "name": "Ancash",
            "id": "0101",
            "dep": [{
              "name": "Ancash",
              "id": "010101"
            }, {
              "name": "Ciudad 1.1.2",
              "id": "010103"
            }]
          }, {
            "name": "Ciudad 1.2",
            "id": "0102",
            "dep": [{
              "name": "Ciudad 1.2.1",
              "id": "010201"
            }, {
              "name": "Ciudad 1.2.2",
              "id": "010202"
            }]
          }]
        }, {
          "name": "Arequipa",
          "id": "04",
          "dep": [{
            "name": "Arequipa",
            "id": "0401",
            "dep": [{
              "name": "Arequipa",
              "id": "040101"
            }, {
              "name": "Cayma",
              "id": "040102"
            }, {
              "name": "Tiabaya",
              "id": "040103"
            }]
          }, {
            "name": "Camana",
            "id": "0402",
            "dep": [{
              "name": "Camana",
              "id": "040201"
            }, {
              "name": "Ocona",
              "id": "040202"
            }]
          }]
        }, {
          "name": "Lima",
          "id": "07",
          "dep": [{
            "name": "Lima",
            "id": "0701",
            "dep": [{
              "name": "Lima",
              "id": "070101"
            }, {
              "name": "San Isidro",
              "id": "070102"
            }]
          }, {
            "name": "Ciudad 3.2",
            "id": "0702",
            "dep": [{
              "name": "Ciudad 3.2.1",
              "id": "070201"
            }, {
              "name": "Ciudad 3.2.2",
              "id": "070202"
            }]
          }]
        }];

      }],
      bindings: {

      }
    });


  angular.element(mydoc).ready(function() {
    angular.bootstrap(mydoc, ['UbigeoApp']);
  });

})(window.document);