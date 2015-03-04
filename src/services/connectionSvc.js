'use strict';
angular.module('ryanair').factory('connectionSvc', ConnectionFactory);

ConnectionFactory.$inject = ['$http', '$q']
function ConnectionFactory($http, $q) {
    return {
        getAirports: getAirports
    };

    function makeCall(method) {
        var baseUrl = "http://localhost:9002/api/",
            deferred = $q.defer(),
            url = baseUrl + method;

        $http.get(url)
            .success(function(response) {
                // console.log(response);
                deferred.resolve(response);
            })
            .error(function(error) {
                console.log(error);
                deferred.reject(error);
            });

        return deferred.promise;
    }

    function getAirports() {
        return makeCall('airports');
    }
}
