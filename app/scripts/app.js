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
    'ngTouch',
    'firebase'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.constant('FIREBASE_URL', 'https://fiery-fire-5606.firebaseio.com/');
