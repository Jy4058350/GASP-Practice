document.addEventListener("DOMContentLoaded", () => {});

const overwrite = gsap.timeline();
const mySplitText = new SplitText("#content", { type: "words,chars" });
const chars = mySplitText.chars;
console.log(chars);

overwrite.set(chars, {
  opacity: 0,
});
overwrite.from(chars, {
  opacity: 1,
  duration: 0.5,
  stagger: 0.07,
  y: 10
  
  

  
  
  
});

