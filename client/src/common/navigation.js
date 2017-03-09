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
        'Buttons':
        {
            route: '/buttons',
            config: {controller: 'uiMaterialAppCtrl', templateUrl:'partials/buttons.html'}
        },
        'Cards':
        {
            route: '/cards',
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
