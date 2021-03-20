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

// product-detail-slider
// const imgs = document.querySelectorAll('.img-select a');
// const imgBtns = [...imgs];
// let imgId = 1;

// imgBtns.forEach((imgItem) => {
//     imgItem.addEventListener('click', (event) => {
//         event.preventDefault();
//         imgId = imgItem.dataset.id;
//         slideImage();
//     });
// });

// function slideImage(){
//     const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

//     document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
// }

// window.addEventListener('resize', slideImage);


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
$('.owl-three').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  autoplay: false,
  smartSpeed: 2000,
  autoplayTimeout: 5000,
  dots:false,
  responsive:{
      0:{
          items:3
      },
      600:{
          items:4
      },
      1000:{
          items:6.3
      }
  }
})




});