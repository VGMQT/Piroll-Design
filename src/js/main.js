$(document).ready(function () {

    //----------------------<<svg for ie>>----------------------\\
    svg4everybody();

    //----------------------<<one page scroll>>----------------------\\
    $('#fullpage').fullpage({

        anchors:['first', 'second', 'third', 'fourth'],
        navigation: false,
        scrollBar: false,
        autoScrolling: false,
        fitToSection: false,
        fitToSectionDelay: 1000

    });

    //----------------------<<skills>>----------------------\\
    (function () {

        const value = $(".skills__value");

        for (let i = 0; i < value.length; i++) {

            let object = value.eq(i);
            let size = object[0].innerHTML;
            const container = object.closest(".skills__item");
            const achievedBar = container.find(".skills__progress-achieved");

            achievedBar.css({
                width : size + "%"
            });

        }
    }());

    //----------------------<<parallax>>----------------------\\
    function parallax() {
        const $parallax = document.getElementById("parallax");

        if($parallax){
            let yPos = window.pageYOffset / $parallax.dataset.speed;
            yPos = -yPos;

            let coords = '0% '+ yPos + 'px';

            $parallax.style.backgroundPosition = coords;
        }
    }

    window.addEventListener("scroll", function(){
        parallax();
    });

    //----------------------<<gallery>>----------------------\\
    (function () {

        const custTheme= {
            background:     'rgba(#000000, .5)', imageBorder: 'none', imageBoxShadow: 'none',
            barBackground:  'rgba(red, .5)', barBorder: '0px solid #ffffff', barColor: '#ffffff', barDescriptionColor: 'blue'
        };

        $("#nanogallery2").nanogallery2( {

            galleryDisplayMode: 'moreButton',
            galleryDisplayMoreStep: 2,
            galleryMaxRows: 2,

            itemsBaseURL:     '../assets/img/portfolio/',
            items: [
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio2.jpg', srct: 'thumb2.jpg'},
                { src: 'portfolio3.jpg', srct: 'thumb3.jpg'},
                { src: 'portfolio4.jpg', srct: 'thumb4.jpg'},

                { src: 'portfolio4.jpg', srct: 'thumb4.jpg'},
                { src: 'portfolio3.jpg', srct: 'thumb3.jpg'},
                { src: 'portfolio2.jpg', srct: 'thumb2.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},

                { src: 'portfolio2.jpg', srct: 'thumb2.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio4.jpg', srct: 'thumb4.jpg'},
                { src: 'portfolio3.jpg', srct: 'thumb3.jpg'}
            ],

            thumbnailHeight:  300,
            thumbnailWidth:   300,
            thumbnailAlignment: 'center',
            thumbnailGutterWidth: 0,
            thumbnailGutterHeight: 0,
            thumbnailBorderHorizontal: 0,
            thumbnailBorderVertical: 0,
            thumbnailDisplayTransition: 'scaleUp',
            thumbnailDisplayTransitionDuration: 500,
            thumbnailLabel: {
                display: false
            },
            thumbnailHoverEffect2: {
                name:           'imageScale150Outside',
                duration:       10000,
                durationBack:   300,
            },

            viewerToolbar:    {
                display: false,
                standard:  "",
                minimized: ""
            },
            viewerTools: {
                topLeft: "pageCounter",
                topRight: "closeButton"
            },
            viewerTheme: custTheme,

            icons: {
                buttonClose: "<svg class=\"portfolio__svg\"><use xlink:href=\"assets/img/svg/sprite/svg-sprite.svg#close\"></use></svg>",
                viewerImgPrevious: "<svg class=\"portfolio__svg portfolio__svg_size\"><use xlink:href=\"assets/img/svg/sprite/svg-sprite.svg#prev\"></use></svg>",
                viewerImgNext: "<svg class=\"portfolio__svg portfolio__svg_size\"><use xlink:href=\"assets/img/svg/sprite/svg-sprite.svg#next\"></use></svg>",
                galleryMoreButton: "<svg class=\"portfolio__svg-moreBtn\"><use xlink:href=\"assets/img/svg/sprite/svg-sprite.svg#photo\"></use></svg>"
            }

        });

    }());

    //----------------------<<swiper>>----------------------\\
    const mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

    //----------------------<<form validate>>----------------------\\
    $.validate({
        scrollToTopOnError: false,
        validateOnBlur : false,
        errorMessagePosition : 'top'
    });

    //----------------------<<project menu>>----------------------\\

    //debounce script
    (function($) {

        const debounce = (callback, delay) => {
            let timeout;
            return function(...array) {

                timeout = clearTimeout(timeout, array);
                timeout = setTimeout(() => {
                    callback.apply(this, array);
                    timeout = 0;
                }, delay);

                return this;
            };
        };

        $.extend($.fn, {
            debounce: function(event, callback, delay) {
                this.bind(event, debounce.apply(this, [callback, delay]));
            }
        });
    })(jQuery);

    //menu script
    $('.menu-switch').debounce('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            menu = $('.project-menu'),
            btnShow = $('.show-btn'),
            btnHide = $('.hide-btn'),
            duration = 10000;

        if(!$this.hasClass('pressed')) {

            $this.addClass('pressed');

            menu.animate({
                height : 900
            }, duration);

            btnShow.fadeOut(duration, function () {
                btnHide.fadeIn(duration);
            });

        } else {

            $this.removeClass('pressed');

            menu.animate({
                height: 0
            }, duration);

            btnHide.fadeOut(duration, function () {
                btnShow.fadeIn(duration);
            });
        }
    }, 200);

});