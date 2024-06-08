document.addEventListener('DOMContentLoaded', function() {
    function ajustarLayout() {
      const lateral = document.getElementById('lateral');
      const principal = document.querySelector('.principal');
  
      if (window.innerWidth <= 768) {
        lateral.classList.remove('flex-column');
        lateral.classList.add('flex-row');
        principal.classList.remove('flex-row');
        principal.classList.add('flex-column');
  
        lateral.style.flexShrink = 0;
        lateral.style.flexBasis = '200px';
      } else {
        lateral.classList.remove('flex-row');
        lateral.classList.add('flex-column');
        principal.classList.remove('flex-column');
        principal.classList.add('flex-row');
  
        lateral.style.flexShrink = 1;
        lateral.style.flexBasis = 'auto';
      }
    }
  
    ajustarLayout();
    window.addEventListener('resize', ajustarLayout); 
  });