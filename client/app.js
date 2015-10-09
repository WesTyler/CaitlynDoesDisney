var myApp = angular.module('myApp', ['ui.router'])
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
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