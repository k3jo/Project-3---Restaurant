$(document).ready(function() {
  $('.photo-trigger').click(function() {
    $('.gallery-filter ul li a').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.gallery-filter ul li a').removeAttr('style');
		 }
	});//end resize

  $('.menu-trigger').click(function() {
    $('.responsive-nav').slideToggle(500);
  });//end slide toggle

  $(window).scroll(function() {
    $('.responsive-nav').slideUp(500);
  });//end slide toggle



});//end ready