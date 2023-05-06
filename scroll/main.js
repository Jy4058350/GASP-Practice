const secs = document.querySelectorAll("section");
console.log(secs);
secs.forEach((sec) => {
  gsap.from(sec, 3, {
    opacity: 0,
    scale: 0.8,
    y: 20,
    scrollTrigger: {
      trigger: sec,
      start: "top center",
      toggleActions: 'play none none reverse'
    },
  });
});
