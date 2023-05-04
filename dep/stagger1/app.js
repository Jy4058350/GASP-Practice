document.addEventListener("DOMContentLoaded", () => {
  const boxs = document.querySelectorAll(".box");
  console.log(boxs);
  boxs.forEach(function (box) {
    box.addEventListener("click", function () {
      gsap.to(box, {
        duration: 1,
        scale: 1.5,
        opacity: 0,
        ease: "elastic",
        force3D: true,
      });
    });
  });
});

gsap.from(".box", {
  duration: 1,
  scale: 2.5,
  opacity: 0,
  delay: 1,
  stagger: 0.5,
  ease: "elastic",
  force3D: true,
});
