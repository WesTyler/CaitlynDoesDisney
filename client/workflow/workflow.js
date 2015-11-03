angular.module('myApp')
.controller('WorkflowController', ['$scope', function($scope){
  $scope.columns = {'quoteRequested': {label: 'Quote Requested', cards: []}, 'quoteSent': {label: 'Quote Sent', cards: []}};
  $scope.cards = [{name: 'Tyler Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids: 0, column: 'quoteRequested'}];
  $scope.cards.forEach(function(card) {
    console.log(card.column, $scope.columns[card.column])
    $scope.columns[card.column].cards.push(card);
  })
  console.log('ctrl loaded')
}])