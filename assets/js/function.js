$(function() {
   $('a[href^="#"]').click(function() {
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
   });
   $(".hamburger").on("click", function() {
      $(this).toggleClass("active");
      $("body").toggleClass("modal-open");
   });
   $("header a").on("click", function() {
      $(".hamburger").removeClass("active");
      $("body").removeClass("modal-open");
   });
});