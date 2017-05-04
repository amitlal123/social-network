angular.module('socialApp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
  // Routing with State Provider
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'homeVM'
      })
      .state('app', {
        templateUrl: './views/app.html'
      })
      .state('create', {
        url: '/create',
        templateUrl: './views/createProfile.html',
        controller: 'createProfileCtrl',
        controllerAs: 'profileVM'
      })
      .state('landing', {
        parent: 'app',
        url: '/landing',
        templateUrl: './views/landing.html',
        controller: 'landingCtrl',
        controllerAs: 'landingVM',
        params: {
          profile: null
          }
        })
        .state('update', {
          parent: 'app',
          url: '/update',
          templateUrl: './views/updateProfile.html',
          controller: 'updateCtrl',
          controllerAs: 'updateVM',
          params: {
            profile: null
            }
          })


    $urlRouterProvider
      .otherwise('/');
});
