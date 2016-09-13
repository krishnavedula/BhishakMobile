angular.module('BhishakReports.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('reports', {
    url: '/reports',
    templateUrl: 'templates/reports.html',
    controller: 'reportsCtrl'
  })

  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'settings': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('logout', {
    url: '/logout',
    templateUrl: 'templates/login.html',
    controller: 'logoutCtrl'
  })

  .state('tabsController.labCountsReport', {
    url: '/labCountsReport',
    views: {
      'reports': {
        templateUrl: 'templates/labCountsReport.html',
        controller: 'labReportCtrl'
      }
    }
  })
  .state('tabsController.labDetailsReport', {
    url: '/labDetailsReport/:reportDate/:labId/:labName',
    //templateUrl: 'templates/labDetailsReport.html',
    //controller: 'labDetailsReportCtrl'
    views: {
       'reports': {
        templateUrl: 'templates/labDetailsReport.html',
         controller: 'labDetailsReportCtrl'
       }
    }
  })

  .state('tabsController.doctorConsultationsReport', {
    url: '/doctorConsulationsReport',
    views: {
      'reports': {
        templateUrl: 'templates/doctorConsultationsReport.html',
        controller: 'doctorConsultationsReportCtrl'
      }
    }
  })

  .state('dailyCancellationsReport', {
    url: '/dailyCancellationsReport',
    templateUrl: 'templates/dailyCancellationsReport.html',
    controller: 'dailyCancellationsReportCtrl'
  })

  .state('dailyActivityReport', {
    url: '/dailyActivityReport',
    templateUrl: 'templates/dailyActivityReport.html',
    controller: 'dailyActivityReportCtrl'
  })

  .state('tabsController.dashboard', {
    url: '/dashboard',
    views: {
      'dashboard': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});