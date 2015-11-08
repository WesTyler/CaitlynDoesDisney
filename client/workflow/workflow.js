angular.module('myApp')
.controller('WorkflowController', ['$scope', '$http', function($scope, $http){
  $scope.columns = {};
  $scope.droppedColumn = '';

  $scope.moveCard = function(column, card, index) {
    column.cards.splice(index, 1);
    $scope.droppedColumn = '';
  };

  $scope.updatePosition = function(column){
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
        $scope.columns[card.column].cards.push(card);
      });
    });
  };

  $scope.saveBoard = function() {
    $http.post('board', {
      columns: $scope.columns,
    })
    .then($scope.confirmSave);
  };

  $scope.confirmSave = function() {
    alert('Board Saved Successfully!');
  };

  $scope.getColumns();
}])