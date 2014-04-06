'use strict';

angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, $location, $rootScope) {
    $rootScope.section = "signup";
    $scope.submit = function() {
      $location.path("/invite");
    }
  });
