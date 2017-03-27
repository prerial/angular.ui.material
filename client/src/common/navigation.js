/**
 * Created by Mikhail on 1/12/2016.
 */
(function() {
    'use strict';

    angular.module('common') .constant('Navigation', {

        'Home': {
            route: '/home',
                config: {controller: 'uiMaterialAppCtrl', template:'<h2 class="examples-pane">Examples Home</h2>'}
        },
        'Autocomplete':
        {
            route: '/autocomplete',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/autocomplete.html'}
        },
        'BottomSheet':
        {
            route: '/bottomSheet',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/bottomsheet.html'}
        },
        'Buttons':
        {
            route: '/button',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/buttons.html'}
        },
        'Cards':
        {
            route: '/card',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/cards.html'}
        },
        'Checkbox':
        {
            route: '/checkbox',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/checkbox.html'}
        },
        'Chips':
        {
            route: '/chips',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/chips.html'}
        },
        'Icons':
        {
            route: '/icons',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/icons.html'}
        },
        'Typeahead':
        {
            route: '/typeahead',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/typeahead.html'}
        },
        'GridTag':
        {
            route: '/gridtag',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/gridtag.html'}
        },
        'Form':
        {
            route: '/form',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/form.html'}
        },
        'Form1':
        {
            route: '/form1',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/form/form1.html'}
        },
        'Form2':
        {
            route: '/form2',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/form/form2.html'}
        },
        'Accordion':
        {
            route: '/accordion',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/accordion.html'}
        },
        'Tabs':
        {
            route: '/tabs',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/tabs.html'}
        },
        'ContextMenu':
        {
            route: '/context-menu',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/context-menu.html'}
        },
        'Switch':
        {
            route: '/switch',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/switch.html'}
        },
        'Badge':
        {
            route: '/badge',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/badge.html'}
        },
        'Transitions':
        {
            route: '/transitions',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/transitions.html'}
        }
    });

})();
