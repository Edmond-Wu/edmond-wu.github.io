'use strict';

var app = angular.module("myApp", ['ngRoute', 'ngAnimate', 'ngSanitize']);
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
  $scope.languages = ["Java", "HTML5/CSS", "Javascript", "Python", "C", "C#"];
  $scope.frameworks = ["angularJS", "jQuery", "Bootstrap", "Materialize CSS", "Apache Ant", "NodeJS"];
  $scope.tools = ["Linux (RedHat/Ubuntu)", "Windows", "Unity3D engine", "Git", "Subversion/SVN", "Atlassian Jira"];
});
app.controller("projectsCtrl", function($scope) {
  $scope.webProjs = [
    {
      title: '<div class="card center blue"><a href="https://github.com/wyang6788/redditer" target="_blank" class="waves-effect align-top"><b>Redditer</b></a></div>',
      description: 'Ruby-On-Rails chat messaging application that aims to bring together people who subscribe to various Reddit subreddits! <a href="http://imgur.com/a/KjLsx" target="_blank" class="waves-effect align-top"><b>Imgur link</b></a> is provided as an example.'
    },
    {
      title: '<div class="card center blue"><a href="https://github.com/Edmond-Wu/socket-chat" target="_blank" class="waves-effect align-top"><b>Socket Chat</b></a></div>',
      description: 'Another chat application, built using <a href="https://socket.io/" target="_blank" class="waves-effect align-top"><b>socket.io</b></a>! Users can log in, view other logged-on users, and change their message colors. Front-end designed with AngularJS and Materialize CSS.'
    },
    {
      title: '<div class="card center blue"><a href="https://rutgerstc.github.io" target="_blank" class="waves-effect align-top"><b>Rutgers Tzu-Ching</b></a></div>',
      description: 'Website for the Rutgers chapter of the Tzu-Chi Collegiate Association. Single-page application designed with AngularJS.'
    },
    {
      title: '<div class="card center blue"><a href="http://devpost.com/software/insightweet" target="_blank" class="waves-effect align-top"><b>Insightweets</b></a></div>',
      description: 'HackNY 2015 group web hack using IBM\'s Bluemix algorithm to find out what people are like based on their tweets (won best IBM hack at HackNY Spring 2015!)'
    }
  ];
  $scope.otherProjs = [
    {
      title: '<div class="card center red"><a href="../assets/unity/td.html" target="_blank" class="waves-effect align-top"><b>Tower Defense</b></a></div>',
      description: 'A basic tower defense game with a geometric/cube theme with some dank memes. Made using Unity 5 with C#; requires <a href="http://unity3d.com/webplayer/" target="_blank" class="waves-effect align-top">the Unity3D plug-in</a> to work.'
    },
    {
      title: '<div class="card center red"><a href="../assets/unity/interstellar_shooter.html" target="_blank" class="waves-effect align-top"><b>Interstellar Shooter</b></a></div>',
      description: 'Game resembling a classic space-shooter arcade. Made using Unity 5 with C#; also needs the <a href="http://unity3d.com/webplayer/" target="_blank" class="waves-effect align-top">Unity3D plugin</a>.'
    },
    {
      title: '<div class="card center red"><a href="https://github.com/Edmond-Wu/PhotoAlbum" target="_blank" class="waves-effect align-top"><b>Photo Album</b></a></div>',
      description: 'JavaFX CRUD application resembling a photo album. Users can add/edit/delete albums and photos, as well as view/like other users\' photos.'
    },
    {
      title: '<div class="card center red"><a href="https://github.com/Edmond-Wu/Chess" target="_blank" class="waves-effect align-top"><b>Chess</b></a></div>',
      description: 'Java project that simulates a complete 2-player chess game with all competitive rules in terminal.'
    },
    {
      title: '<div class="card center red"><a href="https://github.com/Edmond-Wu/Android-Books" target="_blank" class="waves-effect align-top"><b>Android Books</b></a></div>',
      description: 'Android book database application that allows for users to subscribe to books to receive new chapter updates.'
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
