'use strict';

angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $location, $rootScope, User) {
    $rootScope.section = "signup";
    $scope.user = null;
    $scope.login = function() {
      var url = $rootScope.serviceUrl + "/session";
      data = {email: $scope.user.email, password: $scope.user.password};
      $http({method: 'POST', url: url, data: data}).
        success(function(data, status, headers, config) {
          //TODO: Make sure this works
          $rootScope.setCurrentUser(data.id);
          $location.path("/home");
        }).
        error(function(data, status, headers, config) {
          alert("Issue Logging In");
        });
    }
  });
