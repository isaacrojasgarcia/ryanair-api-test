'use strict';
angular.module('ryanair').directive('raFooter', FooterDirective);

function FooterDirective() {
    return {
        type: 'E',
        templateUrl: 'components/footer/footer.html'
    }
}
