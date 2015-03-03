'use strict';
angular.module('ryanair').factory('connectionSvc', ConnectionFactory);

ConnectionFactory.$inject = ['$resource', '$q']
function ConnectionFactory($resource, $q) {
    return {
        getAirports: getAirports
    };

    function makeCall(method) {
        var baseUrl = "https://ryanair-test.herokuapp.com/api/",
            deferred = $q.defer(),
            url = baseUrl + method;

        var Data = $resource(url)
        Data.get(url)
            .$promise.then(function(response) {
                console.log(response);
                deferred.resolve(response);
            });
            // .error(function(error) {
            //     console.log(error);
            //     deferred.reject(error);
            // });

        return deferred.promise;
    }

    function getAirports() {
        return makeCall('airports');
    }
}
