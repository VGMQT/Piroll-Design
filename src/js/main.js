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
            scrollOverflow: true

        });
    }());

});