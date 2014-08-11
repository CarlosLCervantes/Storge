'use strict';

angular.module('clientApp')
  .controller('HomeCtrl', function ($scope, $rootScope, $http, $cookieStore, Answer) {
    $rootScope.section = "main";
    $scope.user_id = $cookieStore.get('user_id');
    $scope.selectOption = function(option) {
    	$scope.selectedOption = option;
    }
    $scope.nextQuestion = function() {
    	var url = $scope.serviceUrl + "/users/" + $scope.user_id + "/next_question"
    	$http({method: 'GET', url: url}).
	    	success(function(data, status, headers, config) {
	    		$scope.question = data;
	    	}).
	    	error(function(data, status, headers, config) {
	    		alert("Emergaerd Question")
	    	});
    }
    $scope.answer = function() {
    	if(!$scope.selectedOption) { return false; }
    	var answer = $scope.buildAnswer($scope.user_id, $scope.question, 
    		$scope.selectedOption);
    	$scope.saveAnswer(answer);
    }
    $scope.skip = function() {
    	var answer = $scope.buildAnswer($scope.user_id, $scope.question, null);
    	$scope.saveAnswer(answer);
    }
    $scope.saveAnswer = function(answer) {
    	Answer.create(answer, 
    		function(data, status, headers, config) {
	    		$scope.question = data;
	    	},
	    	function(data, status, headers, config) {
	    		alert("Emergaerd Answer")
	    	}
	    );
    }
    $scope.buildAnswer = function(uid, q, o) {
    	var skip = (o == null)
    	var option_id = skip ? null : o.question_id;
    	return {answer: 
    		{
    			user_id: uid,
    			question_id: q.id,
    			option_id: option_id,
    			skipped: skip
    		}
    	}
    }
    $scope.nextQuestion();
  });
