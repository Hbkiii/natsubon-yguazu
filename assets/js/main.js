/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header'),
		$countdown = $('#countdown');
		var combinedOffset = $header.outerHeight() + $countdown.outerHeight();


	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset:combinedOffset
			});
	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}
		if ($banner.length > 0
			&&	$countdown.hasClass('none')) {
	
				$window.on('resize', function() { $window.trigger('scroll'); });
				
				$banner.scrollex({
					bottom:		$countdown.outerHeight() + 1,
					terminate:	function() { $countdown.removeClass('none'); },
					enter:		function() { $countdown.addClass('none'); },
					leave:		function() { $countdown.removeClass('none'); }
				});
	
			}

		

})(jQuery);

//jquery
$(function(){

	$('.cuenta-regresiva').countdown('2024/12/07 18:00:00', function(event){
		$('#dias').html(event.strftime('%D'));
		$('#horas').html(event.strftime('%H'));
		$('#minutos').html(event.strftime('%M'));
		$('#segundos').html(event.strftime('%S'));
	});

});

$(function(){

	$('.countdown').countdown('2024/12/07 18:00:00', function(event){
		$('#day').html(event.strftime('%D'));
		$('#hour').html(event.strftime('%H'));
		$('#min').html(event.strftime('%M'));
		$('#seg').html(event.strftime('%S'));
	});

});

// (function(){

// 	document.addEventListener('DOMContentLoaded', function(){

// 		var map = L.map('map').setView([-25.459754, -55.004081], 15);

// 		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// 		}).addTo(map);

// 		L.marker([-25.459754, -55.004081]).addTo(map)
// 			.bindPopup("Natsubon Yguazú 2024").openPopup();
// 	});
// })();
