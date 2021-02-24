window.onscroll = function(){fixedNav()};

var navbar = document.getElementById('navbar');

function fixedNav() {
  if(window.pageYOffset >= 50){
    navbar.classList.add('sticky');
  }
  else{
    navbar.classList.remove('sticky');
  }
}


// owl-carousel
$(document).ready(function(){
  $('.owl-one').owlCarousel({
    stagePadding: 0,
    loop:true,
    autoplay: true,
    margin:10,
    autoplayTimeout: 4000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-two').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay: true,
  smartSpeed: 2000,
  autoplayTimeout: 5000,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})
});