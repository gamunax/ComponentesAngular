       var randoms = [
            'success',
            'warning',
            'danger',
            'info',
            'default'
        ];
        var testApp = angular.module('testApp', [
            'ui.bootstrap',
            'ngAlerts'
        ]);
        
        testApp.config(['ngAlertsProvider', function (ngAlertsProvider) {
            ngAlertsProvider.options.emptyListText = 'Nothing here...';
            ngAlertsProvider.options.queueTimeout = 5000;
            // ngAlertsProvider.options.queue = false;
        }]);
        
        testApp.controller('TestCtrl', ['$scope', 'ngAlertsMngr', function ($scope, ngAlertsMngr) {
            $scope.createAlert = function () {
                var type = randoms[Math.round(Math.random() * (randoms.length - 1))];
                
                
                ngAlertsMngr.add({
                    msg: 'Adding a "' + type + '" alert.',
                    type: type,
                    time: Date.now() - Math.round(Math.random() * 10000000000)
                });
            };
        }]);
        
        testApp.controller('TestPopover', function ($scope) {
            $scope.templateUrl = 'myPopoverTemplate.html';
        });
        