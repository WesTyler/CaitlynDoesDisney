angular.module('myApp')
.controller('WorkflowController', ['$scope', '$http', function($scope, $http){
  $scope.columns = {};
  $scope.cards = [];
  $scope.droppedColumn = '';

  $scope.moveCard = function(column, card, index) {
    console.log('From:', column.label);
    console.log('Initial index:', index);
    console.log('Family', card.name, 'in', card.column);
    column.cards.splice(index, 1);
    console.log('Scope Dropped', $scope.droppedColumn)
    card.column = $scope.droppedColumn;
    $scope.droppedColumn = '';
    console.log('Family', card.name, 'in', card.column);
  };

  $scope.updatePosition = function(column){
    console.log('To:', column.label);
    $scope.droppedColumn = column.label;
  };

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
        // console.log('Card: ', card)
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