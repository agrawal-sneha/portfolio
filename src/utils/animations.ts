export const setupAnimations = () => {
  const fadeElems = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElems.forEach(elem => {
    observer.observe(elem);
  });
  
  // Initialize skill bar animations if on skills section
  if (document.querySelector('#skills')) {
    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar) => {
        if (bar instanceof HTMLElement) {
          bar.style.width = bar.dataset.width || '0%';
        }
      });
    }, 500);
  }
};

// Typing animation for hero section
export const initTypewriter = (element: HTMLElement, text: string, speed: number = 100) => {
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
  typeWriter();
};

// Parallax effect for hero background
export const setupParallax = () => {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroSection = document.querySelector('#home');
    
    if (heroSection) {
      const heroElements = heroSection.querySelectorAll('.parallax');
      
      heroElements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0.5');
        (element as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    }
  });
};