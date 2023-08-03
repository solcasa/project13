$(function () {
    $('.Main').fullpage({
        anchors: ['main', 'sub01', 'sub02', 'footer'],
        navigation: true,
        css3: false,
        responsiveWidth: 700,
        afterRender: function () {
            $('.Main .section').eq(0).addClass('on')
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
    });

    $('.main_slide').slick({
        arrows: false,
    });


    $('.main .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });


    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main .slide_num span').text(c ? (c + 1) : 1);
        $('.main .slide_num strong').text(s.slideCount);

        console.log(s.slideCount)
    });


    $('button').click(function () {
        var $this = $(this);
        var index = $this.index();

        $this.addClass('active');
        $this.siblings('button.active').removeClass('active');

        var $outer = $this.closest('.outer');
        var $current = $outer.find(' > .tabs > .tab.active');
        var $post = $outer.find(' > .tabs > .tab').eq(index);

        $current.removeClass('active');
        $post.addClass('active');

        $('.slider').slick('setPosition');
    });



    $('.slider').slick({
        slidesToShow: 4,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.sns_container').slick({
        slidesToShow: 3,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });
});


//반응형
$(function () {


    $('.mopen').on('click', function () {
        $('.Header .top_nav').toggleClass('on');
    });

    $('.Header .top_nav>li>a').on('click', function (e) {
        if ($('.Header .top_nav').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
        }
    });


});

