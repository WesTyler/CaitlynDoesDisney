angular.module('myApp')
.controller('ViewDetailsController', ['DataService', '$scope', '$rootScope', '$state', function(DataService, $scope, $rootScope, $state){
  $scope.card = DataService.getData();
  $scope.edit = false;

  $scope.saveAndExit = function() {
    DataService.setData($scope.card);
    $rootScope.$broadcast('CardUpdated');
    $state.go('workflow');
  };

  $scope.editField = function() {
    $scope.edit = true;
  };

  $scope.saveField = function() {
    $scope.edit = false;
  };
}]);