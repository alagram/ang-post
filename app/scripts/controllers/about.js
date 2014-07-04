'use strict';

/**
 * @ngdoc function
 * @name angPostApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angPostApp
 */
angular.module('angPostApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
