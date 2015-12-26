angular.module('myApp')
.controller('DrawingController', ['$scope', '$http', '$state', function($scope, $http, $state){
  $scope.person = {
    name: '',
    number: 0
  };
  $scope.people = [];
  $scope.winner = {};
  $scope.results = {};

  $scope.addPerson = function() {
    var name = $scope.person.name;
    var numberOfEntries = $scope.person.number || 1;

    for (var i=0; i<numberOfEntries; i++) {
      var entryName = i === 0 ? name : name + i;
      $scope.people.push(entryName);
    }

    console.log('added person', entryName);
  };

  $scope.drawWinner = function() {
    console.log($scope.people);
    $scope.results = {};

    for (var i=0; i<1000000; i++) {
      var index = Math.floor(Math.random()*$scope.people.length);
      $scope.results[$scope.people[index]] = $scope.results[$scope.people[index]] + 1 || 1;
    };

    var max = 0;
    var peopleDrawn = Object.keys($scope.results);

    for (var i=0; i<peopleDrawn.length; i++) {
      var person = peopleDrawn[i];

      if($scope.results[person] > max) {
        max = $scope.results[person];
        $scope.winner = {};
        $scope.winner[person] = max;
      }
    }

    console.log($scope.winner);
  };
}]);