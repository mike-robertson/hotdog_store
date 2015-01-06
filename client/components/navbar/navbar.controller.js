'use strict';

angular.module('columbusApp')
  .controller('NavbarCtrl', ['$location', function ($location) {

    var ctrl = this;
    ctrl.menu = [{
      'title': 'Menu',
      'link': '/'
    },
    {
      'title': 'About Us',
      'link': '/'      
    },
    {
      'title': 'Contact',
      'link': '/'      
    }];

    ctrl.isCollapsed = true;

    ctrl.isActive = function(route) {
      return route === $location.path();
    };
  }]);