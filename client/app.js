var myApp = angular.module('myApp', ['ui.router'])
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home/home.html",
      controller: 'HomeController'
    })
    .state('home.list', {
      url: "/list",
      templateUrl: "home/home.list.html",
    })
    .state('about', {
      url: "/about",
      templateUrl: "about/about.html"
    })
    .state('about.list', {
      url: "/list",
      templateUrl: "about/about.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Second", "Set", "Of", "Things"];
      }
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "contact/contact.html"
    })
    .state('contact.list', {
      url: "/list",
      templateUrl: "contact/contact.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Third", "Set", "Of", "Things"];
      }
    });
})