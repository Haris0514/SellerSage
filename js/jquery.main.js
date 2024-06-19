// page init
jQuery(function() {
	//initSelect2();
	initSlickCarousel();
	initStickyHeader();
	initMobileNav();
	initResizeEffect();

	jQuery(document).click(function(e) {
		var target = e.target;
		if (jQuery('body').hasClass('nav-active')) {
			if (!jQuery(target).hasClass('nav-opener') && !jQuery(target).parents('.main-nav').length) {
				jQuery('body').removeClass('nav-active');
			}
		}
	})
});

// select2 init
function initSelect2() {
	jQuery('.select2').select2({
		minimumResultsForSearch: -1,
		// placeholder: 'Select an option'
	});
}

// Tooltip
jQuery(function() {
	jQuery('[data-toggle="tooltip"]').tooltip();
})

// slick init
function initSlickCarousel() {

	jQuery('.brands-slider').slick({
		speed: 8000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: false,
		cssEase: 'linear',
		slidesToShow: 5,
		slidesToScroll: 1,
		draggable: false,
		focusOnSelect: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false
	});
	jQuery('.testimonials-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		rows: 0,
		arrows: true,
		dots: false,
		focusOnSelect: false,
		mobileFirst: true,
		infinite: true,
		autoplay: false,
		responsive: [{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	jQuery('.stories-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		rows: 0,
		arrows: true,
		dots: false,
		focusOnSelect: false,
		prevArrow: '<button class="slick-prev"><i class="fa-regular fa-circle-arrow-left"></i></button>',
		nextArrow: '<button class="slick-next"><i class="fa-regular fa-circle-arrow-right"></i></button>',
		mobileFirst: true,
		infinite: true,
		autoplay: false,
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	jQuery('.updates-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		rows: 0,
		arrows: true,
		dots: false,
		focusOnSelect: false,
		mobileFirst: true,
		infinite: true,
		autoplay: false,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// $window = jQuery(window);
	// slider = jQuery('.search-results-slider');
	// settings = {
	// 	slidesToScroll: 1,
	// 	slidesToShow: 1,
	// 	rows: 0,
	// 	arrows: false,
	// 	dots: false,
	// 	centerMode: true,
	// 	centerPadding: '100px',
	// 	focusOnSelect: false,
	// 	prevArrow: '<button class="slick-prev"><i class="fa-light fa-angle-left"></i></button>',
	// 	nextArrow: '<button class="slick-next"><i class="fa-light fa-angle-right"></i></button>',
	// 	mobileFirst: true,
	// 	infinite: true,
	// 	autoplay: false,
	// 	responsive: [{
	// 			breakpoint: 992,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 576,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 375,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 	]
	// };
	// slider.slick(settings);
	// jQuery(window).on('resize', function() {
	// 	if (jQuery(window).width() > 992) {
	// 		if ($slider.hasClass('slick-initialized')) {
	// 			return slider.slick(settings);
	// 		}
	// 		return
	// 	}
	// 	if (!slider.hasClass('slick-initialized')) {
	// 		return slider.slick(settings);
	// 	}
	// });

	// jQuery('.gallery-main').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	adaptiveHeight: true,
	// 	prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
	// 	nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
	// 	asNavFor: '.gallery-nav',
	// 	infinite: false
	// });
	// jQuery('.gallery-nav').slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.gallery-main',
	// 	dots: false,
	// 	arrows: false,
	// 	centerMode: true,
	// 	centerPadding: '0px',
	// 	focusOnSelect: true,
	// 	infinite: false
	// });
}

// StickyHeader init
function initStickyHeader() {
	jQuery(function() {
		var stickyElement = jQuery(".sticky"),
			stickyClass = "sticky-pin",
			stickyPos = stickyElement.offset().top,
			stickyHeight;
		stickyElement.after('<div id="jumps-prevent"></div>');

		function jumpsPrevent() {
			stickyHeight = stickyElement.innerHeight();
			stickyElement.css({ "margin-bottom": "-" + stickyHeight + "px" });
			stickyElement.next().css({ "padding-top": +stickyHeight + "px" });
		};
		jumpsPrevent();
		jQuery(window).resize(function() {
			jumpsPrevent();
		});

		function stickerFn() {
			var winTop = jQuery(this).scrollTop();
			winTop >= stickyPos ?
				stickyElement.addClass(stickyClass) :
				stickyElement.removeClass(stickyClass)
		};
		stickerFn();
		jQuery(window).scroll(function() {
			stickerFn();
		});
	});

	// script.js
	window.onscroll = function() { myFunction() };

	var header = document.getElementById("header");
	var sticky = header.offsetTop;

	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky-header");
		} else {
			header.classList.remove("sticky-header");
		}
	}

}

// MobileNav init
function initMobileNav() {
	jQuery('.nav-opener').click(function(e) {
		e.preventDefault();

		if (jQuery('body').hasClass('nav-active')) {
			jQuery('body').removeClass('nav-active');
		} else {
			jQuery('body').addClass('nav-active');
		}
	});

	jQuery('.nav-close').click(function(e) {
		e.preventDefault();

		if (jQuery('body').hasClass('nav-active')) {
			jQuery('body').removeClass('nav-active');
		}
	});
}

// Resize Effect function
function initResizeEffect() {
	jQuery(window).resize(function() {
		if (jQuery(window).width() > 991) {
			jQuery('body').removeClass('nav-active');
		}
	});
}

// // Get the current year
// var currentYear = new Date().getFullYear();
// // Select all elements with the class 'currentYear'
// var elements = document.querySelectorAll(".currentYear");
// // Loop through each element and update its text content
// elements.forEach(function(element) {
// 	element.textContent = currentYear;
// });

// jQuery('.modal').on('shown.bs.modal', function (e) {
// 	jQuery('.gallery-main, .gallery-nav').slick('setPosition');
// 	jQuery('.gallery-wrapper').addClass('open');

// 	jQuery('.search-results-slider').slick('setPosition');
// 	jQuery('.slider-wrapper').addClass('open');
// })