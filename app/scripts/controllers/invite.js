'use strict';

angular.module('clientApp')
  .controller('InviteCtrl', function ($scope, $location, $rootScope, $cookieStore, Invite) {
    $rootScope.section = "signup";
    $scope.submit = function() {
    	$scope.invite.user_id = $cookieStore.get('user_id');
    	Invite.create({invite: $scope.invite},
    		function(data) {
    			$location.path("/home");
    		},
    		function(data, status, headers, config) {
    			alert("Something Bad Happened");
    		}
    	);
    }
  });
