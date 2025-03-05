document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); 
      const targetId = this.getAttribute('href'); 
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth' 
      });
    });
  });

  const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block'; 
  } else {
    backToTopButton.style.display = 'none'; 
  }
});

const year = new Date().getFullYear(); 
document.querySelector('footer p').innerHTML = `© ${year} Albert Einstein. All rights reserved.`;


const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    const imgSrc = image.getAttribute('src');
    lightbox.innerHTML = `<span class="close">&times;</span><img src="${imgSrc}" alt="Lightbox Image">`;
    lightbox.style.display = 'block';
  });
});


lightbox.addEventListener('click', (e) => {
  if (e.target.classList.contains('close') || e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

