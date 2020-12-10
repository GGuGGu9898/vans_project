$(document).ready(function () {
    _pcGnb = $('#pcHeader .pcnav_wrap');
    _pcGnb.find('.dep2_wrap').addBack().hide();

    $('.navOpenBtn').on('click', function(){
        _pcGnb.stop().slideToggle('fast');
    });

    _pcGnb.find('.pcGnb > ul > li > a').on('mouseenter focus', function(){
        _pcGnb.find('.pcGnb > ul > li.on').removeClass('on').find('.dep2_wrap').hide();
        $(this).next().show().parent().addClass('on');

        _pcGnb.find('.pcGnb > ul').on('mouseleave', function (){
            _pcGnb.find('.pcGnb > ul > li.on').removeClass('on').find('.dep2_wrap').hide();
        });

        _pcGnb.find('.pcGnb a:first,.pcGnb a:last').on('blur', function () {
            setTimeout(function(){
                if (!_pcGnb.find('.pcGnb a').is(':focus')) {
                    _pcGnb.find('.pcGnb > ul').trigger('mouseleave');
                }
            }, 10);
        });
    });
});