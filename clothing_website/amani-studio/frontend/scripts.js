/*document.addEventListener('DOMContentLoaded', function() {
    // Close message button
    const closeMessageBtn = document.querySelector('.close-message');
    const topMessage = document.querySelector('.top-message');

    closeMessageBtn.addEventListener('click', function() {
        topMessage.style.display = 'none';
    });

    // Mobile menu toggle
    const menuToggleBtn = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggleBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });*/
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    const closeMessageBtn = document.querySelector('.close-message');
    const topMessage = document.querySelector('.top-message');

    closeMessageBtn.addEventListener('click', function() {
        topMessage.style.display = 'none';
    });
    // Slideshow functionality
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow .slide');

   /*function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
        });
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }*/

    /*function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('fade'); // Remove fade class
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('fade'); // Add fade class
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}*/
function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('fade'); // Remove fade class
        slide.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    const currentSlide = slides[slideIndex - 1];
    currentSlide.style.display = 'block';
    currentSlide.classList.add('fade'); // Add fade class

    // Simulate hover effect on the current slide's image
    const slideImage = currentSlide.querySelector('img'); 
        slideImage.style.opacity = '0.9';
    slideImage.style.transform = 'scale(1.001)';

    setTimeout(() => {
        slideImage.style.opacity = '1';
        slideImage.style.transform = 'scale(1)';
        // Reset styles after a delay (adjust timing as needed)
    }, 1000); // Change back after 2 seconds (adjust as desired)

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

    showSlides();

    // Scroll to top functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Assuming you've included Swiper library
const swiper = new Swiper('.testimonials__container', {
    slidesPerView: 1,
    spaceBetween: 30, // Adjust spacing between slides as needed
    loop: true, // Enables continuous looping of testimonials
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Adjust slides per view for different screen sizes
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  const visualSearchElements = document.querySelectorAll('[data-google-visual-search]');
    visualSearchElements.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            // Placeholder function to call Google Visual Search API
            // This should be replaced with the actual API call
            googleVisualSearch(element);
        });
    });

    function googleVisualSearch(element) {
        // Replace with the actual Google Visual Search API call
        console.log('Initiating Google Visual Search for:', element.src);
        // Example API call (hypothetical)
        // google.visualSearch({ imageUrl: element.src })
        //     .then(response => console.log(response))
        //     .catch(error => console.error(error));
    }

});