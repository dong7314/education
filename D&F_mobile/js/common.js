$(function(){
  // back to top btn
  $(window).scroll(function(){
    let backToTop = $('.back-to-top');
    if ( $(this).scrollTop() != 0 ) {
      backToTop.addClass('on');
    } else {
      backToTop.removeClass('on');
    }
  });

  // lgnb
  $('a.bar-left').click(function(){
    $('#lgnb').addClass('on');
    $('#lgnb-wrapper').addClass('on');
    $('html').css('overflow', 'hidden');
    return false;
  });
  $('.lgnb-top, #lgnb-wrapper').click(function(){
    $('#lgnb').removeClass('on');
    $('#lgnb-wrapper').removeClass('on');
    $('html').css('overflow', 'auto');
  });

  $('.lgnb-header ul li:nth-child(2) a').click(function(){
    $('.lgnb-header ul li:nth-child(2)').addClass('on');
    $('.lgnb-header ul li:nth-child(1)').removeClass('on');
    $('.mobile').css('display', 'flex');
    $('.pc').css('display', 'none');
    $('.scrollbar').css('display', 'none');
  });

  $('.lgnb-header ul li:nth-child(1) a').click(function(){
    $('.lgnb-header ul li:nth-child(1)').addClass('on');
    $('.lgnb-header ul li:nth-child(2)').removeClass('on');
    $('.mobile').css('display', 'none');
    $('.pc').css('display', 'flex');
    $('.scrollbar').css('display', 'block');
  });

  // lgnb scrollbar
  let lmainHeight = $('.lgnb-main-wrap').height();
  let lsectionHeight = $('.lgnb-section').outerHeight();
  let scrollbarHeight = $('.lgnb-scrollbar').height();
  let scrollbarRate = lmainHeight / lsectionHeight;
  let heightRate = lsectionHeight - lmainHeight;
  $('.lgnb-scrollbar .scrollbar').css('height', `calc(${scrollbarRate * 100}% - 10px )`);
  $('.lgnb-main-wrap').hover(function(){
    $('.scrollbar').css('opacity', '1');
  }, function(){
    $('.scrollbar').css('opacity', '0');
  }).scroll(function(){
    lmainHeight = $('.lgnb-main-wrap').height();
    lsectionHeight = $('.lgnb-section').outerHeight();
    scrollbarHeight = $('.lgnb-scrollbar').height();
    scrollbarRate = lmainHeight / lsectionHeight;
    heightRate = lsectionHeight - lmainHeight;
    $('.lgnb-scrollbar .scrollbar').css('height', `calc(${scrollbarRate * 100}% - 10px )`);
    let lmainscrollTop = $('.lgnb-main-wrap').scrollTop();
    $('.lgnb-scrollbar .scrollbar').css('top',  `${5+(lmainscrollTop/heightRate)*(scrollbarHeight*(1-scrollbarRate))}px`);
  });

  // messege-btn
  $('.messege-btn').click(function(){
    if ( $(this).hasClass('changed') ) {
      $(this).animate({
        marginLeft: 0,
        width: 80,
      }, 200);
      $('#sidebar').animate({marginLeft: -220}, 200);
      $('.messege-btn span:nth-of-type(1)').animate({
        marginLeft: 55,
        marginTop: 17,
        width: 8,
        height: 2,
      }, 200);
      $('.messege-btn span:nth-of-type(2)').animate({
        marginLeft: 55,
        marginTop: 3,
        width: 8,
        height: 2,
      }, 200);
      $('.messege-btn span').css('background', '#b71c08');
    } else {
      $(this).animate({
        marginLeft: 220,
        width: 40,
      }, 200);
      $('#sidebar').animate({marginLeft: 0}, 200);
      $('.messege-btn span:nth-of-type(1)').animate({
        marginLeft: 7.5,
        marginTop: 19,
        width: '60%',
        height: 3,
      }, 200);
      $('.messege-btn span:nth-of-type(2)').animate({
        marginLeft: 7.5,
        marginTop: -3,
        width: '60%',
        height: 3,
      }, 200);
      $('.messege-btn span').css('background', '#b7b7b7');
    }
    $(this).toggleClass('changed');
  });

  // messege-btn display flex
  $(window).scroll(function(){
    let winScroll = $(this).scrollTop();
    if ( winScroll >= 62 ) {
      $('.messege-btn').css('position', 'fixed').css('top', '0');
      $('#sidebar').css('position', 'fixed').css('height', '100vh');
      $('#sidebar ul li:nth-child(4)').css('height', 'calc( 100vh - 533px )');
    } else {
      $('.messege-btn').css('position', 'absolute').css('top', '62px');
      $('#sidebar').css('position', 'relative').css('height', 'calc( 100vh - 62px )');
      $('#sidebar ul li:nth-child(4)').css('height', 'calc( 100vh - 595px )');
    }
  });

  //age btn
  $('.age12').click(function(){
    $(this).css('background-color', '#222222').css('color', '#b5b5b5');
    $('.age18').css('background-color', '#333333').css('color', '#818181');
  });
  $('.age18').click(function(){
    $(this).css('background-color', '#222222').css('color', '#b5b5b5');
    $('.age12').css('background-color', '#333333').css('color', '#818181');
  });

  // sidebar hover 시 border-left 속성 변경
  $('#sidebar ul li:nth-child(3) a').hover(function(){
    $(this).parent().css('border-left', '4px solid #b71c08');
  }, function(){
    $(this).parent().css('border-left', '4px solid #5e5e5e');
  });

  // quick icon 생성
  $('.quick ul li a').hover(function(){
    $(this).find('div').css('opacity', '1');
  }, function(){
    $(this).find('div').css('opacity', '0');
  });

  // quick btn animation
  $('.quick ul li a, .back-to-top, #section0 > ul li a').click(function(){
    let thisHash = $(this.hash);
    let isAni = $('html,body').is(':animated');
    if ( !isAni ) {
      $('html,body').animate({ scrollTop : thisHash.offset().top }, 600, 'swing');
    }
    return false;
  });

  // animation
  $(window).scroll(function(){
    let winScroll = $(this).scrollTop();
    $('.part').each(function(){
      let secOffset = $(this).offset().top;
      let secHeight = $(this).height();
      if ( winScroll >= secOffset - 400 && winScroll < secOffset + secHeight ) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });

  // section0, bg-load
  $('.messege-btn').click();
  $('#bg-load').addClass('active');
  setTimeout(function(){
    $('#section0').addClass('active');
    $('#bg-load').css('z-index', '0');
  }, 1000);

  // section1 lightning
  let lightTime = setInterval(function(){
    $('#section1 .lightning .lt').each(function(){
      let lightningNum = $(this);
      let randomTime = setInterval(function(){
        let randomNum = Math.random();
        lightningNum.css('transform', `skew(${randomNum}deg, ${randomNum}deg)`).css('opacity', `${randomNum}`);
      }, 10);
      setTimeout(function(){
        clearInterval(randomTime);
        lightningNum.css('opacity', 0).css('transform', 'skew(0)');
      }, 1000);
    });
  }, 4000);

  // section2 character click
  $('.cha2_2').click(function(){
    $('.cha2_2 img:nth-child(1)').css('display', 'block');
    $('.cha2_3 img:nth-child(1)').css('display', 'none');
    $('.frame').html('<iframe width="565" height="318" src="https://www.youtube.com/embed/nFeQC_3krDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  });
  $('.cha2_3').click(function(){
    $('.cha2_3 img:nth-child(1)').css('display', 'block');
    $('.cha2_2 img:nth-child(1)').css('display', 'none');
    $('.frame').html('<iframe width="565" height="318" src="https://www.youtube.com/embed/-_mDomrcz48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  });

  // section2 part active1 class add
  $(window).scroll(function(){
    let winScroll = $(this).scrollTop();
    if ( winScroll >= 2500 && winScroll < 3870 ) {
      $('#section2 > .part').addClass('active1');
    } else {
      $('#section2 > .part').removeClass('active1');
    }
  });

  // section3
  $('#section3 .swiper-slide .next').click(function(){
    $(this).parent().find('img:nth-of-type(1)').css('opacity', '0');
    $(this).parent().find('img:nth-of-type(2)').css('opacity', '1');
    $(this).css('background-position-y', '-304px');
    $(this).parent().find('button:nth-of-type(2)').css('background-position-y', '-424px');
  });
  $('#section3 .swiper-slide .prev').click(function(){
    $(this).parent().find('img:nth-child(2)').css('opacity', '0');
    $(this).parent().find('img:nth-child(1)').css('opacity', '1');
    $(this).css('background-position-y', '-304px');
    $(this).parent().find('button:nth-of-type(1)').css('background-position-y', '-424px');
  });

});
