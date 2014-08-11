'use strict';

angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, $location, $rootScope, User) {
    $rootScope.section = "signup";
    $scope.user = null;
    $scope.submit = function() {
    	User.create({user: $scope.user}, 
    		function(data) {
    			$scope.setCurrentUser(data.id);
    			var user_id = $scope.getCurrentUser;
    			alert("Something Good Happened");
    			$location.path("/invite");
    		},
    		function(a, b, c) {
    			alert("Something Bad Happened")
    		}
    	);
    }
  });
