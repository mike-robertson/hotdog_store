'use strict';

angular.module('columbusApp')
  .controller('MainCtrl', function () {
    var ctrl = this;
    var newLine = "<br />";

    ctrl.containers = [{
      "icon": "call_us.png",
      "title": "CALL US",
      "text": "Here's some text about why you should call us. So call us! Woohoo!",
      "text2": "123-456-7890",
      "link": false,
      "linkText": ""
    }, {
      "icon": "clock.png",
      "title": "HOURS",
      "text": "11AM - 2:30AM"+newLine+newLine+"Kitchen Hours"+newLine+"Sun-Thurs 11AM - 2AM"
        +newLine+"Fri-Sat 11AM - 1:45AM"+newLine+"Carry Out 'till 1:45AM",
      "text2": "",
      "link": false,
      "linkText": ""
    }, {
      "icon": "location.png",
      "title": "OUR LOCATION",
      "text": "123 Freedom Way"+newLine+"Freedom City, OH",
      "text2": "",
      "link": true,
      "linkText": "GET DIRECTIONS"}];

    ctrl.slideInterval = 5000;

    ctrl.slides = [{
      "text": "Dirty Frank's Hot Dog Palace serves all-beef, vegan, and vegetarian hot dogs, cold beer, and dazzling drinks!",
      "image": "hero_image.png"
    }, {
      "text": "You won't feel dirty after eating our environmentally conscientious dogs! You'll feel good inside.",
      "image": "hero_image.png"
    }, {
      "text": "We're sorry the dogs are so expensive, that's the price of having a conscience! Also your iPhone is slave made!",
      "image": "hero_image.png"
    }];

  });
