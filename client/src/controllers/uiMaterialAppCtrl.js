/**
 * Created by Mikhail on 1/2/2017.
 */
(function() {
    'use strict';

    angular.module('uiMaterial').controller("uiMaterialAppCtrl",
        [
            '$scope',
            'COMPONENTS',
//            'BUILDCONFIG',
            '$mdSidenav',
            '$timeout',
            '$mdDialog',
            'menu',
            '$location',
            '$rootScope',
            '$mdUtil',

        function ($scope, COMPONENTS/*, BUILDCONFIG*/, $mdSidenav, $timeout, $mdDialog, menu, $location, $rootScope, $mdUtil){
        var self = this;

        $scope.data = {};
            $scope.menu = {'sections':[
                {
                    'type':'toggle',
                    'name':'Demos',
                    'url':'#/',
                    'hidden':false,
                    'pages': [
                        {
                            'type':'link',
                            'name':'Home',
                            'url':'#/',
                            'hidden':false
                        },
                        {
                            'type':'link',
                            'name':'Autocomplete',
                            'url':'#/autocomplete',
                            'hidden':false
                        },
                        {
                            'type':'link',
                            'name':'Bottom Sheet',
                            'url':'#/bottom-sheet',
                            'hidden':false
                        },
                        {
                            'type':'link',
                            'name':'Buttons',
                            'url':'#/buttons',
                            'hidden':false
                        },
                        {
                            'type':'link',
                            'name':'Cards',
                            'url':'#/cards',
                            'hidden':false
                        },
                        {
                            'type':'link',
                            'name':'Checkbox',
                            'url':'#/checkbox',
                            'hidden':false
                        },
                        {
                            'type':'link',
                            'name':'Chips',
                            'url':'#/chips',
                            'hidden':false
                        }

                    ]
                },
                {
                    'type':'link',
                    'name':'Home',
                    'url':'#/',
                    'hidden':false
                },
                {
                    'type':'link',
                    'name':'Autocomplete',
                    'url':'#/autocomplete',
                    'hidden':false
                },
                {
                    'type':'link',
                    'name':'Bottom Sheet',
                    'url':'#/bottom-sheet',
                    'hidden':false
                },
                {
                    'type':'link',
                    'name':'Buttons',
                    'url':'#/buttons',
                    'hidden':false
                },
                {
                    'type':'link',
                    'name':'Cards',
                    'url':'#/cards',
                    'hidden':false
                },
                {
                    'type':'link',
                    'name':'Checkbox',
                    'url':'#/checkbox',
                    'hidden':false
                },
                {
                    'type':'link',
                    'name':'Chips',
                    'url':'#/chips',
                    'hidden':false
                }

            ]};
        $scope.COMPONENTS = COMPONENTS;
//        $scope.BUILDCONFIG = BUILDCONFIG;
        $scope.menu = menu;
        $scope.path = path;
        $scope.goHome = goHome;
        $scope.openMenu = openMenu;
        $scope.closeMenu = closeMenu;
        $scope.isSectionSelected = isSectionSelected;
        $scope.scrollTop = scrollTop;

        // Grab the current year so we don't have to update the license every year
        $scope.thisYear = (new Date()).getFullYear();

        $rootScope.$on('$locationChangeSuccess', openPage);
        $scope.focusMainContent = focusMainContent;

        //-- Define a fake model for the related page selector
        Object.defineProperty($rootScope, "relatedPage", {
            get: function () { return null; },
            set: angular.noop,
            enumerable: true,
            configurable: true
        });

        $rootScope.redirectToUrl = function(url) {
            $location.path(url);
            $timeout(function () { $rootScope.relatedPage = null; }, 100);
        };

        // Methods used by menuLink and menuToggle directives
        this.isOpen = isOpen;
        this.isSelected = isSelected;
        this.toggleOpen = toggleOpen;
        this.autoFocusContent = false;


        var mainContentArea = document.querySelector("[role='main']");
        var scrollContentEl = mainContentArea.querySelector('md-content[md-scroll-y]');


        // *********************
        // Internal methods
        // *********************

        function closeMenu() {
            $timeout(function() { $mdSidenav('left').close(); });
        }

        function openMenu() {
            $timeout(function() { $mdSidenav('left').open(); });
        }

        function path() {
            return $location.path();
        }

        function scrollTop() {
            $mdUtil.animateScrollTo(scrollContentEl, 0, 200);
        }

        function goHome($event) {
            menu.selectPage(null, null);
            $location.path( '/' );
        }

        function openPage() {
            $scope.closeMenu();

            if (self.autoFocusContent) {
                focusMainContent();
                self.autoFocusContent = false;
            }
        }

        function focusMainContent($event) {
            // prevent skip link from redirecting
            if ($event) { $event.preventDefault(); }

            $timeout(function(){
                mainContentArea.focus();
            },90);

        }

        function isSelected(page) {
            return menu.isPageSelected(page);
        }

        function isSectionSelected(section) {
            var selected = false;
            var openedSection = menu.openedSection;
            if(openedSection === section){
                selected = true;
            }
            else if(section.children) {
                section.children.forEach(function(childSection) {
                    if(childSection === openedSection){
                        selected = true;
                    }
                });
            }
            return selected;
        }

        function isOpen(section) {
            return menu.isSectionSelected(section);
        }

        function toggleOpen(section) {
            menu.toggleSelectSection(section);
        }

        }]);
})();
