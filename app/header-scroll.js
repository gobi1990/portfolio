export function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
  
      if (scrollTop === 0) {
        header.classList.remove('py-2');
        header.classList.add('py-4');
      } else {
        header.classList.remove('py-4');
        header.classList.add('py-2');
      }
  
      lastScrollTop = scrollTop;
    });
  }