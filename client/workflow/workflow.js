angular.module('myApp')
.controller('WorkflowController', ['DataService', '$scope', '$http', '$state', function(DataService, $scope, $http, $state){
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

  $scope.viewDetails = function(card) {
    DataService.setData(card);
    $state.go("workflow.modal.viewDetails")
  };

  $scope.addNewCard = function() {
    console.log('add new card')
    var firstColumn = Object.keys($scope.columns)[0];
    $scope.columns[firstColumn].cards.push({
      name: 'New Family'
    })
  }

  $scope.$on('CardUpdated', $scope.saveBoard);

  $scope.getColumns();
}]);