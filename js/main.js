
// This little pice of javascript opens up the dropdowns list in the sidebar navigation.

$(function() {
    $('.main-menu').on('click', '> li', function(e){
       $('.main-menu > li > a').removeClass('active');
       $(this).find('a').addClass('active');
    });
});
// Smooth Scroll
$(document).ready(function() {
  $('.nav a').smoothScroll({offset: -73 });
  $('.back-top a').smoothScroll({offset: -100 });
  $('.content-inner .to-top').smoothScroll({offset: 0 });
});



// A little Angular JS for the make a pattern tool

angular.module('styleGuide', []).controller('StyleGuideController', function() {

  var styleGuide = this;
      styleGuide.colors = [
        {value: '#f0c'},
        {value: '#bee'}];

  styleGuide.addColor = function () {
    if (styleGuide.styleColor == 'caramel') {
      styleGuide.colors.push({value: '#CC9966'});
    }
    else {
      styleGuide.colors.push({value: styleGuide.styleColor});
    }
    styleGuide.styleColor = '';
  }

  styleGuide.removeColors = function () {
    styleGuide.colors = [];
  }

});
