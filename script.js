// Smooth Scrolling
document.querySelectorAll('.link').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault(); 
      
      const target = this.getAttribute('href').substring(1); 
      scrollToSection(target);
    });
  });
  
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

// Hamburger Menu
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-nav');

menuIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});

const mobileNavItems = mobileNav.querySelectorAll('li');
mobileNavItems.forEach((item) => {
    item.addEventListener('click', () => {
        mobileNav.classList.remove('show');
    });
});


// Navbar Scroll Position
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelector('li:nth-child(1) a').addEventListener('click', () => scrollToSection('hero-section'));
document.querySelector('li:nth-child(2) a').addEventListener('click', () => scrollToSection('about-us-section'));
document.querySelector('li:nth-child(3) a').addEventListener('click', () => scrollToSection('destination-section'));
document.querySelector('li:nth-child(4) a').addEventListener('click', () => scrollToSection('testimonials-section'));
document.querySelector('li:nth-child(5) a').addEventListener('click', () => scrollToSection('contact-us-section'));

// Custom Cursor
const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
  })
})

// Destination Slider
const productContainers = [...document.querySelectorAll('.destination-gallery-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Hero Section Slider
const carouselContainers = [...document.querySelectorAll('.hero-carousel')];
const nxtBtn1 = [...document.querySelectorAll('.nxt-btn1')];
const preBtn1 = [...document.querySelectorAll('.pre-btn1')];

carouselContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn1[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn1[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
