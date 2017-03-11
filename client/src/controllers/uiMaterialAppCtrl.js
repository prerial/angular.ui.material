/**
 * Created by Mikhail on 1/2/2017.
 */
(function() {
    'use strict';

    angular.module('uiMaterial').controller("uiMaterialAppCtrl", function ($scope){
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
        });
})();
