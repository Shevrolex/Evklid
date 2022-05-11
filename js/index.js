/* swiper */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    type:'bullets',
    el: '.swiper-bullet-pagination',
    clickable: true,
    dynamicBullets: true
  },
  a11y : {
    paginationBulletMessage: 'Переход к слайду {{index}}'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


/* tabs */

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.steps__button').forEach(function(stepsBtn) {

    stepsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })

      document.querySelectorAll('.steps__button').forEach(function(tabButton) {
        tabButton.classList.remove('tabs__colors')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      event.currentTarget.classList.add('tabs__colors')
    })
  })
})

/* accordion */

$( function() {
  $( "#accordion" ).accordion({
    icons: false,
    collapsible: true,
    heightStyle: "content",
    active: false
  });
} );


/* burger */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".container__header__burger__btn").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.add("active");
  })
  document.querySelector(".nav__close").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.remove("active");
  })
})


/* search */

document.addEventListener('DOMContentLoaded', function() {

  document.querySelector(".header__button").addEventListener("click", function() {
    document.querySelector(".header__button__form").classList.add("form__active");
    this.classList.add("active");
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header__button__form");
    if (!target.closest(".header__form")) {
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".header__button").classList.remove("active")
    }
  })

  document.querySelector(".header__btn_close").addEventListener("click", function() {
    document.querySelector(".header__button__form").classList.remove("form__active");
    document.querySelector(".header__button").classList.remove("active");
    /*this.classList.add("active");*/
  })


})
