angular.module('myApp')
.controller('ViewDetailsController', ['DataService', '$scope', '$rootScope', '$state', function(DataService, $scope, $rootScope, $state){
  $scope.card = DataService.getData();

  $scope.saveAndExit = function() {
    DataService.setData($scope.card);
    $rootScope.$broadcast('CardUpdated');
    $state.go('workflow');
  }  
}]);