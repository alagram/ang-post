'use strict';

/**
 * @ngdoc function
 * @name angPostApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angPostApp
 */
angular.module('angPostApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
