(function() {
    'use strict';

    angular.module("common", []);
    angular.module('uiMaterial', ['ngRoute', 'ngResource', 'ngMessages', 'ngMaterial','common'])
        .constant("SERVICES",[{name:"$mdMedia",type:"service",
            outputPath:"partials/api/material.core/service/$mdMedia.html",
            url:"api/service/$mdMedia",label:"$mdMedia",module:"material.core",
            githubUrl:"https://github.com/angular/material/blob/master/src/core/util/media.js",
            hasDemo:!1
        }])
        .constant("COMPONENTS",[
            {
                name:"material.components.autocomplete",type:"module",
                outputPath:"partials/api/material.components.autocomplete/index.html",
                url:"api/material.components.autocomplete",
                label:"material.component.autocomplete",
                module:"material.components",
                githubUrl:"https://githubcom/angular/material/blob/master/src/components/autocompleteautocomplete.js",
                docs:[
                    {
                        name:"mdAutocomplete",
                        type:"directive",
                        restrict:{element:!0,attribute:!0,cssClass:!1,comment:!1},
                        outputPath:"partials/api/material.components.autocomplete/directive/mdAutocomplete.html",
                        url:"api/directive/mdAutocomplete",
                        label:"mdAutocomplete",
                        module:"material.components",
                        githubUrl:"https://github.com/angular/material/blob/master/src/components/autocomplete/js/autocompleteDirective.js",
                        hasDemo:!0
                    }
        ]}])
        .constant("BUILDCONFIG",{
            ngVersion:"1.5.5",version:"1.1.3",repository:"https://github.com/angular/material",
            commit:"200ffbcb717374ca9c9d43784878620802f867f3",date:"2017-01-01 09:19:11 -0500"
        })
        .constant("PAGES",{
            CSS:[
                {name:"button",outputPath:"partials/CSS/button.html",url:"/CSS/button",label:"button"},
                {name:"checkbox",outputPath:"partials/CSS/checkbox.html",url:"/CSS/checkbox",label:"checkbox"},
                {name:"Typography",outputPath:"partials/CSS/typography.html",url:"/CSS/typography",label:"Typography"}
            ],
            Theming:[
                {name:"Introduction and Terms",outputPath:"partials/Theming/01_introduction.html",url:"/Theming/01_introduction",label:"Introduction and Terms"},
                {name:"Declarative Syntax",outputPath:"partials/Theming/02_declarative_syntax.html",url:"/Theming/02_declarative_syntax",label:"Declarative Syntax"},
                {name:"Configuring a Theme",outputPath:"partials/Theming/03_configuring_a_theme.html",url:"/Theming/03_configuring_a_theme",label:"Configuring a Theme"},
                {name:"Multiple Themes",outputPath:"partials/Theming/04_multiple_themes.html",url:"/Theming/04_multiple_themes",label:"Multiple Themes"},
                {name:"Theming under the hood",outputPath:"partials/Theming/05_under_the_hood.html",url:"/Theming/05_under_the_hood",label:"Theming under the hood"},
                {name:"Browser Colors",outputPath:"partials/Theming/06_browser_color.html",url:"/Theming/06_browser_color",label:"Browser Colors"}
            ]
        })
        .config( ['$locationProvider', '$routeProvider', 'Navigation', 'DEMOS', function($locationProvider, $routeProvider, navigation, demos ) {
            $locationProvider.hashPrefix('');
            var array = demos;
            $routeProvider
                .when(navigation['Home'].route, navigation['Home'].config)
                .when(navigation['Autocomplete'].route, navigation['Autocomplete'].config)
                .when(navigation['BottomSheet'].route, navigation['BottomSheet'].config)
                .when(navigation['Buttons'].route, navigation['Buttons'].config)
                .when(navigation['Cards'].route, navigation['Cards'].config)
                .when(navigation['Checkbox'].route, navigation['Checkbox'].config)
                .when(navigation['Chips'].route, navigation['Chips'].config)
                .when(navigation['Icons'].route, navigation['Icons'].config)
/*
                .when(navigation['ViewportResizer'].route, navigation['ViewportResizer'].config)
                .when(navigation['Notifications'].route, navigation['Notifications'].config)
                .when(navigation['Combobox'].route, navigation['Combobox'].config)
                .when(navigation['Tooltip'].route, navigation['Tooltip'].config)
                .when(navigation['Typeahead'].route, navigation['Typeahead'].config)
                .when(navigation['GridTag'].route, navigation['GridTag'].config)
                .when(navigation['Buttons'].route, navigation['Buttons'].config)
                .when(navigation['Form'].route, navigation['Form'].config)
                .when(navigation['Form1'].route, navigation['Form1'].config)
                .when(navigation['Form2'].route, navigation['Form2'].config)
                .when(navigation['Accordion'].route, navigation['Accordion'].config)
                .when(navigation['Tabs'].route, navigation['Tabs'].config)
                .when(navigation['ContextMenu'].route, navigation['ContextMenu'].config)
                .when(navigation['Switch'].route, navigation['Switch'].config)
                .when(navigation['Badge'].route, navigation['Badge'].config)
                .when(navigation['Icons'].route, navigation['Icons'].config)
                .when(navigation['Transitions'].route, navigation['Transitions'].config)
*/
                .otherwise({
                    redirectTo: navigation['Home'].route
                });

        }]);

})();
