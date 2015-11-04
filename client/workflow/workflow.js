angular.module('myApp')
.controller('WorkflowController', ['$scope', '$http', function($scope, $http){
  $scope.columns = {'quoteRequested': {label: 'Quote Requested', cards: []}, 'quoteSent': {label: 'Quote Sent', cards: []}, 'depositPaid': {label: 'Deposit Paid', cards: []}};
  $scope.cards = [{name: 'Tyler Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids: 0, column: 'depositPaid'}, {name: 'Redfearn Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids: 0, column: 'quoteSent'}];
  $scope.cards.forEach(function(card) {
    $scope.columns[card.column].cards.push(card);
  })

  $scope.getColumns = function() {
    console.log('*** workflow.js: Getting Columns ***');
    $http({
      method: 'GET',
      url: '/columns'
    })
    .then(function(response) {
      $scope.columns = response;
    });
  };

  $scope.getCards = function() {
    console.log('*** workflow.js: Getting Cards ***');
    $http({
      method: 'GET',
      url: '/cards'
    })
    .then(function(response) {
      $scope.cards = response;
    });
  };
}])