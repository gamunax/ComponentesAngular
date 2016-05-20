!(function(mydoc) {
  'use strict';

  var sunatModule = angular.module('SunatApp', ['ngRoute', 'ngAnimate', 'noCAPTCHA', 'barcode', 'ja.qr',
      'toolModule', 'ui.tree', 'ui.bootstrap'
    ])
    .config(['noCAPTCHAProvider',
      function(noCaptchaProvider) {

        //Captcha
        noCaptchaProvider.setSiteKey('6LcRsR8TAAAAAPzn0i3RuUVE4pKIakGbySugZapi');
        noCaptchaProvider.setTheme('light');

    
      }
    ])
    .controller('captchaCtrl', ['$scope', 'captchaFactory', function($scope, captchaFactory) {
      var vm = this;
      vm.gRecaptchaResponse = undefined;
      vm.goAhead = false;
      $scope.$watch(
        function() {
          return vm.gRecaptchaResponse
        },
        function(newValue, oldValue) {
          vm.expired = false;
          if (newValue !== oldValue) {
            var info = {
              secret: '6LcRsR8TAAAAAP2nvqQ8tBWsd6sb7YCpvmZfN4QP',
              response: vm.gRecaptchaResponse
            };
            captchaFactory.validateCaptcha(info).then(function(data) {
              console.dir(data);
              vm.goAhead = true;
            });
          }
        }

      );

      vm.expiredCallback = function expiredCallback() {
        vm.expired = true;
      };

    }]);
  
  

  angular.element(mydoc).ready(function() {
    angular.bootstrap(mydoc, ['SunatApp']);
  });

})(window.document);

