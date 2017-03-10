/**
 * Created by Mikhail on 3/10/2017.
 */
angular.module('common')
    .filter('nospace', function () {
        return function (value) {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    });
