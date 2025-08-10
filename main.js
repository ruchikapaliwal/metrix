  // Toggle Sidebar
  const menuToggle = document.querySelector('.menu-toggle');
  const navLink = document.querySelector('.nav-link');

  menuToggle.addEventListener('click', () => {
    navLink.classList.toggle('active');
  });

  const navItems = document.querySelectorAll('.nav-link ul li');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
  
      if (item.querySelector('.dropdown-menu')) {
        e.preventDefault();
        item.classList.toggle('active-dropdown');
      }
    });
    document.addEventListener('click', function(e) {
  if (!navLink.contains(e.target) && !menuToggle.contains(e.target)) {
    navLink.classList.remove('active');
  }
});
  });






    

 
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 70,
  autoplay: true,
  loop: true,
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
   
    1024: {
      slidesPerView: 3
    },
 
    768: {
      slidesPerView: 2
    },
 
    0: {
      slidesPerView: 1
    }
  }
});

