'use strict';

//angular.module('confusionApp', ['ui.router','ngResource','ngDialog'])
angular.module('Destinator', ['ui.router','ngResource','ngDialog'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        //controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })

        // route for the aboutus page
        .state('app.aboutus', {
            url:'aboutus',
            views: {
                'content@': {
                    template: '<h1>To be Completed</h1>'
                    //templateUrl : 'views/aboutus.html',
                    //controller  : 'AboutController'
                }
            }
        })

        // route for the contactus page
        .state('app.contactus', {
            url:'contactus',
            views: {
                'content@': {
                    templateUrl : 'views/contactus.html',
                    //controller  : 'ContactController'

                }
            }
        })

        // route for the menu page
        /*.state('app.menu', {
            url: 'menu',
            views: {
                'content@': {
                    templateUrl : 'views/menu.html',
                    controller  : 'MenuController'
                }
            }
        })*/
            ;

        $urlRouterProvider.otherwise('/');

});

