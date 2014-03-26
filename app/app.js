'use strict';

/* App Module */

var app = angular.module('storge', [
  'ngRoute', 
  'storgeControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/welcome', {
        templateUrl: './views/welcome.html',
        controller: 'WelcomeCtrl'
      }).
      when('/landing', {
        templateUrl: '/views/landing.html',
        controller: 'LandingCtrl'
      }).
      otherwise({
        redirectTo: '/welcome'
      });
  }]
);
