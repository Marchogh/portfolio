$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});


$("#contact").submit(function (e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function () {
    alert("Thank you!");
  });
});