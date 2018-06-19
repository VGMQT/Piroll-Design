$(document).ready(function () {

    //----------------------<<svg for ie>>----------------------\\
    (function () {
        svg4everybody();
    }());

    //----------------------<<one page scroll>>----------------------\\
    (function () {
        $('#fullpage').fullpage({

            anchors:['first', 'second', 'third'],
            navigation: false,
            scrollBar: false,
            autoScrolling: false,
            fitToSection: true,
            fitToSectionDelay: 1000

        });
    }());

    //----------------------<<gallery>>----------------------\\
    (function () {

        const custTheme= {
            background:     'rgba(#000000, .5)', imageBorder: 'none', imageBoxShadow: 'none',
            barBackground:  'rgba(red, .5)', barBorder: '0px solid #ffffff', barColor: '#ffffff', barDescriptionColor: 'blue'
        };

        $("#nanogallery2").nanogallery2( {
            <!-- ### gallery settings ### -->
            thumbnailHeight:  300,
            thumbnailWidth:   300,
            thumbnailAlignment: 'center',
            thumbnailGutterWidth: 0,
            thumbnailGutterHeight: 0,
            thumbnailBorderHorizontal: 0,
            thumbnailBorderVertical: 0,
            itemsBaseURL:     '../assets/img/portfolio/',

            <!-- ### gallery content ### -->
            items: [
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'},
                { src: 'portfolio1.jpg', srct: 'thumb1.jpg'}
            ],
            thumbnailDisplayTransition: 'scaleUp',
            thumbnailDisplayTransitionDuration: 1000,
            thumbnailHoverEffect2: {
                name:           'imageScale150Outside',
                duration:       10000,
                durationBack:   1000,
            },
            galleryDisplayMode: 'moreButton',
            galleryDisplayMoreStep: 2,
            galleryMaxRows: 2,
            thumbnailLabel: {
                display: false
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
            icons: {
                buttonClose: "<svg class=\"portfolio__svg\"><use xlink:href=\"assets/img/svg/sprite/svg-sprite.svg#close\"></use></svg>",
                viewerImgPrevious: "<svg class=\"portfolio__svg portfolio__svg_size\"><use xlink:href=\"assets/img/svg/sprite/svg-sprite.svg#prev\"></use></svg>",
                viewerImgNext: "<svg class=\"portfolio__svg portfolio__svg_size\"><use xlink:href=\"assets/img/svg/sprite/svg-sprite.svg#next\"></use></svg>"
            },
            viewerTheme: custTheme
        });

    }());

});