document.addEventListener("DOMContentLoaded", () => {});

const overwrite = gsap.timeline();
const mySplitText = new SplitText("#content", { type: "words,chars" });
const chars = mySplitText.chars;
console.log(chars);

overwrite.set(chars, {
  opacity: 0.4,
});
overwrite.to(chars, {
  opacity: 1,
  duration: 0.5,
  stagger: 0.07,
});

