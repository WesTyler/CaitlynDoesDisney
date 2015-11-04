angular.module('myApp')
.controller('WorkflowController', ['$scope', '$http', function($scope, $http){
  $scope.columns = {};
  $scope.cards = [];

  $scope.getColumns = function() {
    $http.get('/columns')
    .then(function(response) {
      $scope.columns = response.data;
    });
  };

  $scope.getCards = function() {
    Object.keys($scope.columns).forEach(function(column) {
      $scope.columns[column].cards = [];
    });
    $http.get('/cards')
    .then(function(response) {
      response.data.forEach(function(card) {
        console.log('Card: ', card)
        $scope.columns[card.column].cards.push(card);
      });
    });
  };

  $scope.saveBoard = function() {
    $http.post('board', {
      columns: $scope.columns,
      cards  : $scope.cards
    })
    .then($scope.confirmSave);
  };

  $scope.confirmSave = function() {
    alert('Board Saved Successfully!');
  };

  $scope.getColumns();
}])