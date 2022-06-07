$(function(){

  // gnb 메뉴 속성 추가
  $('.gnb li').hover(function(){
    $(this).addClass('selectBar');
    $('.gnb li').each(function(){
      if ( $(this).hasClass('selectBar') == false ) {
        $(this).css('opacity', '.5');
        $(this).css('transition', '.2s');
      } else {
        $(this).css('opacity', '1');
        $(this).css('transition', '.2s');
      }
    });
  }, function(){
    $(this).removeClass('selectBar');
    $('.gnb li').css('opacity', '.5');
  });

  // search 속성 추가
  $('#header .right-area .glass .magnifying').click(function(){
    $('#header .input-area').css('right', '20px').css('opacity', '1');
    $('.overlay').css('right', '0');
    $('#header .gnb').css('display', 'none');
  });

  $('#header .input-area .xbutton .xbtn').click(function(){
    $('#header .input-area').css('right', '-650px').css('opacity', '0');
    $('.overlay').css('right', '');
    $('#header .gnb').css('display', 'block');
  })

  // messenger 버튼 rotate 설정
  $('#header h1 > span').click(function(){
    if ( $(this).find('div').hasClass('rotate') ) {
      $(this).find('div').css('transform', 'rotate(0)').css('transition', '.2s');
      $(this).find('div').removeClass('rotate');
    } else {
      $(this).find('div').css('transform', 'rotate(180deg)').css('transition', '.2s');
      $(this).find('div').addClass('rotate');
    }
  });

  // lang-box click 이벤트
  $('.globe').click(function(){
    $('.lang-box').toggle();
  });
  $('#header h1 > span').click(function(){
    $('.lang-box1').toggle();
  });


  // ul li hover 시 transition으로 그림자, 위치 변경 함수
  function hoverFunc(content) {
    $(`.${content} ul li`).hover(function(){
      $(this).find('img').css('cursor', 'pointer');
      $(this).find('img').css('transition', '.3s').css('transform', 'translateY(-5px)').css('box-shadow', '0 5px 10px rgba(0, 0, 0, 0.1)');
    }, function(){
      $(this).find('img').css('transition', '.3s').css('transform', 'translateY(0)').css('box-shadow', '0 0 0 rgba(0, 0, 0, 0)');
    });
  }
  hoverFunc('container');

  // img 추가 방식
  $('.wrap .container ul li').each(function(){
    let titleName = $(this).find('h5').text();
    $(this).find('img').attr('src', `./img/img_${titleName}.svg`);
  })


  // footer 메뉴 속성 추가
  $('#footer ul li').hover(function(){
    $(this).addClass('selectBar');
    $('#footer ul li').each(function(){
      if ( $(this).hasClass('selectBar') == false ) {
        $(this).css('opacity', '.5');
        $(this).css('transition', '.2s');
      } else {
        $(this).css('opacity', '1');
        $(this).css('transition', '.2s');
      }
    });
  }, function(){
    $(this).removeClass('selectBar');
    $('#footer ul li').css('opacity', '1');
  });

  $(function(){
		$("html, body").animate({ scrollTop: 0 }, 1);
	});
});
