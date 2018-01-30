'use strict';

var app = angular.module("myApp", ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl'
    })
    .when('/skills', {
      templateUrl: 'views/skills.html',
      controller: 'skillsCtrl'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'projectsCtrl'
    })
    .when('/cs170', {
      templateUrl: 'views/cs170.html',
      controller: 'cs170Ctrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'contactCtrl'
    })
    .otherwise('/about');
});

/**
 * View controllers
 */
app.controller("aboutCtrl", function($scope) {});
app.controller("skillsCtrl", function($scope) {
  $scope.languages = ["Java", "HTML/CSS", "Javascript", "Python", "C", "C#"];
  $scope.frameworks = ["angularJS", "jQuery", "Bootstrap", "Materialize", "Foundation", "NodeJS"];
  $scope.tools = ["Ubuntu", "Redhat Enterprise", "Unity3D engine", "Git", "Subversion/SVN"];
});
app.controller("projectsCtrl", function($scope) {
  $scope.webProjs = [
    {
      title: '<a href="https://github.com/wyang6788/redditer" target="_blank" class="waves-effect"><b><i>Redditer:</i></b></a>',
      description: 'Ruby-On-Rails chat messaging application that aims to bring together people who subscribe to various Reddit subreddits! Hosted by Amazon Web Services. App is no longer hosted so an <a href="http://imgur.com/a/KjLsx" target="_blank" class="waves-effect">Imgur link</a> is provided instead.'
    },
    {
      title: '<a href="https://github.com/Edmond-Wu/socket-chat" target="_blank" class="waves-effect"><b><i>Socket Chat:</i></b></a>',
      description: 'Another chat application, built using socket.io! Users can log in, view other logged-on users, and change their message colors. Front-end designed with AngularJS and Materialize CSS.'
    }
  ];
});
app.controller("cs170Ctrl", function($scope) {});
app.controller("contactCtrl", function($scope) {});

/**
 * Directive for slide toggle functionality
 */
app.directive('sliderToggle', function() {
  return {
    restrict: 'AE',
    link: function(scope, element, attrs) {
      var target = element.parent()[0].querySelector('[slider]');
      attrs.expanded = false;
      element.bind('click', function() {
        var content = target.querySelector('.slideable_content');
        if (!attrs.expanded) {
          content.style.border = '1px solid rgba(0,0,0,0)';
          var y = content.clientHeight;
          content.style.border = 0;
          target.style.height = y + 'px';
        } else {
          target.style.height = '0px';
        }
        attrs.expanded = !attrs.expanded;
      });
    }
  }
}).directive('slider', function() {
  return {
    restrict: 'A',
    compile: function(element, attr) {
      /* wrap tag */
      var contents = element.html();
      element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');
      return function postLink(scope, element, attrs) {
        /* default properties */
        attrs.duration = (!attrs.duration) ? '.6s' : attrs.duration;
        attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
        element.css({
          'overflow': 'hidden',
          'height': '0px',
          'transitionProperty': 'height',
          'transitionDuration': attrs.duration,
          'transitionTimingFunction': attrs.easing
        });
      };
    }
  };
});

/* Initialize collapse button for mobile nav-bar */
$(".button-collapse").sideNav({
  closeOnClick: true
});
