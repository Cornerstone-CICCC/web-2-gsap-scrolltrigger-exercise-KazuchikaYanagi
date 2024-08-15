gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

let lineOneTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "center center",
    end: "bottom center",
    scrub: true,
    pin: true,
    // markers: true,
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
    // markers: true,
  },
});

lineTwoTl
  .from(".line-two span:first-child", { x: "-100vw", scale: 15 })
  .from(".line-two span:last-child", { x: "100vw", scale: 15 }, "<")
  .to(".line-two span:first-child", { y: "-1rem" })
  .from(".line-two span:first-child", { y: "-1rem" })
  .to(".line-two span:last-child", { y: "-1rem" })
  .from(".line-two span:last-child", { y: "-1rem" });

let lineThreeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "center center",
    end: "bottom center",
    scrub: true,
    pin: true,
    // markers: true,
  },
});

lineThreeTl
  .from(".line-three span", { y: "100vh", stagger: 0.5 })
  .to(".line-three", { backgroundPosition: 0 })
  .to(".line-three span", { color: "white", duration: 1 }, "<")
  .from(".moon", { x: "100vw" }, "<");
