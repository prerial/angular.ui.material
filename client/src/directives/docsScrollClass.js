/**
 * Created by Mikhail on 3/10/2017.
 */
angular.module('common')
    /** Directive which applies a specified class to the element when being scrolled */
    .directive('docsScrollClass', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {

                var scrollParent = element.parent();
                var isScrolling = false;

                // Initial update of the state.
                updateState();

                // Register a scroll listener, which updates the state.
                scrollParent.on('scroll', updateState);

                function updateState() {
                    var newState = scrollParent[0].scrollTop !== 0;

                    if (newState !== isScrolling) {
                        element.toggleClass(attr.docsScrollClass, newState);
                    }

                    isScrolling = newState;
                }
            }
        };
    });
