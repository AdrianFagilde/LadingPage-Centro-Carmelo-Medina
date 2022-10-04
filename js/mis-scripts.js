$(window).scroll(function(){
     scroll_barra();
});


jQuery(document).ready(function($){
   scroll_barra();
});

function scroll_barra(){
     var scroll = $(document).scrollTop();

    if($(window).width()>1200){
        if ($(".banner").length){
            if (scroll<= $(".banner").position().top + 100) {

                if ($("header").hasClass("barra_reducida") )$("header").removeClass("barra_reducida");
                if (!$("header").hasClass("barra_ampliada")) $("header").addClass("barra_ampliada");

            }else{
                if (!$("header").hasClass("barra_reducida")) $("header").addClass("barra_reducida");  
                if ($("header").hasClass("barra_ampliada")) $("header").removeClass("barra_ampliada");
            }
        }
    }else if ($(window).width()>1000){
        if ($(".banner").length){
            if (scroll<= $(".banner").position().top + 100) {

                if ($("header").hasClass("barra_reducida") )$("header").removeClass("barra_reducida");
                if (!$("header").hasClass("barra_ampliada")) $("header").addClass("barra_ampliada");

            }else{
                if (!$("header").hasClass("barra_reducida")) $("header").addClass("barra_reducida");  
                if ($("header").hasClass("barra_ampliada")) $("header").removeClass("barra_ampliada");
            }
        }
    }
}

$(".menu-toggle-sidebar").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$('body').attr('id', 'menu-lateral');


function toggleSidebar(side) {
    if($("#menu-lateral").hasClass("toggle-" + (side === "right" ? "left" : "right"))) {
        $("#menu-lateral").toggleClass("toggle-" + side);
        $("#menu-lateral").toggleClass("toggle-" + (side === "right" ? "left" : "right"));

    }
    else {
        $("#manto-movil").toggleClass("toogled");
        $("#menu-lateral").toggleClass("toggled");
        $("#menu-lateral").toggleClass("toggle-" + side);
    }
}

$('.left-toggle').on('click', function(e) {
    toggleSidebar("left");
});

$('.right-toggle').on('click', function(e) {
    toggleSidebar("right");
});

$('#manto-movil').on('click', function(e) {
    if($("#menu-lateral").hasClass("toggle-right")) {
        toggleSidebar("right");
    } else if( $("#menu-lateral").hasClass("toggle-left") ){
        toggleSidebar("left");
    }
    
});

document.addEventListener( 'DOMContentLoaded', function () {
	new WOW().init();

    if ( $( "#banner-slider" ).length ) {
        new Splide( '#banner-slider', {
            autoplay: true,
            interval: 5000,
            type: "fade",
            rewind: true,
            perMove: 1,
            perPage: 1,
            pagination: false,
            arrows: false,
        } ).mount();
    }
	
    if ( $( "#img-slider" ).length ) {
        new Splide( '#img-slider', {
            autoplay: true,
            interval: 5000,
            type: "fade",
            rewind: true,
            perMove: 1,
            perPage: 1,
            arrows: false,
        } ).mount();
    }

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
