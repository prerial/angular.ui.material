/**
 * Created by Mikhail on 3/10/2017.
 */
angular.module('common')
    .filter('humanizeDoc', function() {
        return function(doc) {
            if (!doc) return;
            if (doc.type === 'directive') {
                return doc.name.replace(/([A-Z])/g, function($1) {
                    return '-'+$1.toLowerCase();
                });
            }
            return doc.label || doc.name;
        };
    });
