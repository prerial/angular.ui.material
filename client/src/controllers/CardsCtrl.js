/**
 * Created by Mikhail on 3/9/2017.
 */
angular.module('uiMaterial').controller('CardsCtrl', function($scope) {
        $scope.imagePath = 'img/washedout.png';
    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});