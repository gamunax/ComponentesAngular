var app= angular.module("MyApp", []);

app.controller('MyController', function($scope) {
    
    //$scope.data = ["one","two","three","four"];
    
    $scope.data = [
      {name:"one", children:0},
      {name:"two", children:1},
      {name:"three", children:2},
      {name:"four", children:-1}
    ];

});