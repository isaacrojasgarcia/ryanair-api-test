'use strict';
angular.module('ryanair').controller('MainCtrl', MainCtrl);

MainCtrl.inject = ['$scope', 'connectionSvc'];
function MainCtrl($scope, connectionSvc) {
    //
    console.log(connectionSvc);
    connectionSvc.getAirports().then(function(response){
        console.log(response);
    });
}
