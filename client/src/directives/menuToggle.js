/**
 * Created by Mikhail on 3/9/2017.
 */

    angular.module('uiMaterial')
        .directive('menuToggle',['$mdUtil', '$$rAF', '$animateCss', function($mdUtil, $$rAF, $animateCss) {

        return {
            scope: {
                section: '='
            },
            templateUrl: 'client/src/templates/menu-toggle.tmpl.html',
            link: function($scope, $element) {

                var controller = $element.parent().controller();

                // Used for toggling the visibility of the accordion's content, after
                // all of the animations are completed. This prevents users from being
                // allowed to tab through to the hidden content.
                $scope.renderContent = false;

                $scope.isOpen = function() {
                    return controller.isOpen($scope.section);
                };

                $scope.toggle = function() {
/*
                    var $ul = $element.find('ul');
                    var isOpen = $ul.attr('isOpen');
                    if(isOpen === 'true'){
                        $ul.css('height',0).css('visibility','hidden');
                        $ul.attr('isOpen', 'false');
                    }else{
                        var liarr = $ul.find('li');
                        var hgt = liarr.length * liarr[0].clientHeight;
                        $ul.css('height',hgt + 'px').css('visibility','visible');
                        $ul.attr('isOpen', 'true');
                    }
*/
                    controller.toggleOpen($scope.section);
                };

                $mdUtil.nextTick(function() {
                    $scope.$watch(function () {
                        return controller.isOpen($scope.section);
                    }, function (open) {
                        var $ul = $element.find('ul');
                        var $li = $ul[0].querySelector('a.active');

                        if (open) {
                            $scope.renderContent = true;
                        }

                        $$rAF(function() {
                            var targetHeight = open ? $ul[0].scrollHeight : 0;

                            $animateCss($ul, {
                                easing: 'cubic-bezier(0.35, 0, 0.25, 1)',
                                to: { height: targetHeight + 'px' },
                                duration: 0.75 // seconds
                            }).start().then(function() {
                                var $li = $ul[0].querySelector('a.active');

                                $scope.renderContent = open;

                                if (open && $li && $ul[0].scrollTop === 0) {
                                    var activeHeight = $li.scrollHeight;
                                    var activeOffset = $li.offsetTop;
                                    var offsetParent = $li.offsetParent;
                                    var parentScrollPosition = offsetParent ? offsetParent.offsetTop : 0;

                                    // Reduce it a bit (2 list items' height worth) so it doesn't touch the nav
                                    var negativeOffset = activeHeight * 2;
                                    var newScrollTop = activeOffset + parentScrollPosition - negativeOffset;

                                    $mdUtil.animateScrollTo(document.querySelector('.docs-menu').parentNode, newScrollTop);
                                }
                            });
                        });
                    });
                });

                var parentNode = $element[0].parentNode.parentNode.parentNode;
                if(parentNode.classList.contains('parent-list-item')) {
                    var heading = parentNode.querySelector('h2');
                    $element[0].firstChild.setAttribute('aria-describedby', heading.id);
                }
            }
    }
}]);
