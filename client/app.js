var myApp = angular.module('myApp', ['ui.router', 'dndLists'])
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about/about.html',
      controller: 'AboutController'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'contact/contact.html',
      controller: 'ContactController'
    })
    .state('workflow', {
      url: '/workflow',
      templateUrl: 'workflow/workflow.html',
      controller: 'WorkflowController'
    })
    .state('workflow.modal', {
      views:{
        "modal": {
          templateUrl: "modal/modal.html"
        }
      },
      onEnter: ["$state", function($state) {
        var target2 = document.getElementsByClassName(".Modal-box, .Modal-box *");

        document.onkeyup = function(e) {
          if(e.keyCode == 27) {
            document.offkeyup;
            $state.go("workflow");
          }
        };

        target2.onclick = function(e) {
          e.stopPropagation();
        };
      }],
      abstract: true
    })
    .state('workflow.modal.viewDetails', {
      views: {
        'modal': {
          templateUrl: 'modal/viewDetails.html'
        }
      }
    })
})