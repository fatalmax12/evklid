var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
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
})


window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#header-nav-id').addEventListener('click', function (el) {
    if (document.documentElement.clientWidth <= 1300) {
      document.querySelector('#header-nav-list-id').classList.toggle('burger-menu')
      document.querySelectorAll('.header-nav-item').forEach(function (el) {
        el.classList.toggle('burger-menu-link')
      })
    }
  })
})