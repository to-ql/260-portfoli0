jQuery(document).ready(function ($) {
    
      var slideCount = $('.main_slider ul li').length;
      var slideWidth = $('.main_slider ul li').width();
      var slideHeight = $('.main_slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('.main_slider').css({ width: slideWidth, height: slideHeight });
      
      $('.main_slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('.main_slider ul li:last-child').prependTo('.main_slider ul');
  
      function moveLeft() {
          $('.main_slider ul').animate({
              left: + slideWidth
          }, 400, function () {
              $('.main_slider ul li:last-child').prependTo('.main_slider ul');
              $('.main_slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('.main_slider ul').animate({
              left: - slideWidth
          }, 400, function () {
              $('.main_slider ul li:first-child').appendTo('.main_slider ul');
              $('.main_slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  