angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('app', {
    url: '/',
    templateUrl: './index.html',
    views: {
      'app.landing' : {
        abstract: true,
        templateUrl: './app/content/content.html'
      }
    }
  })
})