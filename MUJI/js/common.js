$(function(){
  // advertise active
  $('.close-btn').click(function(){
    $('#top-banner').css('display', 'none');
  });

  // search-bar active
  $('.search-bar').click(function(){
    $('.guide-banner').css('display', 'block');
  });

  $('.guide-banner .top a').each(function(){
    $(this).click(function(){
      $('.guide-banner .top a').each(function(){
        $(this).removeClass('on');
      });
      $(this).addClass('on');
      if ( $(this).text() == '인기 검색어' ) {
        $('.popular-search').css('display', 'none');
        $('.latest-search').css('display', 'block');
        $('.guide-footer-left').css('display', 'none');
        $('.guide-footer-right .delete').css('display', 'none');
      } else {
        $('.popular-search').css('display', 'block');
        $('.latest-search').css('display', 'none');
        $('.guide-footer-left').css('display', 'inline-block');
        $('.guide-footer-right .delete').css('display', 'inline');
      }
      return false;
    });
  });

  $('.guide-footer-right span:nth-child(2)').click(function(){
    $('.guide-banner').css('display', 'none');
  });

  $(window).click(function(e){
  	if(!$(e.target).hasClass('search-active')){
      $('.guide-banner').css('display', 'none');
    }
  });
});
