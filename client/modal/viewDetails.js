angular.module('myApp')
.controller('ViewDetailsController', ['DataService', '$scope', '$http', '$state', function(DataService, $scope, $http, $state){
  $scope.card = DataService.getData();

  $scope.saveAndExit = function() {
    DataService.setData($scope.card);
    $state.go('workflow', DataService.getData());
  }  
}]);