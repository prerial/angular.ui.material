/**
 * Created by Mikhail on 3/10/2017.
 */
angular.module('common')
    .filter('directiveBrackets', function() {
        return function(str, restrict) {
            if (restrict) {
                // If it is restricted to only attributes
                if (!restrict.element && restrict.attribute) {
                    return '[' + str + ']';
                }

                // If it is restricted to elements and isn't a service
                if (restrict.element && str.indexOf('-') > -1) {
                    return '<' + str + '>';
                }

                // TODO: Handle class/comment restrictions if we ever have any to document
            }

            // Just return the original string if we don't know what to do with it
            return str;
        };
    });

