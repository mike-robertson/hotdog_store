'use strict';

angular.module('columbusApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as ctrl'
      });
  }).filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
	});