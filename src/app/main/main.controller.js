'use strict';
angular.module('ryanair').controller('MainCtrl', MainCtrl);

MainCtrl.inject = ['$scope', 'connectionSvc'];
function MainCtrl($scope, connectionSvc) {

    $scope.airports = [];
    $scope.departure;
    $scope.destination;

    connectionSvc.getAirports().then(function(response){
        $scope.airports = response;
        console.log(response)
    }, function(err) {
        console.log('ERROR', err);
    });
}
