$(document).ready(function () {

    $(window).on('resize', function () {
        var widthW = $(this).width();
        if (widthW > 1080) { //pc
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
        } else {
            var _mGnb = $('.mnav_wrap');
            var _first = _mGnb.find('.first');
            var _last = _mGnb.find('.last');
            _mGnb.find('.depth2').hide();
            

            $('.mnavOpenBtn').on('click', function() {
                var _openBtn = $(this);
                _mGnb.css({visibility : 'visible'}).stop().animate({top:0},function () {
                    $(this).find('.first').focus();
                });

                _mGnb.find('.m_Gnb > ul > li > a').on('click', function (e) {
                    e.preventDefault();
                    _mGnb.find('.m_Gnb > ul > li.on').removeClass('on').children('ul').stop().slideUp();
                    $(this).next().stop().slideToggle().parent().toggleClass('on');
                });

                _first.on('keydown', function (e) {
                    console.log(e.keyCode);  //tab => 9
                    if ( e.shiftKey && e.keyCode === 9 ) {
                      e.preventDefault();
                      _last.focus();
                    }
                  })
              
                  //_last에서 (shift는 누르면 안됨)tab만 눌러 다음으로 나가는 경우 처음으로 포커스 이동
                  _last.on('keydown', function (e) {
                    if (!e.shiftKey && e.keyCode === 9) {
                        console.log(e.keyCode);
                      e.preventDefault();
                      _first.focus();
                    }
                  });
            });
            _mGnb.find('.btn_close').on('click', function() {
                _mGnb.stop().animate({top:'-100%'},function () {
                    $(this).css({visibility : 'hidden'})
                    _openBtn.focus();
                });
            });
        }
    });


    $(window).trigger('resize');

});