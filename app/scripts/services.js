var clientServices = angular.module('clientServices', ['ngResource']);
var root = "http://127.0.0.1:3000";

clientServices.factory('User', ['$resource', function($resource) {
  return $resource(root + '/users/:userId',
        {userId: '@id'},
        {create: {method:'POST', params:{}, isArray:false}});
}]);

clientServices.factory('Invite', ['$resource', function($resource) {
  return $resource(root + '/users/:userId/invites/:id',
        {userId: '@invite.user_id', id: '@id'},
        {create: {method:'POST', params:{}, isArray:false}});
}]);

clientServices.factory('Answer', ['$resource', function($resource) {
  return $resource(root + '/users/:userId/answers/:id',
        {userId: '@answer.user_id', id: '@answer.id'},
        {create: {method:'POST', params:{}, isArray:false}});
}]);