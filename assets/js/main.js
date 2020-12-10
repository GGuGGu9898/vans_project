$(document).ready(function() {

  //cnt3 accodian 
  var _acco = $('.accordion');

  //1) 초기설정
  _acco.find('.tit .accoheader').attr('aria-expanded', false);
  _acco.find('.accopanel').hide();
  //2) 키보드 제어 이벤트 - keydown : 방향키 제어 : 아래방향키(40), 위방향키(38), home(36), end(35)
  _acco.find('.tit .accoheader').on('keydown', function (e) {
    var key = e.keyCode;
    console.log(key);
    switch (key) {
      case 40: //아래방향키
        if ($(this).hasClass('last')) { //마지막이어서 처음으로 되돌리는 경우
          $(this).closest('.accordion').find('.tit .first').focus();
        } else { //마지막이 아니어서 다음 버튼으로 가는 경우
          $(this).parent().next().next().children().focus();
        }
        break;
      case 38: //위방향키
        if ($(this).hasClass('first')) { //가장 처음인 경우 마지막으로 되돌려주기
          $(this).closest('.accordion').find('.tit .last').focus();
        } else {//처음이 아니어서 위에 위치한 버튼으로 가는 경우
          $(this).parent().prev().prev().children().focus();
        }
        break;
      case 36: //home키
        e.preventDefault(); //문서의 가장 처음으로 가는 기본기능 차단
        $(this).closest('.accordion').find('.tit .first').focus();
        break;
      case 35: //end키
        e.preventDefault(); //문서의 가장 마직막으로 가는 기본기능 차단
        $(this).closest('.accordion').find('.tit .last').focus();
        break;
      // enter, space bar를 누르면 클릭이벤트가 생성되므로 중복되어 제거
    }
  });

  //3) 마우스 제어 이벤트 - click
  _acco.find('.tit .accoheader').on('click', function () {
    if ( !$(this).parent().hasClass('on') ) { //닫겨져 있는 경우=>열어주기
      //아코디언 헤더: 나자신에게 aria-expanded/aria-disabled속성 추가 => 부모.on => .tit.on나머지 형제중 .on 클래스제거 => 자식 버튼태그 선택 => aria-expanded
      $(this).attr({'aria-expanded': true, 'aria-disabled': false}).parent().addClass('on').siblings('.tit.on').removeClass('on').children().attr('aria-expanded', false);
      //아코디언 패널 : 나자신 뒤 패널은 열어주고(포커스 추가0) => 나머지 패널은 닫아주기(포커스도 제거 -1)
      $(this).parent().next().stop().slideDown('fast').attr('tabIndex', 0).siblings('.accopanel').stop().slideUp('fast').attr('tabIndex', -1);
    } else { //열려져 있는 경우 => 닫아주기
      $(this).attr('aria-expanded', false).removeAttr('aria-disabled').parent().removeClass('on').next().stop().slideUp('fast').attr('tabIndex', -1);
    }
  })
  //cnt4 bxSlider
  $(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      prevText: '<img src="assets/images/main/prev.png" height="130" width="138"/><span class="blind-b">이전 슬라이드</span>',   
      nextText: '<img src="assets/images/main/next.png" height="130" width="138"/><span class="blind-b">다음 슬라이드</span>',
      pager: false, 
      touchEnabled: true,
    });
  });
});
    
    