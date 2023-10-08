// Smooth Scrolling
document.querySelectorAll('.link').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default behavior of the anchor tag
      
      const target = this.getAttribute('href').substring(1); // Get the target section ID
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
// Select the mobile menu elements
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-nav');

// Add an event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the 'show' class on the mobile menu
    mobileNav.classList.toggle('show');
});

// Add an event listener to close the menu when a menu item is clicked
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

// Aside Sidebar
const dots = document.querySelectorAll('.dot');

function setActiveDot(sectionId) {
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
    const dot = document.querySelector(`[data-section="${sectionId}"]`);
    if (dot) {
        dot.classList.add('active');
    }
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sectionOffsets = {
        'hero-section': 0,
        'about-us-section': 500,
        'destination-section': 1000,
        'testimonials-section': 1500,
        'contact-us-section': 2000,
    };

    for (const section in sectionOffsets) {
        if (scrollY >= sectionOffsets[section]) {
            setActiveDot(section);
        }
    }
});

dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        const sectionId = dot.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
