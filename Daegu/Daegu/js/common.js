$(function(){
  // header

  // gnb 호버 시
  $('.gnb-hover').css('display', 'none');
  let isAni = $('.gnb-hover').is(':animated');
  $('#gnb li').hover(function(){
    if (!isAni) {
      $('.gnb-hover').slideDown(300);
    }
  });
  $('main').hover(function(){
    if(!isAni) {
      $('.gnb-hover').slideUp(300);
    }
  })

  // 로그인 랭귀지 클릭
  $('.util-wrap .login .lst').css('display', 'none');
  $('.util-wrap .language .lst').css('display', 'none');
  $('.util-wrap > ul > li').click(function(){
    if ( $('.lst' ,this).css('display') == 'block' ) {
      $('.lst' ,this).css('display', 'none');
      $(this).removeClass('active');
    } else {
      $('.util-wrap > ul .lst').css('display', 'none');
      $('.lst' ,this).css('display', 'block');
      $('.util-wrap > ul > li').removeClass('active');
      $(this).addClass('active');
    }
  });
  $('html').click(function(e) {
  	if(!$(e.target).hasClass("notClickArea")) {
      $('.util-wrap .login .lst').css('display', 'none');
      $('.util-wrap .language .lst').css('display', 'none');
      $('.util-wrap > ul > li').removeClass('active');
  	}
  });

  // content second 슬라이드
  let cSecondIndex = 1;
  $('.content-area.second .col1 .btn-next').click(function(){
    $(`.content-area.second .col1 .slide:nth-child(${cSecondIndex})`).css('opacity', '0');
    if ( cSecondIndex == 3) {
      cSecondIndex = 1;
    } else {
      ++cSecondIndex;
    }
    $(`.content-area.second .col1 .slide:nth-child(${cSecondIndex})`).css('opacity', '1');
    $('.content-area.second .col1 .btn-count span:first-child').text(`${cSecondIndex}`);
  });
  $('.content-area.second .col1 .btn-prev').click(function(){
    $(`.content-area.second .col1 .slide:nth-child(${cSecondIndex})`).css('opacity', '0');
    if ( cSecondIndex == 1) {
      cSecondIndex = 3;
    } else {
      --cSecondIndex;
    }
    $(`.content-area.second .col1 .slide:nth-child(${cSecondIndex})`).css('opacity', '1');
    $('.content-area.second .col1 .btn-count span:first-child').text(`${cSecondIndex}`);
  });

  let cSecondAutoSlide = setInterval(function(){
    $('.content-area.second .col1 .btn-next').trigger('click');
  }, 4000);
  $('.content-area.second .col1 .btn-stop').click(function(){
    if( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      clearInterval(cSecondAutoSlide);
    } else {
      $(this).addClass('active');
      cSecondAutoSlide = setInterval(function(){
        $('.content-area.second .col1 .btn-next').trigger('click');
      }, 4000);
    }
  });

  let wtWrapper = $('.wt-slide-wrapper');
  const heightNum = $('.wt-slide-wrapper a').height();
  let aLeng = $('.wt-slide-wrapper a').length;

  $('.wt-slide-area').height(heightNum);
  wtWrapper.height(heightNum*aLeng);

  initialFunc();

  // 슬라이드 포지션 초기화 함수
  function initialFunc() {
    $('.wt-slide-wrapper').css('margin-top', -heightNum);
    $('.wt-slide-wrapper a:first').appendTo('.wt-slide-wrapper');
  }

  setInterval(function(){
    let wrpperMarginTop = parseInt(wtWrapper.css('margin-top'));
    let isAni = wtWrapper.is(':animated');
    if ( !isAni ) {
      wtWrapper.animate({ marginTop: wrpperMarginTop - heightNum }, 'normal', 'swing', function(){
        initialFunc();
      });
    };
  }, 4000);

  // content fifth
  let cFifthLi = $('.content-area.fifth .col1 ul li');
  cFifthLi.click(function(){
    if ($(this).index() < 3) {
      cFifthLi.each(function(){
        $(this).removeClass('on');
        $(this).find('a').removeClass('on');
      });
      $(this).addClass('on');
      $(this).find('a').addClass('on');

      $('.content-area.fifth .col2 ul').each(function(){
        $(this).css('display', 'none');
      });

      if($(this).index() == 0) {
        $('.content-area.fifth .col2 .notice').css('display', 'flex');
      } else if($(this).index() == 1) {
        $('.content-area.fifth .col2 .report').css('display', 'flex');
      } else if($(this).index() == 2) {
        $('.content-area.fifth .col2 .test-information').css('display', 'flex');
      }
      return false;
    }
  });

  // content sixth slide
  const widthNum = $('.swiper.six .swiper-wrapper.six .swiper-slide:last-child').outerWidth(true);
  let swiperLeng = $('.swiper.six .swiper-wrapper.six .swiper-slide').length;
  let swiperWrapper = $('.swiper.six .swiper-wrapper.six');

  $('.swiper-wrapper.six').width(widthNum*swiperLeng);

  function initialFunc2(init) {
    swiperWrapper.css('margin-left', `-${widthNum*2}px`);
    if ( init == '.btn-prev.six' ) {
      $('.swiper-wrapper.six .swiper-slide:last-child').prependTo('.swiper-wrapper.six');
      $('.swiper-wrapper.six .swiper-slide:last-child').prependTo('.swiper-wrapper.six');
    } else if ( init == '.btn-next.six' ) {
      $('.swiper-wrapper.six .swiper-slide:first-child').appendTo('.swiper-wrapper.six');
      $('.swiper-wrapper.six .swiper-slide:first-child').appendTo('.swiper-wrapper.six');
    }
  }

  initialFunc2('.btn-prev.six');

  function actionBtn2(elem){
    elem.click(function(){
      let swiperMarginLeft = parseInt(swiperWrapper.css('margin-left'));
      let isAni = swiperWrapper.is(':animated');
      if ( !isAni ) {
        if( elem.attr('id') == 'six-prev' ) {
          swiperWrapper.animate({ marginLeft: swiperMarginLeft + widthNum*2 }, 'slow', 'swing', function(){
            initialFunc2('.btn-prev.six');
          });
        } else if ( elem.attr('id') == 'six-next' ) {
          swiperWrapper.animate({ marginLeft: swiperMarginLeft - widthNum*2 }, 'slow', 'swing', function(){
            initialFunc2('.btn-next.six');
          });
        };
      };
    });
  }

  $('.btn').each(function(){
    actionBtn2($(this));
  });

  // content seventh
  $('.content-area.seventh .col2 > ul > li').click(function(){
    $('.content-area.seventh .col2 > ul > li').removeClass('active');
    $(this).toggleClass('active');
    if ( $(this).find('h2').text() == '자주찾는 메뉴' ) {
      $('.content-area.seventh .col2 .menu, .content-area.seventh .col2 .people, .content-area.seventh .col2 .buisness, .content-area.seventh .col2 .tour').css('display', 'none');
      $('.content-area.seventh .col2 .menu').css('display', 'block');
    } else if ( $(this).find('h2').text() == '시민' ) {
      $('.content-area.seventh .col2 .menu, .content-area.seventh .col2 .people, .content-area.seventh .col2 .buisness, .content-area.seventh .col2 .tour').css('display', 'none');
      $('.content-area.seventh .col2 .people').css('display', 'block');
    } else if ( $(this).find('h2').text() == '사업자' ) {
      $('.content-area.seventh .col2 .menu, .content-area.seventh .col2 .people, .content-area.seventh .col2 .buisness, .content-area.seventh .col2 .tour').css('display', 'none');
      $('.content-area.seventh .col2 .buisness').css('display', 'block');
    } else if ( $(this).find('h2').text() == '관광객' ) {
      $('.content-area.seventh .col2 .menu, .content-area.seventh .col2 .people, .content-area.seventh .col2 .buisness, .content-area.seventh .col2 .tour').css('display', 'none');
      $('.content-area.seventh .col2 .tour').css('display', 'block');
    }
  });

  // content nineth
  $('.content-area.nineth ul li').click(function(){
    $('.drag-box', this).toggleClass('active');
  });
});
