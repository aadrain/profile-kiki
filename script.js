document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
  
      if (!target) return;
  
      e.preventDefault();
  
      const navbar = document.querySelector('.navbar');
      const offset = navbar ? navbar.offsetHeight : 0;
  
      let position = target.offsetTop - offset;
  
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });
  