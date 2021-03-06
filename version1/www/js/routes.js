angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.camus', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/camus.html',
        controller: 'camusCtrl'
      }
    }
  })

  .state('menu.sartre', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sartre.html',
        controller: 'sartreCtrl'
      }
    }
  })

  .state('menu.tolstoy', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tolstoy.html',
        controller: 'tolstoyCtrl'
      }
    }
  })

  .state('menu.Nietzsche', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Nietzsche.html',
        controller: 'NietzscheCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});