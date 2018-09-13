'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngSanitize']);
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
    .when('/blog', {
      templateUrl: 'views/blog.html',
      controller: 'blogCtrl'
    })
    .otherwise('/about');
});

app.factory('mediumFactory', function() {
  var data = MediumWidget;
  var service = {};
  service.getData = function() {
    return data;
  }
  return service;
})
