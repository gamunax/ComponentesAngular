!(function() {
  var toolBoxModule = angular.module('toolModule', [])
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]).factory('captchaFactory', ['$http', '$q', function($http, $q) {
      var vm = this,
        deferred = $q.defer(),
        headers = {
          'Accept': 'application/javascript'
        };

      function validateCaptcha(info) {

        $http.jsonp('https://www.google.com/recaptcha/api/siteverify?callback=JSON_CALLBACK', {
            'params': info,
            'headers': headers
          })
          .success(function(data, status, headers, config) {
            deferred.resolve(data);
          })
          .error(function(data, status, header, config) {
            deferred.reject(data);
          });
        return deferred.promise;
      }

      return {
        validateCaptcha: validateCaptcha
      }
    }])
  return toolBoxModule;
})()