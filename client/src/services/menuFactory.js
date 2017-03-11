/**
 * Created by Mikhail on 3/11/2017.
 */
(function() {
    'use strict';

    angular.module('uiMaterial').factory('menu', [
    'SERVICES',
    'COMPONENTS',
    'DEMOS',
    'PAGES',
    '$location',
    '$rootScope',
    '$http',
    '$window',
    function(SERVICES, COMPONENTS, DEMOS, PAGES, $location, $rootScope, $http, $window) {

        var version = {};

        var sections = [{
            name: 'Getting Started',
            url: 'getting-started',
            type: 'link'
        }];

        var demoDocs = [];
        angular.forEach(DEMOS, function(componentDemos) {
            demoDocs.push({
                name: componentDemos.label,
                url: componentDemos.url
            });
        });

        sections.push({
            name: 'Demos',
            pages: demoDocs.sort(sortByName),
            type: 'toggle'
        });

        sections.push();

        sections.push({
            name: 'Customization',
            type: 'heading',
            children: [
                {
                    name: 'CSS',
                    type: 'toggle',
                    pages: [{
                        name: 'Typography',
                        url: 'CSS/typography',
                        type: 'link'
                    },
                        {
                            name : 'Button',
                            url: 'CSS/button',
                            type: 'link'
                        },
                        {
                            name : 'Checkbox',
                            url: 'CSS/checkbox',
                            type: 'link'
                        }]
                },
                {
                    name: 'Theming',
                    type: 'toggle',
                    pages: [
                        {
                            name: 'Introduction and Terms',
                            url: 'Theming/01_introduction',
                            type: 'link'
                        },
                        {
                            name: 'Declarative Syntax',
                            url: 'Theming/02_declarative_syntax',
                            type: 'link'
                        },
                        {
                            name: 'Configuring a Theme',
                            url: 'Theming/03_configuring_a_theme',
                            type: 'link'
                        },
                        {
                            name: 'Multiple Themes',
                            url: 'Theming/04_multiple_themes',
                            type: 'link'
                        },
                        {
                            name: 'Under the Hood',
                            url: 'Theming/05_under_the_hood',
                            type: 'link'
                        },
                        {
                            name: 'Browser Color',
                            url: 'Theming/06_browser_color',
                            type: 'link'
                        }
                    ]
                }
            ]
        });

        var docsByModule = {};
        var apiDocs = {};
        COMPONENTS.forEach(function(component) {
            component.docs.forEach(function(doc) {
                if (angular.isDefined(doc.private)) return;
                apiDocs[doc.type] = apiDocs[doc.type] || [];
                apiDocs[doc.type].push(doc);

                docsByModule[doc.module] = docsByModule[doc.module] || [];
                docsByModule[doc.module].push(doc);
            });
        });

        SERVICES.forEach(function(service) {
            if (angular.isDefined(service.private)) return;
            apiDocs[service.type] = apiDocs[service.type] || [];
            apiDocs[service.type].push(service);

            docsByModule[service.module] = docsByModule[service.module] || [];
            docsByModule[service.module].push(service);
        });

        sections.push({
            name: 'API Reference',
            type: 'heading',
            children: [
                {
                    name: 'Layout',
                    type: 'toggle',
                    pages: [{
                        name: 'Introduction',
                        id: 'layoutIntro',
                        url: 'layout/introduction'
                    }
                        ,{
                            name: 'Layout Containers',
                            id: 'layoutContainers',
                            url: 'layout/container'
                        }
                        ,{
                            name: 'Layout Children',
                            id: 'layoutGrid',
                            url: 'layout/children'
                        }
                        ,{
                            name: 'Child Alignment',
                            id: 'layoutAlign',
                            url: 'layout/alignment'
                        }
                        ,{
                            name: 'Extra Options',
                            id: 'layoutOptions',
                            url: 'layout/options'
                        }
                        ,{
                            name: 'Troubleshooting',
                            id: 'layoutTips',
                            url: 'layout/tips'
                        }]
                },
                {
                    name: 'Services',
                    pages: apiDocs.service.sort(sortByName),
                    type: 'toggle'
                },{
                    name: 'Types',
                    pages: [],
//                    pages: apiDocs.type.sort(sortByName),
                    type: 'toggle'
                },{
                    name: 'Directives',
                    pages: apiDocs.directive.sort(sortByName),
                    type: 'toggle'
                }]
        });

        sections.push( {
            name: 'Contributors',
            url: 'contributors',
            type: 'link'
        } );

        sections.push({
            name: 'License',
            url:  'license',
            type: 'link',

            // Add a hidden section so that the title in the toolbar is properly set
            hidden: true
        });

        function sortByName(a,b) {
            return a.name < b.name ? -1 : 1;
        }

        var self;

        $rootScope.$on('$locationChangeSuccess', onLocationChange);
/*
        $http.get("/docs.json")
            .then(function(response) {

                response = response.data;
                var versionId = getVersionIdFromPath();
                var head = { type: 'version', url: '/HEAD', id: 'head', name: 'HEAD (master)', github: '' };
                var commonVersions = versionId === 'head' ? [] : [ head ];
                var knownVersions = getAllVersions();
                var listVersions = knownVersions.filter(removeCurrentVersion);
                var currentVersion = getCurrentVersion() || {name: 'local'};
                version.current = currentVersion;
                sections.unshift({
                    name: 'Documentation Version',
                    type: 'heading',
                    className: 'version-picker',
                    children: [ {
                        name: currentVersion.name,
                        type: 'toggle',
                        pages: commonVersions.concat(listVersions)
                    } ]
                });
                function removeCurrentVersion (version) {
                    switch (versionId) {
                        case version.id: return false;
                        case 'latest': return !version.latest;
                        default: return true;
                    }
                }
                function getAllVersions () {
                    if (response && response.versions && response.versions.length) {
                        return response.versions.map(function(version) {
                            var latest = response.latest === version;
                            return {
                                type: 'version',
                                url: '/' + version,
                                name: getVersionFullString({ id: version, latest: latest }),
                                id: version,
                                latest: latest,
                                github: 'tree/v' + version
                            };
                        });
                    }

                    return [];
                }
                function getVersionFullString (version) {
                    return version.latest
                        ? 'Latest Release (' + version.id + ')'
                        : 'Release ' + version.id;
                }
                function getCurrentVersion () {
                    switch (versionId) {
                        case 'head': return head;
                        case 'latest': return knownVersions.filter(getLatest)[0];
                        default: return knownVersions.filter(getVersion)[0];
                    }
                    function getLatest (version) { return version.latest; }
                    function getVersion (version) { return versionId === version.id; }
                }
                function getVersionIdFromPath () {
                    var path = $window.location.pathname;
                    if (path.length < 2) path = 'HEAD';
                    return path.match(/[^\/]+/)[0].toLowerCase();
                }
            });
*/
        return self = {
            version:  version,
            sections: sections,

            selectSection: function(section) {
                self.openedSection = section;
            },
            toggleSelectSection: function(section) {
                self.openedSection = (self.openedSection === section ? null : section);
            },
            isSectionSelected: function(section) {
                return self.openedSection === section;
            },

            selectPage: function(section, page) {
                self.currentSection = section;
                self.currentPage = page;
            },
            isPageSelected: function(page) {
                return self.currentPage === page;
            }
        };

        function onLocationChange() {
            var path = $location.path();
            var introLink = {
                name: "Introduction",
                url:  "/",
                type: "link"
            };

            if (path == '/') {
                self.selectSection(introLink);
                self.selectPage(introLink, introLink);
                return;
            }

            var matchPage = function(section, page) {
                if (path.indexOf(page.url) !== -1) {
                    self.selectSection(section);
                    self.selectPage(section, page);
                }
            };

            sections.forEach(function(section) {
                if (section.children) {
                    // matches nested section toggles, such as API or Customization
                    section.children.forEach(function(childSection){
                        if(childSection.pages){
                            childSection.pages.forEach(function(page){
                                matchPage(childSection, page);
                            });
                        }
                    });
                }
                else if (section.pages) {
                    // matches top-level section toggles, such as Demos
                    section.pages.forEach(function(page) {
                        matchPage(section, page);
                    });
                }
                else if (section.type === 'link') {
                    // matches top-level links, such as "Getting Started"
                    matchPage(section, section);
                }
            });
        }
    }]);
})();