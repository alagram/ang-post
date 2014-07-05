'use strict';
/* global app:true */

/**
 * @ngdoc overview
 * @name angPostApp
 * @description
 * # angPostApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angPostApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
