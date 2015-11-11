angular.module('myApp')

.service('DataService', [function(){
  var context = this;
  context.data = {};

  context.setData = function(dataObject) {
    context.data = dataObject;
  };

  context.getData = function() {
    return context.data;
  };
}])