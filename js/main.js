var Swipes = new Swiper(".swiper-container", {
    speed: 500,
    effect: "fade",
    slidesPerView: "auto",
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




var swiper2 = new Swiper(".swiper-Stories", {
    speed: 500,
    spaceBetween: 10,
    slidesPerView: 2,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiperbtnright",
        prevEl: ".swiperbtnleft",
      },
      breakpoints: {
        // when window width is <= 499px
        0: {
            slidesPerView: 1
        },
        499: {
            slidesPerView: 1,
        },
        999: {
            slidesPerView: 2,
        }
    }
  });
var swiper = new Swiper(".swiper-container3", {
    speed: 500,
    spaceBetween: 10,
    slidesPerView: 6,
      navigation: {
        nextEl: ".swiperbtnright",
        prevEl: ".swiperbtnleft",
      },

      breakpoints: {
        // when window width is <= 499px
        0: {
            slidesPerView: 4,
        },
        499: {
            slidesPerView: 4,
        },
        999: {
            slidesPerView: 6,
        }
    }
  });
var swiper = new Swiper(".swiper-subscribe", {
    speed: 500,
    spaceBetween: 30,
    slidesPerView: 3,
 
      breakpoints: {
        // when window width is <= 499px
        0: {
            slidesPerView: 1
        },
        499: {
            slidesPerView: 1,
        },
        999: {
            slidesPerView: 3,
        }
    }
  });
var swiper = new Swiper(".swiper-media", {
    speed: 500,
    spaceBetween: 20,
    slidesPerView: 3,
 
      breakpoints: {
        // when window width is <= 499px
        0: {
            slidesPerView: 2
        },
        499: {
            slidesPerView: 2,
        },
        999: {
            slidesPerView: 4,
        }
    }
  });


  $(".navIcon").click(function() {
    $(".header__center").toggleClass("active")
    $(".blackInner").toggleClass("active")
  })
  $(".blackInner").click(function() {
    $(".blackInner").removeClass("active")
    $(".header__center").removeClass("active")
  })
  $(".FoodSection2thead ul li a").click(function(e) {
    e.preventDefault()
    $(".FoodSection2thead ul li a").removeClass("active")
    $(this).addClass("active")
  })


  $(".loaderr").hide()
  // setTimeout(() => {
  // }, 3000);