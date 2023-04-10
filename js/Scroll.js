gsap
  .timeline({
    scrollTrigger: {
      trigger: ".nft-title",
      start: "top top",
      end: "bottom+=1000 top",
      scrub: 1,
      pin: true,
    },
  })
  .from(".first-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".second-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".third-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".four-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".five-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".small-logo", { y: innerHeight * 1, opacity: 0, duration: 2.5 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top-=200 top+=100",
      end: "top+=300 bottom",
      scrub: 1,
    },
  })
  .to("body", { backgroundColor: "white", duration: 5 })
  .to(".header-fixed h2", { color: "black" })
  .to(".small-logo svg .b", { fill: "black" })
  .to(".header-fixed .hambuger-menu span", { backgroundColor: "black" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".picture",
      start: "top top",
      end: "bottom center",
      pin: true,
      scrub: 1,
    },
  })
  .from(".picture", { opacity: "0", scale: "0" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".marquee",
      start: "top+=200 top",
      end: "bottom center",
      scrub: 1,
    },
  })
  .to(".marquee-title h3", { backgroundColor: " rgb(22, 19, 19)" })
  .to("body", { backgroundColor: " rgb(22, 19, 19)", duration: 5 })
  .to(".header-fixed h2", { color: "black" })
  .to(".header-fixed .hambuger-menu span", { backgroundColor: "black" })
  .to(".small-logo svg .b", { fill: "black" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".project",
      start: "top top",
      end: "bottom+=500 center",
      pin: true,
      scrub: 1,
    },
  })
  .to(".header-fixed h2", { color: "white" })
  .to(".header-fixed .hambuger-menu span", { backgroundColor: "white" })
  .to(".small-logo svg .b", { fill: "white" })
  .to(".project-list-wrapper", { left: "-100%", duration: 5 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".future",
      start: "top-=200 top+=100",
      end: "top+=300 bottom",
      scrub: 1,
    },
  })
  .to("body", { backgroundColor: "black", duration: 5 });
