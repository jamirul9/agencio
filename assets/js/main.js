jQuery(document).ready(function($){
	// hero slider
	$(".hero-slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
		// autoplay: true,
		autoplaySpeed: 2000
	});

	// mainmenu
	$(".mainmenu li").on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});


	// logo carousel
	$(".logo-carousel").owlCarousel({
		items: 5,
		loop: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
         1000:{
            items:5
        }
    }


	});

	// work section carousel
	$(".work-project").owlCarousel({
		items: 1,
		loop: true
	});

	// tetimonial carousel
	$(".testimonial-video-slider").owlCarousel({
		items: 1,
		loop: true
	});

	// magnific popup
	$('.video-play-btn').magnificPopup({
		type: 'video'
	});

	// slickNav
	$("#slick-nav").slicknav();

	// wow js
	new WOW().init();
	
	// scroll top area
	$('body').materialScrollTop();

});

	// typed js
	var typed = new Typed('.hero-title', {
	  strings: ['fast growing brands.'],
	  loop: true,
	  typeSpeed: 50,
	  backSpeed: 50,
	  backDelay: 1500,
	  startDelay: 300,
	});