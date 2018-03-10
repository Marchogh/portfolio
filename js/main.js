/* Smooth scroll */
$('a[href^="#"]').on('click', function(event) {

  var target = $(this.getAttribute('href'));

  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 600);
  }

});

/* Nav toggle */
const navToggle = document.querySelector('.menu-button')
const nav = document.querySelector('nav')
const containerAll = document.querySelector('.container-all')

const containerAllStyle = containerAll.style
const bodyClassList = document.body.classList

navToggle.addEventListener('click', _ => {
  containerAllStyle.transition = 'transform 250ms ease-in-out'
  bodyClassList.toggle('nav-is-open')
})

nav.addEventListener('click', _ => {
  containerAllStyle.transition = '0ms'
  bodyClassList.remove('nav-is-open')
})