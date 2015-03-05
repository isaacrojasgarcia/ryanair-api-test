'use strict';
angular.module('ryanair').directive('raSearchResult', SearchResultDirective);

function SearchResultDirective() {
    return {
        controller: searchResultCtrl,
        templateUrl: 'app/searchResult/searchResult.html'
    }
}

searchResultCtrl.inject = ['$scope', '$filter', 'connectionSvc', 'events'];
function searchResultCtrl($scope, $filter, connectionSvc, events) {
    var orderBy = $filter('orderBy');
    var deregister = [];

    $scope.resuts = [];

    deregister.push(events.$on(events.searcher.GOT_RESULTS, function(event, response) {
        // console.log('listening on search result', response);
        $scope.results = _.sortBy(response.flights, 'outbound.price.value');
        console.log('listening on search result', $scope.results);
        $scope.qty = response.count;
    }));
}
