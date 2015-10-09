var app = angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('/', {
    url: '/',
    templateUrl: __dirname + '/app/nav/nav.html'
  })
})