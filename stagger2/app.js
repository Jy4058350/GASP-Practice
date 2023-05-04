document.addEventListener("DOMContentLoaded", () => {
  const contents = document.querySelectorAll("div");
  console.log(contents);
  contents.forEach(function (box) {
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

gsap.from("div", {
  duration: 1,
  scale: 2.5,
  opacity: 0.3,
  delay: 1,
  stagger: 0.5,
  ease: "elastic",
  force3D: true,
});
