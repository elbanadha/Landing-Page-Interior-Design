const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const positionWindow = window.scrollY > 0;
    navbar.classList.toggle("scrolling-active" , positionWindow);
    sidebar.classList.remove("menu-active");
});

const menubar = document.querySelector(".ri-menu-line");
const sidebar = document.querySelector(".navigation");

menubar.addEventListener("click", () => {
    sidebar.classList.toggle("menu-active");
});

const iconclose = document.querySelector(".ri-close-line");

iconclose.addEventListener("click", () => {
    sidebar.classList.remove("menu-active");
});


// swiper  

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


  // AOS
  AOS.init();