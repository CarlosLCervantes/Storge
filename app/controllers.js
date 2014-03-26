'use strict';

/* Controllers */

var storgeControllers = angular.module('storgeControllers', []);

storgeControllers.controller('WelcomeCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.orderProp = 'age';
  }]
);

// phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
//   function($scope, $routeParams, $http) {
//     $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
//       $scope.phone = data;
//     });
//   }]);