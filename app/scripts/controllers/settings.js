'use strict';

angular.module('clientApp')
.controller('SettingsCtrl', function ($scope, $rootScope, $http, $location, $cookieStore) {
  $rootScope.section = "main";
  $scope.logout = function() {
  	$cookieStore.remove("user_id");
  	$rootScope.section = "";
  	$location.path("/start");
  }
});