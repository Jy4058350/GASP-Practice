gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      opacity: 0.5,
      scale: 1.2,
      x: 200,
      y: 200,
      onComplete: () => {
        gsap.set(targets, { opacity: 1, scale: 1, x: 0, y: 0 });
      },
    });
  },
  defaults: { duration: 2 },
  extendTimeline: true,
});

const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    gsap.effects.fade(box);
  });
});
