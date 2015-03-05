'use strict';
angular.module('ryanair')
    .value('eventsList', getEventsList())
    .factory('events', eventsFactory);

function getEventsList() {
    return {
        'searcher': {
            'GOT_RESULTS': 'GOT_RESULTS'
        }
    }
}

eventsFactory.$inject = ['$rootScope', 'eventsList'];
function eventsFactory($rootScope, eventsList) {

    var events = angular.copy(eventsList);
    events.$emit = function () {
        $rootScope.$emit.apply($rootScope, arguments);
    };

    events.$broadcast = function () {
        $rootScope.$broadcast.apply($rootScope, arguments);
    };

    events.$on = function () {
        return $rootScope.$on.apply($rootScope, arguments);
    };

    events.$clear = function (name) {
        $rootScope.$$listeners[name].length = 0;
    };

    return events;
}
