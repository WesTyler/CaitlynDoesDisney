var myApp = angular.module('myApp', ['ui.router'])
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about/about.html',
      controller: 'AboutController'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'contact/contact.html',
      controller: 'ContactController'
    })
    .state('workflow', {
      url: '/workflow',
      templateUrl: 'workflow/workflow.html',
      controller: 'WorkflowController'
    })
})