'use strict';
angular.module('ryanair').directive('raSearcher', SearcherDirective);

function SearcherDirective() {
    return {
        link: searcherDirectiveLink,
        controller: searchDirectiveCtrl,
        templateUrl: 'app/searcher/searcher.html'
    }
}

function searcherDirectiveLink(scope, element, attrs) {
    element.find('form').on('submit', scope.onSubmit);
}

searchDirectiveCtrl.inject = ['$scope', 'connectionSvc', 'events'];
function searchDirectiveCtrl($scope, connectionSvc, events) {
    $scope.airportsData = [];
    $scope.results = {};

    $scope.destinations = {
        from: '',
        to: ''
    };

    $scope.dates = {
        today: moment().format('MM/DD/YYYY'),
        depart: null,
        return: null
    }


    $scope.updateMinimumReturn = function(obj) {
        $scope.dates.depart = moment(new Date(obj.select)).format('MM/DD/YYYY');
    };

    $scope.onSubmit = function() {
        var data = {
            from: $scope.destinations.from.originalObject.iataCode,
            to: $scope.destinations.to.originalObject.iataCode,
            start: moment($scope.dates.depart, 'MM/DD/YYYY').format('YYYY-MM-DD'),
            end: moment($scope.dates.return, 'MM/DD/YYYY').format('YYYY-MM-DD'),
            maxPrice: 200
        };

        connectionSvc.getCheapFlights(data).then(function(response) {
            // $scope.results = response;
            console.log(response);
            events.$emit(events.searcher.GOT_RESULTS, response);
        });
    };

    connectionSvc.getAirports().then(function(response){
        console.log(response);
        $scope.airportsData = response;
    }, function(err) {
        console.log('ERROR', err);
    });

}
