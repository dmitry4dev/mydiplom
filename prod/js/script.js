$(document).ready(function(){

	$('.slider').slick({
		centerMode: true,
  		centerPadding: '1px',
  		slidesToShow: 3,
  		speed: 600,
  		responsive: [
	  		{
	  			breakpoint: 1025,
	  			settings: {
	  				centerMode: true,
	  				dots: true,
	  				arrows: false,
	  				slidesToShow: 2,
	  				speed: 600
	  			}
	  		},
	  		{
	  			breakpoint: 650,
	  			settings: {
	  				centerMode: true,
	  				dots: true,
	  				arrows: false,
	  				slidesToShow: 1,
	  				speed: 600
	  			}
	  		}
  		]
	});

	$('.burger-icon').on('click', function(){
		$('.burger-icon__part').toggleClass('open-burger');

		$('.nav--header').slideToggle();

	});


	$('.flying-tag, .blurb__flying-tag').removeClass('anime');

	$('.flying-tag, .blurb__flying-tag').addClass('visible-tag');

	/* POPUP */

	$('.order-btn, .info-btn__examples').on('click', function(event){
		$('.popup-container').fadeIn(500);

		$('html').addClass('no-scroll');

		var btn = $(event.target);

		if(btn.is('.order-btn')) {
			$('.popup-form__label--email, .popup-form__input--email').hide();
		} else {
			$('.popup-form__label--email, .popup-form__input--email').show();
		}
	});

	$('.popup-container').on('click', function(event){
		if(event.target == this) {
			$(this).fadeOut(500);

			$('html').removeClass('no-scroll').addClass('scroll');
		}
	});

	$('a[class*="info-btn"], a').on('click', function(){
        var scroll = $(this).attr('href'),
        	  top = $(scroll).offset().top - 60;

        $('body, html').animate({scrollTop: top}, 700);
    });

});
