'use strict';

angular.module('clientApp')
  .controller('InviteCtrl', function ($scope, $location, $rootScope) {
    $rootScope.section = "signup";
    $scope.submit = function() {
      $location.path("/home");
    }
  });
