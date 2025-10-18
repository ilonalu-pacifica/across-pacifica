// Simple JS for nav toggle, smooth scroll, and subtle parallax on scroll
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle && toggle.addEventListener('click', function(){
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.background = 'white';
    links.style.position = 'absolute';
    links.style.right = '20px';
    links.style.top = '68px';
    links.style.padding = '12px';
    links.style.borderRadius = '10px';
    links.style.boxShadow = '0 10px 30px rgba(10,20,30,0.08)';
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Parallax effect for hero waves
  const waves = document.querySelectorAll('.wave');
  window.addEventListener('scroll', function(){
    const y = window.scrollY;
    waves.forEach((w, i) => {
      w.style.transform = `translateY(${10 + y * (0.02 + i*0.01)}px) translateX(${(i%2? -1:1) * (y * 0.01)}px)`;
    });
  });

  // Ripple hover on nav links
  document.querySelectorAll('.nav-links a').forEach(link=>{
    link.addEventListener('mousemove', function(e){
      this.style.transform = 'translateY(-4px)';
    });
    link.addEventListener('mouseleave', function(){
      this.style.transform = 'translateY(0)';
    });
  });
});
