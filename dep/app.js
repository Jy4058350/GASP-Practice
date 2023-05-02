document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".timeline__text");
  const str = el.innerHTML.trim().split("");
 

    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, "&nbsp;");
        return `${acc}<span class="char">${curr}</span>`;
      }, "");
        const chars = el.querySelectorAll(".char");
        console.log(chars);
        gsap.to(chars, {
            duration: 0.8,
            opacity: 0,
            y: 5,
            rotationX: 180,
            transformOrigin: "0% 30% -10%",
            ease: "back",
            stagger: 0.01,

});
});






// const tl = gsap.timeline(),
//         mySplitText = new SplitText(".timeline__text", { type: "words,chars" }),
//         chars = mySplitText.chars; //an array of all the divs that wrap each character

//     //   console.log(chars);

//       tl.from(chars, {
//         duration: 0.8,
//         opacity: 0,
//         scale: 0,
//         y: 5,
//         rotationX: 180,
//         transformOrigin: "0% 30% -10%",
//         ease: "back",
//         stagger: 0.01,
//       });
