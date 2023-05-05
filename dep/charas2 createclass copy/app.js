document.addEventListener("DOMContentLoaded", () => {
  const normalSplitText = new MySplitText("#content");
  normalSplitText.animate();
});

class MySplitText {
  constructor(selector) {
    this.chars = null;
    this.selector = selector;
    this._init();
  }

  _init() {
    const str = document.querySelectorAll(this.selector);
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
    const mySplitText = new SplitText(this.selector);
    this.chars = mySplitText.chars;
  }

  animate() {
    const animatetext = gsap.timeline();
    animatetext.from(this.chars, {
      duration: 0.5,
      opacity: 0,
      y: -10,
      stagger: 0.07,
      ease: "power3.inOut",
    });
  }
}
