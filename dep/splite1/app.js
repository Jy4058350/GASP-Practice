
document.addEventListener("DOMContentLoaded", () => {
});



const overwrite = gsap.timeline();
const mySplitText = new SplitText('#content', {type:"words,chars"});
const chars = mySplitText.chars;
console.log(chars);

overwrite.set(chars, {
  opacity: 0.4,
});
overwrite.to(chars, {
  opacity: 1,
  duration: 1,
  stagger: 0.07,

});


// duration: 0.8,
//   opacity: 0,
//   scale: 0,
//   y: 80,
//   rotationX: 180,
//   transformOrigin: "0% 50% -50",
//   ease: "back",
//   stagger: 0.01