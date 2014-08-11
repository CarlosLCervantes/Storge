'use strict';

angular
  .module('clientApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'clientServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/start', {
        templateUrl: 'views/start.html',
        controller: 'StartCtrl'
      })
      .when('/invite', {
        templateUrl: 'views/invite.html',
        controller: 'InviteCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/start'
      });
  })
  .run(function ($cookieStore, $rootScope, $location) {
    $rootScope.serviceUrl = "http://127.0.0.1:3000";
    $rootScope.setCurrentUser = function(user_id) {
      $cookieStore.put('user_id', user_id);
    }
    $rootScope.getCurrentUser = function(cookie_store) {
      $cookieStore.get('user_id');
    }
    if($cookieStore.get('user_id') != null) {
      $location.path("/home");
    }
  });
