angular.module('myApp')
.controller('DrawingController', ['$scope', '$http', '$state', function($scope, $http, $state){
  $scope.personToAdd = {
    name: ''
  };
  $scope.people = [];
  $scope.entries = [];
  $scope.winner = {};
  $scope.results = {};

  $scope.addPerson = function() {
    $scope.people.push({
      name: $scope.personToAdd.name,
      entries: 1
    });
    $scope.personToAdd.name = '';
  };

  $scope.addEntry = function() {
    this.person.entries++;

  };

  $scope.drawWinner = function() {
    $scope.results = {};
    $scope.winner = {};

    $scope.people.forEach(function(person) {
      for (var i=0; i<person.entries; i++) {
        var entryName = i === 0 ? person.name : person.name + i;

        $scope.entries.push(entryName);
      }
    });

    for (var i=0; i<500000; i++) {
      var index = Math.floor(Math.random()*$scope.entries.length);
      $scope.results[$scope.entries[index]] = $scope.results[$scope.entries[index]] + 1 || 1;
    };

    var max = 0;
    var peopleDrawn = Object.keys($scope.results);

    for (var i=0; i<peopleDrawn.length; i++) {
      var person = peopleDrawn[i];

      if($scope.results[person] > max) {
        max = $scope.results[person];
        $scope.winner = {};
        $scope.winner[person] = max;
        $scope.winner.name = person;
      }
    }
  };
}]);