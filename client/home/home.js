angular.module('myApp')
.controller('HomeController', ['$scope', function($scope){
  $scope.items = ["A", "List", "Of", "Items"];
}])