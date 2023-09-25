window.addEventListener('scroll', function() {
    let header = document.querySelector('header-nav');
    header.classList.toggle('header-nav', window.scrollY > 0);
  });