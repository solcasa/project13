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
    });
})