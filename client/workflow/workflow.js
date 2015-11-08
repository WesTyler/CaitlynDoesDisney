angular.module('myApp')
.controller('WorkflowController', ['$scope', '$http', function($scope, $http){
  $scope.columns = {};
  $scope.droppedColumn = '';
  $scope.filter = '';

  $scope.moveCard = function(column, card, index) {
    column.cards.splice(index, 1);
    $scope.saveBoard();
  };

  $scope.getColumns = function() {
    $http.get('/columns')
    .then(function(response) {
      $scope.columns = response.data;
    });
  };

  $scope.saveBoard = function() {
    $http.post('board', {
      columns: $scope.columns,
    })
    .catch(function() {
      alert('Something went wrong...')
    });
  };

  $scope.getColumns();
}])