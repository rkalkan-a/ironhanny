// js/script.js
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  // Fade in the hero image container
  gsap.to('.hero-images', {
    opacity: 1,
    duration: 1.5,
    ease: 'power1.inOut'
  });

  // Headline infinite fade + scale loop
  const tl = gsap.timeline({ repeat: -1, delay: 0.5 });
  tl.to('.headline', { opacity: 1, scale: 1, duration: 1.5, ease: 'power1.inOut' })
    .to('.headline', { opacity: 0.3, scale: 0.8, duration: 1.5, ease: 'power1.inOut' });

  // Show the Apply Now button
  gsap.from('.hero .btn', { opacity: 0, y: 20, duration: 0.5, delay: 3.5 });
});
