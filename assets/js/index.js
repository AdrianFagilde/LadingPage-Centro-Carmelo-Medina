document.addEventListener( 'DOMContentLoaded', function () {
	if ( $( "#serviciosAb" ).length ) {
		new Splide( '#serviciosAb', {
			autoplay: true,
			type: "loop",
			perMove: 1,
			perPage: 3,
			pagination: false,
			gap: '30px',
			speed: 800,
			padding: { left: 10, right: 10 },
			breakpoints: {
				1200: {
					perPage: 3,
				},
				992: {
					perPage: 2,
				},
				600: {
					perPage: 1,
				},
			},
			classes: {
				arrows: 'splide__arrows servicios-arrows',
				arrow : 'splide__arrow servicios-arrow',
				prev  : 'splide__arrow--prev servicios-prev',
				next  : 'splide__arrow--next servicios-next',
			},
		} ).mount();
	}
} );