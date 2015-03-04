'use strict';
angular.module('ryanair').controller('MainCtrl', MainCtrl);

MainCtrl.inject = ['$scope', 'connectionSvc'];
function MainCtrl($scope, connectionSvc) {

    $scope.airportsData = [];
    $scope.airports = {};
    $scope.dates = {
        today: moment().format('MM/DD/YYYY'),
        depart: null,
        return: null
    }

    $scope.updateMinimumReturn = function(obj) {
        $scope.dates.depart = moment(new Date(obj.select)).format('MM/DD/YYYY');
    };

    $scope.onSubmit = function() {
        console.log($scope.dates);
    };

    connectionSvc.getAirports().then(function(response){
        $scope.airportsData = response;
    }, function(err) {
        console.log('ERROR', err);
    });
}
