gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

let lineOneTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "center center",
    end: "bottom center",
    scrub: true,
    pin: true,
    markers: true,
  },
});

lineOneTl
  .from(".line-one span", {
    y: "100vh",
    stagger: 0.5,
  })
  .to(".line-one", { backgroundColor: "yellow" })
  .from(".sun", { x: "100vw" })
  .to("span", { x: "100vw", delay: 1 })
  .to(".sun", { x: "-100vw" }, "<")
  .to(".line-one", { backgroundColor: "white" }, "<");

let lineTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "center center",
    end: "bottom center",
    scrub: true,
    pin: true,
    markers: true,
  },
});

lineTwoTl
  .from(".line-two span:first-child", { x: "-100vw", scale: 15 })
  .from(".line-two span:last-child", { x: "100vw", scale: 15 }, "<")
  .to(".line-two span:first-child", { y: "-1rem" })
  .from(".line-two span:first-child", { y: "-1rem" })
  .to(".line-two span:last-child", { y: "-1rem" })
  .from(".line-two span:last-child", { y: "-1rem" });

document.querySelector(".line-three").insertAdjacentHTML(
  "afterend",
  `
    <div class="bg"></div>
    `
);

let bgElement = document.querySelector(".bg");

let lineThreeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "center center",
    end: "bottom center",
    scrub: true,
    pin: true,
    markers: true,
  },
});

lineThreeTl
  .from(".line-three span:first-child", { y: "100vh" })
  .from(".line-three span:first-child+span", { y: "100vh" })
  .from(".line-three span:first-child+span+span", { y: "100vh" })
  .from(".line-three span:first-child+span+span+span", { y: "100vh" })
  .fromTo(
    ".bg",
    { x: "-100vw", backgroundColor: "white" },
    { x: 0, backgroundColor: "black", duration: 1 },
    "<"
  )
  .to(".line-three span", { color: "white", duration: 1 }, "<")
  .to(".moon", { x: "-5vw", duration: 2 }, ">-0.5")
  .to(".bg", { x: "100%", duration: 1 }, "<");

// .bg 要素を挿入
document.querySelector(".line-three").insertAdjacentHTML(
  "afterend",
  `
      <div class="bg"></div>
    `
);
