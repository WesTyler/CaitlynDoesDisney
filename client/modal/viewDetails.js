angular.module('myApp')
.controller('ViewDetailsController', ['DataService', '$scope', '$rootScope', '$state', function(DataService, $scope, $rootScope, $state){
  $scope.card = DataService.getData();
  $scope.edit = {};

  $scope.saveAndExit = function() {
    DataService.setData($scope.card);
    $rootScope.$broadcast('CardUpdated');
    $state.go('workflow');
  };

  $scope.editField = function(fieldName, subField) {
    $scope.edit[fieldName] = true;
    if (subField) {
      $scope.edit[fieldName] = {};
      $scope.edit[fieldName][subField] = true;
    }
  };

  $scope.saveField = function(fieldName) {
    console.log('*** \n', fieldName, subfield)
    delete $scope.edit[fieldName];
  };
}]);