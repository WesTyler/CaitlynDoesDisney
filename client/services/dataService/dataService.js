angular.module('myApp')

.service('DataService', ['$http', function($http){
  var context = this;
  context.data = {};

  context.setData = function(dataObject) {
    context.data = dataObject;
  };

  context.getData = function() {
    return context.data;
  };
}])