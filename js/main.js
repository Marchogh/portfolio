$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

$('.menu-burger, .menu-items').on('click', function() {
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});