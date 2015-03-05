'use strict';
angular.module('ryanair').directive('raSearchResult', SearchResultDirective);

function SearchResultDirective() {
    return {
        controller: searchResultCtrl,
        templateUrl: 'app/searchResult/searchResult.html'
    }
}

searchResultCtrl.inject = ['$scope', 'connectionSvc', 'events'];
function searchResultCtrl($scope, connectionSvc, events) {
    $scope.resuts = [];


    var deregister = [];
    deregister.push(events.$on(events.searcher.GOT_RESULTS, function(event, response) {
        // console.log('listening on search result', response);
        $scope.results = response;
    }));
}
