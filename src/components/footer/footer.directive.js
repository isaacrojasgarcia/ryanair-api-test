'use strict';
angular.module('ryanair').directive('raFooter', FooterDirective);

function FooterDirective() {
    return {
        templateUrl: 'components/footer/footer.html'
    }
}
