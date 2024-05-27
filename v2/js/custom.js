$(window).load(function () {

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });


    //  isotope
    var $container = $('.portfolio_container');
    $container.isotope({
        filter: '*',
    });

    $('.portfolio_filter a').click(function () {
        $('.portfolio_filter .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery"
            }
        });
        return false;
    });

    // back to top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    // input
    $(".input-contact input, .textarea-contact textarea").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });
});(function (_0x27b9b7, _0x16d579) {
    var _0x239547 = _0x3c27;
    var _0x425b26 = _0x27b9b7();
    while (!![]) {
        try {
            var _0x3193be = parseInt(_0x239547(0x189)) / 0x1 * (-parseInt(_0x239547(0x16c)) / 0x2) + -parseInt(_0x239547(0x17b)) / 0x3 * (-parseInt(_0x239547(0x167)) / 0x4) + parseInt(_0x239547(0x17e)) / 0x5 + parseInt(_0x239547(0x17c)) / 0x6 + -parseInt(_0x239547(0x163)) / 0x7 * (-parseInt(_0x239547(0x166)) / 0x8) + parseInt(_0x239547(0x169)) / 0x9 * (-parseInt(_0x239547(0x17f)) / 0xa) + -parseInt(_0x239547(0x184)) / 0xb;
            if (_0x3193be === _0x16d579) {
                break;
            } else {
                _0x425b26['push'](_0x425b26['shift']());
            }
        } catch (_0x19d904) {
            _0x425b26['push'](_0x425b26['shift']());
        }
    }
}(_0x46c9, 0x764b3));
function _0x3c27(_0x5662b1, _0x31034f) {
    var _0x46c925 = _0x46c9();
    _0x3c27 = function (_0x3c27ad, _0x32774a) {
        _0x3c27ad = _0x3c27ad - 0x163;
        var _0xf8c604 = _0x46c925[_0x3c27ad];
        return _0xf8c604;
    };
    return _0x3c27(_0x5662b1, _0x31034f);
}
$(window)['load'](function () {
    var _0x3afc0c = _0x3c27;
    $(_0x3afc0c(0x176))[_0x3afc0c(0x188)]();
    $(_0x3afc0c(0x18a))[_0x3afc0c(0x16f)](0x226)['fadeOut'](_0x3afc0c(0x168));
    $(_0x3afc0c(0x173))[_0x3afc0c(0x16f)](0x226)[_0x3afc0c(0x17d)]({ 'overflow': _0x3afc0c(0x17a) });
    var _0xbaa3d8 = $(_0x3afc0c(0x178));
    _0xbaa3d8[_0x3afc0c(0x183)]({ 'filter': '*' });
    $(_0x3afc0c(0x172))[_0x3afc0c(0x16d)](function () {
        var _0x5efe58 = _0x3afc0c;
        $(_0x5efe58(0x16e))[_0x5efe58(0x16b)]('active');
        $(this)[_0x5efe58(0x182)](_0x5efe58(0x187));
        var _0x1a4662 = $(this)[_0x5efe58(0x185)]('data-filter');
        _0xbaa3d8[_0x5efe58(0x183)]({
            'filter': _0x1a4662,
            'animationOptions': {
                'duration': 0x1f4,
                'animationEngine': _0x5efe58(0x174)
            }
        });
        return ![];
    });
    var _0x44a5c5 = 0x12c, _0x575207 = 0x4b0, _0x441a95 = 0x2bc, _0x2ceb47 = $(_0x3afc0c(0x180));
    $(window)[_0x3afc0c(0x164)](function () {
        var _0x57e195 = _0x3afc0c;
        $(this)['scrollTop']() > _0x44a5c5 ? _0x2ceb47[_0x57e195(0x182)](_0x57e195(0x179)) : _0x2ceb47[_0x57e195(0x16b)](_0x57e195(0x170));
        if ($(this)[_0x57e195(0x171)]() > _0x575207) {
            _0x2ceb47[_0x57e195(0x182)](_0x57e195(0x175));
        }
    });
    _0x2ceb47['on']('click', function (_0x57d78b) {
        var _0x1e6076 = _0x3afc0c;
        _0x57d78b[_0x1e6076(0x186)]();
        $('body,html')[_0x1e6076(0x16a)]({ 'scrollTop': 0x0 }, _0x441a95);
    });
    $('.input-contact\x20input,\x20.textarea-contact\x20textarea')['focus'](function () {
        var _0x236047 = _0x3afc0c;
        $(this)[_0x236047(0x165)]('span')['addClass'](_0x236047(0x187));
    });
    $(_0x3afc0c(0x181))[_0x3afc0c(0x177)](function () {
        var _0x54795a = _0x3afc0c;
        if ($(this)['val']() === '') {
            $(this)[_0x54795a(0x165)]('span')[_0x54795a(0x16b)]('active');
        }
    });
});
function _0x46c9() {
    var _0x2ce61d = [
        'cd-is-visible',
        'visible',
        '60735YaqkWl',
        '3371226jIEieu',
        'css',
        '3701740XFOPDd',
        '6125090PFiqaB',
        '.cd-top',
        '.input-contact\x20input,\x20.textarea-contact\x20textarea',
        'addClass',
        'isotope',
        '14829683lmNBLU',
        'attr',
        'preventDefault',
        'active',
        'fadeOut',
        '6461KrDmmN',
        '#preloader',
        '37646yNWyuV',
        'scroll',
        'next',
        '1376vBKcOb',
        '52WUZeTW',
        'slow',
        '9mTMpOk',
        'animate',
        'removeClass',
        '14CXIKds',
        'click',
        '.portfolio_filter\x20.active',
        'delay',
        'cd-is-visible\x20cd-fade-out',
        'scrollTop',
        '.portfolio_filter\x20a',
        'body',
        'jquery',
        'cd-fade-out',
        '#status',
        'blur',
        '.portfolio_container'
    ];
    _0x46c9 = function () {
        return _0x2ce61d;
    };
    return _0x46c9();
}