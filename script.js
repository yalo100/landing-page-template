const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const heroTimeline = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });
  heroTimeline
    .from('.hero__text .eyebrow', { y: 20, opacity: 0 })
    .from('.hero__text h1', { y: 30, opacity: 0 }, '-=0.6')
    .from('.hero__text .subtitle', { y: 20, opacity: 0 }, '-=0.5')
    .from('.hero__actions', { y: 20, opacity: 0 }, '-=0.4')
    .from('.hero__visual', { scale: 0.95, opacity: 0 }, '-=0.6');

  if (prefersReducedMotion) return;

  gsap.utils.toArray('.advantage-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: index * 0.1,
    });
  });

  const productTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.product__layout',
      start: 'top 70%',
    },
    defaults: { ease: 'power3.out', duration: 1 },
  });

  productTl
    .from('.product__visual', { x: -60, opacity: 0 })
    .from('.product__copy', { x: 60, opacity: 0 }, '-=0.7');

  gsap.utils.toArray('.testimonial-card').forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
    });
  });

  gsap.from('.final-cta__inner', {
    scrollTrigger: {
      trigger: '.final-cta__inner',
      start: 'top 85%',
    },
    scale: 0.96,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  });
});
