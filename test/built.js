/**
 * Created by Mikhail on 1/12/2016.
 */
(function() {
    'use strict';

    angular.module('common') .constant('Navigation',

    {
        'Home': {
        route: '/home',
            config: {controller: 'uiMaterialAppCtrl', template:'<h2 class="examples-pane">Controllers Home</h2>'}
    },
        'Autocomplete':
        {
            route: '/autocomplete',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/autocomplete.html'}
        },
        'BottomSheet':
        {
            route: '/bottom-sheet',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/bottomsheet.html'}
        },
        'ViewportResizer':
        {
            route: '/viewport-resizer',
                config: {controller: 'viewPortResizeCtrl', templateUrl:'partials/viewport-resizer.html'}
        },
        'Notifications':
        {
            route: '/notifications',
                config: {controller: 'notificationsCtrl', templateUrl:'partials/notifications.html'}
        },
        'Combobox':
        {
            route: '/combobox',
                config: {controller: 'comboboxCtrl', templateUrl:'partials/combobox.html'}
        },
        'Tooltip':
        {
            route: '/tooltip',
                config: {controller: 'tooltipCtrl', templateUrl:'partials/tooltip.html'}
        },
        'Typeahead':
        {
            route: '/typeahead',
                config: {controller: 'typeaheadCtrl', templateUrl:'partials/typeahead.html'}
        },
        'GridTag':
        {
            route: '/gridtag',
                config: {controller: 'gridtagCtrl', templateUrl:'partials/gridtag.html'}
        },
        'Buttons':
        {
            route: '/buttons',
                config: {controller: 'ButtonsCtrl', templateUrl:'partials/buttons.html'}
        },
        'Form':
        {
            route: '/form',
                config: {controller: 'FormCtrl', templateUrl:'partials/form.html'}
        },
        'Form1':
        {
            route: '/form1',
                config: {controller: 'Form1Ctrl', templateUrl:'partials/form/form1.html'}
        },
        'Form2':
        {
            route: '/form2',
                config: {controller: 'Form2Ctrl', templateUrl:'partials/form/form2.html'}
        },
        'Accordion':
        {
            route: '/accordion',
                config: {controller: 'AccordionCtrl', templateUrl:'partials/accordion.html'}
        },
        'Tabs':
        {
            route: '/tabs',
                config: {controller: 'TabsCtrl', templateUrl:'partials/tabs.html'}
        },
        'ContextMenu':
        {
            route: '/context-menu',
                config: {controller: 'ContextMenuCtrl', templateUrl:'partials/context-menu.html'}
        },
        'Switch':
        {
            route: '/switch',
                config: {controller: 'SwitchCtrl', templateUrl:'partials/switch.html'}
        },
        'Badge':
        {
            route: '/badge',
                config: {controller: 'BadgeCtrl', templateUrl:'partials/badge.html'}
        },
        'Icons':
        {
            route: '/icons',
                config: {controller: 'IconsCtrl', templateUrl:'partials/icons.html'}
        },
        'Transitions':
        {
            route: '/transitions',
                config: {controller: 'IconsCtrl', templateUrl:'partials/transitions.html'}
        }
    });

})();
;/**
 * Created by Mikhail on 3/8/2017.
 */
(function () {
    'use strict';
    angular.module('uiMaterial').controller('AutocompleteCtrl', DemoCtrl);

    function DemoCtrl ($timeout, $q, $log) {
        var self = this;

        self.simulateQuery = false;
        self.isDisabled    = false;

        // list of `state` value/display objects
        self.states        = loadAll();
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange   = searchTextChange;

        self.newState = newState;

        function newState(state) {
            alert("Sorry! You'll need to create a Constitution for " + state + " first!");
        }

        // ******************************
        // Internal methods
        // ******************************

        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
            var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }

        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

            return allStates.split(/, +/g).map( function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };

        }
    }
})();


;/**
 * Created by Mikhail on 3/9/2017.
 */
angular.module('uiMaterial')
    .config(function($mdIconProvider) {
        $mdIconProvider
            .icon('share-arrow', 'img/icons/share-arrow.svg', 24)
            .icon('upload', 'img/icons/upload.svg', 24)
            .icon('copy', 'img/icons/copy.svg', 24)
            .icon('print', 'img/icons/print.svg', 24)
            .icon('hangout', 'img/icons/hangout.svg', 24)
            .icon('mail', 'img/icons/mail.svg', 24)
            .icon('message', 'img/icons/message.svg', 24)
            .icon('copy2', 'img/icons/copy2.svg', 24)
            .icon('facebook', 'img/icons/facebook.svg', 24)
            .icon('twitter', 'img/icons/twitter.svg', 24);
    })
    .controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet, $mdToast) {
        $scope.alert = '';

        $scope.showListBottomSheet = function() {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'client/src/templates/bottom-sheet-list-template.html',
                controller: 'ListBottomSheetCtrl'
            }).then(function(clickedItem) {
                $scope.alert = clickedItem['name'] + ' clicked!';
            });
        };

        $scope.showGridBottomSheet = function() {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'client/src/templates/bottom-sheet-grid-template.html',
                controller: 'GridBottomSheetCtrl',
                clickOutsideToClose: false
            }).then(function(clickedItem) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(clickedItem['name'] + ' clicked!')
                        .position('top right')
                        .hideDelay(1500)
                );
            });
        };
    })

    .controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

        $scope.items = [
            { name: 'Share', icon: 'share-arrow' },
            { name: 'Upload', icon: 'upload' },
            { name: 'Copy', icon: 'copy' },
            { name: 'Print this page', icon: 'print' },
        ];

        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
    .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Hangout', icon: 'hangout' },
            { name: 'Mail', icon: 'mail' },
            { name: 'Message', icon: 'message' },
            { name: 'Copy', icon: 'copy2' },
            { name: 'Facebook', icon: 'facebook' },
            { name: 'Twitter', icon: 'twitter' },
        ];

        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
    .run(function($templateRequest) {

        var urls = [
            'img/icons/share-arrow.svg',
            'img/icons/upload.svg',
            'img/icons/copy.svg',
            'img/icons/print.svg',
            'img/icons/hangout.svg',
            'img/icons/mail.svg',
            'img/icons/message.svg',
            'img/icons/copy2.svg',
            'img/icons/facebook.svg',
            'img/icons/twitter.svg'
        ];

        angular.forEach(urls, function(url) {
            $templateRequest(url);
        });

    });
;/**
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