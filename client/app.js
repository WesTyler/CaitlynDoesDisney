var myApp = angular.module('myApp', ['ui.router'])
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home/home.html"
    })
    .state('home.list', {
      url: "/list",
      templateUrl: "home/home.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
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
    .state('state3', {
      url: "/state3",
      templateUrl: "partials/state3.html"
    })
    .state('state3.list', {
      url: "/list",
      templateUrl: "partials/state3.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Third", "Set", "Of", "Things"];
      }
    });
})