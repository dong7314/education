$(function(){
  // video random 설정
  let videoNum = Math.floor(Math.random()*4) + 1;
  $(`.video-box video:nth-child(${videoNum})`).css('z-index', '2');

  // lang-box click 이벤트
  $('.globe').click(function(){
    // if ( $('.lang-box').hasClass('.dis') ) {
    //   $('.lang-box').removeClass('.dis');
    // } else {
    //   $('.lang-box').addClass('.dis');
    // }
    $('.lang-box').toggle();
  });

  // ul li hover 시 transition으로 그림자, 위치 변경 함수
  function hoverFunc(content) {
    $(`.${content} ul li`).hover(function(){
      $(this).css('cursor', 'pointer');
      $(this).css('transition', '.3s').css('transform', 'translateY(-5px)').css('box-shadow', '0 5px 10px rgba(0, 0, 0, 0.1)');
    }, function(){
      $(this).css('transition', '.3s').css('transform', 'translateY(0)').css('box-shadow', '0 0 0 rgba(0, 0, 0, 0)');
    });
  }
  hoverFunc('first');
  hoverFunc('third');

  // 두번째 컨텐츠 hover 설정
  $('.second a.select02').css('opacity', '0.5');
  $('.second .img-area img:last-child').css('opacity', '0');
  $('.second a.select01').hover(function(){
    $('.second a.select01').css('opacity', '1').css('transition', '.2s');
    $('.second a.select02').css('opacity', '0.5').css('transition', '.2s');
    $('.second .img-area img:first-child').css('opacity', '1').css('transition', '.2s');
    $('.second .img-area img:last-child').css('opacity', '0').css('transition', '.2s');
  });
  $('.second a.select02').hover(function(){
    $('.second a.select02').css('opacity', '1').css('transition', '.2s');
    $('.second a.select01').css('opacity', '0.5').css('transition', '.2s');
    $('.second .img-area img:first-child').css('opacity', '0').css('transition', '.2s');
    $('.second .img-area img:last-child').css('opacity', '1').css('transition', '.2s');
  });



  // 다섯번째 컨텐츠 버튼 display 설정
  let textHeight = [];
  $('.content.fifth .textarea').each(function(){
    textHeight.push($(this).outerHeight());
    $(this).css('display', 'none');
  });

  $('.fifth button.btn').click(function(){
    if ( $(this).find('span').hasClass('click-rotate') ) {
      $(this).find('span').css('transition', '.3s').css('transform', 'rotate(0)');
      $(this).find('span').removeClass('click-rotate');
      $(this).next().slideUp('slow', 'swing');
      $('.fifth').animate({'height': '-='+ textHeight[$(this).parent().index()] +'px'}, 600);
    } else {
      $(this).find('span').css('transition', '.3s').css('transform', 'rotate(180deg)');
      $(this).find('span').addClass('click-rotate');
      $(this).next().slideDown('slow', 'swing');
      $('.fifth').animate({'height': '+='+ textHeight[$(this).parent().index()] +'px'}, 600);
    };
  });
});
