let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x - 15 + "px";
  crsr.style.top = dets.y - 15 + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});

let allh4 = document.querySelectorAll("#nav h4");
allh4.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    crsr.style.scale = 2;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", () => {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95c11e";
    crsr.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scoller: "body",
    // markers: true,
    start: "top -15%",
    end: "top -16%",
    scrub: 1.2,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers :true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about img, #about-us , #about-head", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from("#page3 #colon1", {
  y: -70,
  x: -70,
  duration: 2,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 47%",
    scrub: 4,
  },
});


gsap.from("#page3 #colon2", {
  y: 90,
  x: 90,
  duration: 2,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 85%",
    scrub: 4,
  },
});

gsap.from(".page4 h1", {
  y: 50,
  
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
});