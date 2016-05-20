angular.module('ngTableTutorial', [ 'ngTable' ]).controller('tableController',
		function($scope, $filter, ngTableParams) {

			$scope.users = [ {
				"id" : 1,
				"first_name" : "Philip",
				"last_name" : "Kim",
				"email" : "pkim0@mediafire.com",
				"country" : "Indonesia",
				"ip_address" : "29.107.35.8"
			}, {
				"id" : 2,
				"first_name" : "Judith",
				"last_name" : "Austin",
				"email" : "jaustin1@mapquest.com",
				"country" : "China",
				"ip_address" : "173.65.94.30"
			}, {
				"id" : 3,
				"first_name" : "Julie",
				"last_name" : "Wells",
				"email" : "jwells2@illinois.edu",
				"country" : "Finland",
				"ip_address" : "9.100.80.145"
			}, {
				"id" : 4,
				"first_name" : "Gloria",
				"last_name" : "Greene",
				"email" : "ggreene3@blogs.com",
				"country" : "Indonesia",
				"ip_address" : "69.115.85.157"
			}, {
				"id" : 5,
				"first_name" : "Jose",
				"last_name" : "Diaz",
				"email" : "jamdiazdiaz@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.1"
			}, {
				"id" : 6,
				"first_name" : "Miryan",
				"last_name" : "Ramirez",
				"email" : "miryan.ramirez@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.2"
			}, {
				"id" : 7,
				"first_name" : "Elias",
				"last_name" : "Diaz Ramirez",
				"email" : "elias@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.3"
			}, {
				"id" : 8,
				"first_name" : "Felipe",
				"last_name" : "Diaz Ramirez",
				"email" : "felipe@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 9,
				"first_name" : "Deborah",
				"last_name" : "Diaz Ramirez",
				"email" : "deborah@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 10,
				"first_name" : "Liam",
				"last_name" : "Diaz Ramirez",
				"email" : "liam@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 11,
				"first_name" : "Maria",
				"last_name" : "Diaz Ramirez",
				"email" : "maria@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 12,
				"first_name" : "Daniel",
				"last_name" : "Diaz Ramirez",
				"email" : "daniel@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 13,
				"first_name" : "Catalina",
				"last_name" : "Catalina Ramirez",
				"email" : "catalina@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 14,
				"first_name" : "Paco",
				"last_name" : "Diaz Ramirez",
				"email" : "paco@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 15,
				"first_name" : "Carlos",
				"last_name" : "Diaz Ramirez",
				"email" : "elias@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.5"
			}, {
				"id" : 16,
				"first_name" : "Felton",
				"last_name" : "Silva",
				"email" : "felton@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 17,
				"first_name" : "Rale",
				"last_name" : "Chung",
				"email" : "rale@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 18,
				"first_name" : "Luis",
				"last_name" : "Palomino",
				"email" : "luis@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 19,
				"first_name" : "Fausto",
				"last_name" : "Cardenas",
				"email" : "fausto@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.4"
			}, {
				"id" : 20,
				"first_name" : "Ernesto",
				"last_name" : "Cabana",
				"email" : "ernesto@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.5"
			}, {
				"id" : 21,
				"first_name" : "Estanislao",
				"last_name" : "Contreras",
				"email" : "estanislao@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.6"
			}, {
				"id" : 22,
				"first_name" : "Marco",
				"last_name" : "Munives",
				"email" : "marco@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.7"
			}, {
				"id" : 23,
				"first_name" : "Luis",
				"last_name" : "Diaz Ramirez",
				"email" : "luis@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.8"
			}, {
				"id" : 24,
				"first_name" : "Esteban",
				"last_name" : "Diaz Ramirez",
				"email" : "esteban@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.9"
			}, {
				"id" : 25,
				"first_name" : "Armando",
				"last_name" : "Diaz Ramirez",
				"email" : "armando@blogs.com",
				"country" : "Peru",
				"ip_address" : "192.168.1.10"
			}, {				
				
				"id" : 26,
				"first_name" : "Raquel",
				"last_name" : "Ramirez",
				"email" : "raquel@fda.gov",
				"country" : "Peru",
				"ip_address" : "128.72.13.45"
			} ];

			
			$scope.usersTable = new ngTableParams({
                page: 1,
                count: 10
            }, {
                total: $scope.users.length, 
                getData: function ($defer, params) {
                    $scope.data = $scope.users.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    $defer.resolve($scope.data);
                }
            });			
			
		});
