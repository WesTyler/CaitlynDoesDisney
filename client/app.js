angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('app', {
    url: '/',
    templateUrl: './index.html',
    views: {
      'app.nav': {
        abstract: true,
        templateUrl: './app/nav/nav.html',
        controller: 'NavController'
      }
    }
  })
})