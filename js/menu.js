$(document).ready(function() {

  // Ouverture du menu
  if ($(window).width() < 768) {
    $('.fa-bars').click(function() {
      $('nav').css("left", "0");
      $('.fa-times').css("opacity", "1");
      $('.fa-bars').css("opacity", "0") && $('.fa-bars').css("z-index", "9");
    });
    // Fermeture du menu
    $('nav ul a li').click(function() {
      $('nav').css("left", "-250px");
      $('.fa-times').css("opacity", "0");
      $('.fa-bars').css("opacity", "1") && $('.fa-bars').css("z-index", "11");;
    });
    $('.fa-times').click(function() {
      $('nav').css("left", "-250px");
      $('.fa-times').css("opacity", "0");
      $('.fa-bars').css("opacity", "1") && $('.fa-bars').css("z-index", "11");;
    });
  } else {
    $('nav').css("left", "0");
  };



  // Smooth scrolling
  if ($(window).width() < 768) {
    $("a[href*='#']").on('click', function() {
      var page = $(this).attr('href');
      var speed = 250;
      $('html, body').animate({
        scrollTop: $(page).offset().top
      }, speed);
      return false;
    });
  } else {
    $("a[href*='#']").on('click', function() {
      var page = $(this).attr('href');
      var speed = 250;
      $('html, body').animate({
        scrollTop: $(page).offset().top - 50
      }, speed);
      return false;
    });
  }

  // Classe active au scroll de la section
  $(window).scroll(function() {
    onScrollHandle();
  });

  function onScrollHandle() {

    //Get current scroll position
    var currentScrollPos = $(document).scrollTop();

    //Iterate through all node
    $('nav > ul > a').each(function() {
      var curLink = $(this);
      var refElem = $(curLink.attr('href'));
      //Compare the value of current position and the every section position in each scroll
      if (refElem.position().top <= currentScrollPos + 51 && refElem.position().top + refElem.height() > currentScrollPos) {
        //Remove class active in all nav
        $('nav > ul > a').removeClass("active");
        //Add class active
        curLink.addClass("active");
        $('.fa-bars').addClass("violet") && $('.fa-times').addClass("violet");
      } else if (currentScrollPos < $('#presentation').position().top) {
        $('.fa-bars').removeClass("violet") && $('.fa-times').removeClass("violet") && $('nav > ul > a').removeClass("active");
      } else {
        curLink.removeClass("active");
      }
    });

  }
});