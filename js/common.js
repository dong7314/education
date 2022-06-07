$(function(){
  // 타이핑
  function autoType(elementClass, typingSpeed, innerText){
    let thisElem = $(elementClass);
    // console.log(thisElem);
    thisElem.prepend('<div class="cursor" style="left: 0; right: initial;"></div>');
    thisElem = thisElem.find('.text');
    thisElem.text(innerText);
    let text = thisElem.text().trim().split('');
    // console.log(text);
    thisElem.text('');
    let amntOfChars = text.length;
    // console.log(amntOfChars);
    let newString = '';

    setTimeout(function(){
      thisElem.css('opacity', '1');
      thisElem.prev().removeAttr('style');
      for( let i = 0; i < amntOfChars; i++) {
        (function(count, char){
          setTimeout(function(){
            newString += char;
            thisElem.text(newString);
          }, count*typingSpeed);
        })(i+1, text[i])
      }
    }, 1500);
  };

  $(function(){
    autoType('.typing', 100, 'Hi! This is <b>LDY</b> Web Site!');
  });

  setTimeout(function(){
    $('.section1 p').css('opacity', '1');
  }, 4800);

  // section2 jquery
});
