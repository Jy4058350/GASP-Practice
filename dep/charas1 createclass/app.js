document.addEventListener("DOMContentLoaded", () => {});

const str = document.querySelectorAll("#content")
str.forEach((els) => {
  const el = els.textContent.trim().split("");
  let output = "";
  el.forEach((char) => {
    if (char !== " ") {
      output += "<div>" + char + "</div>";
    } else {
      output += "<div class='space'></div>";
    }
  });
  els.innerHTML = output;
  console.log(output);
});

const mySplitText = new SplitText("#content", {
  type: "chars",
});

const chars = mySplitText.chars;
const animatetext = gsap.timeline();
animatetext.from(chars, {
  duration: 0.5,
  opacity: 0,
  y: -10,
  stagger: 0.07,
  ease: "power3.inOut",
});

















// const mySplitText = new SplitText("#content");

// const animatetext = gsap.timeline();
// // const chars = mySplitText.output;
// // console.log(chars);

// animatetext.set(els.innerHTML, {
//   opacity: 0,
// });
// // animatetext.from(output, {
// //   opacity: 1,
// //   duration: 0.5,
// //   stagger: 0.07,
// //   y: -10,
// // });
