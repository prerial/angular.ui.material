/**
 * Created by Mikhail on 3/9/2017.
 */
angular.module('uiMaterial')
    .directive('menuLink', function() {
        return {
            scope: {
                section: '='
            },
            templateUrl: 'client/src/templates/menu-link.tmpl.html',
            link: function($scope, $element) {

                var controller = $element.parent().controller();

                $scope.isSelected = function() {
                        return controller.isSelected($scope.section);
                };

                $scope.focusSection = function() {
                    // set flag to be used later when
                    // $locationChangeSuccess calls openPage()
                        controller.autoFocusContent = true;
                };
            }
        };
    });
