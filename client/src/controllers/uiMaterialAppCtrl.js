/**
 * Created by Mikhail on 1/2/2017.
 */
(function() {
    'use strict';

    angular.module('uiMaterial').controller("uiMaterialAppCtrl",
        function ($scope, $http, $location, Navigation){
            $scope.data = {};
            $scope.menu = Navigation;
        });

})();