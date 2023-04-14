gsap
  .timeline({
    scrollTrigger: {
      trigger: ".nft-title",
      start: "top top",
      end: "bottom+=2500 top",
      scrub: 1,
      pin: true,
    },
  })
  .from(".first-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".second-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".third-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".four-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".small-logo", { x: innerWidth * -1, opacity: 0, duration: 2.5 })
  .from(".five-title ", { y: innerHeight * 1, duration: 2.5 })
  .to(".nft-pic", { y: innerHeight * -1, duration: 6 })
  .to(".nft-pic video", { scale: 1, duration: 7 })
  .to(".nft-title", { opacity: 0, duration: 3 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".nft-contents",
      start: "top-=800 top",
      end: "bottom-=100 center+=100",
      scrub: 1,
    },
  })
  .to(".fade-first", { opacity: "1" })
  .to(".fade-second", { opacity: "1" })
  .to(".fade-third", { opacity: "1" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top-=400 top",
      end: "top+=300 bottom",
      scrub: 1,
    },
  })
  .to("body", { backgroundColor: "white", duration: 5 })
  .to(".header-fixed h2", { color: "black" })
  .to(".small-logo svg .b", { fill: "black" })
  .to(".cursor", { border: "3px solid black" })
  .to(".grow, .grow-small", { backgroundColor: "black" })
  .to(".header-fixed .hambuger-menu span", { backgroundColor: "black" })
  .to(".menu", { backgroundColor: "white" })
  .to(".menu-num, .menu-name", { color: "black" })
  .to(".menu-line", { backgroundColor: "gray" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about-content-first",
      start: "top-=500 top",
      end: "center center",
      scrub: 1,
    },
  })
  .to(".about-content-first-fade-first", { opacity: "1", duration: 2 })
  .to(".about-content-first-fade-third", { opacity: "1", duration: 2 })
  .to(".about-content-first-fade-second", { opacity: "1", duration: 2 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about-content-second",
      start: "top-=500 top",
      end: "center center",
      scrub: 1,
    },
  })
  .to(".about-content-second-fade-first", { opacity: "1", duration: 2 })
  .to(".about-content-second-fade-third", { opacity: "1", duration: 2 })
  .to(".about-content-second-fade-second", { opacity: "1", duration: 2 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about-content-third",
      start: "top-=500 top",
      end: "center center",
      scrub: 1,
    },
  })
  .to(".about-content-third-fade-first", { opacity: "1", duration: 2 })
  .to(".about-content-third-fade-third", { opacity: "1", duration: 2 })
  .to(".about-content-third-fade-second", { opacity: "1", duration: 2 });

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
  .to("body", { cursor: "crosshair" })
  .to(".cursor", { border: "none" })
  .from(".picture", { opacity: "0", scale: "0", duration: 3 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".marquee",
      start: "top+=200 top",
      end: "bottom center",
      scrub: 1,
    },
  })
  .to("body", {
    backgroundColor: " rgb(22, 19, 19)",
    duration: 5,
    cursor: "none",
  })
  .to(".header-fixed h2", { color: "black" })
  .to(".header-fixed .hambuger-menu span", { backgroundColor: "black" })
  .to(".small-logo svg .b", { fill: "black" })
  .to(".cursor", { border: "3px solid white" })
  .to(".grow, .grow-small", { backgroundColor: "white" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".project",
      start: "top top",
      end: "bottom+=1000 center",
      pin: true,
      scrub: 1,
    },
  })
  .to(".header-fixed h2", { color: "white" })
  .to(".header-fixed .hambuger-menu span", { backgroundColor: "white" })
  .to(".small-logo svg .b", { fill: "white" })
  .to(".project-list-wrapper", { left: "-230%", duration: 10 })
  .to(".menu", { backgroundColor: "black" })
  .to(".menu-num", { color: "rgba(255, 255, 255, 0.3)" })
  .to(".menu-name", { color: "#fff" })
  .to(".menu-line", { backgroundColor: "white" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".future",
      start: "top top",
      end: "top+=300 bottom",
      scrub: 1,
    },
  })
  .to("body", { backgroundColor: "black", duration: 5 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".partners",
      start: "top-=400 top",
      end: "top+=300 bottom",
      scrub: 1,
    },
  })
  .to("body", { backgroundColor: "white", duration: 5 })
  .to(".header-fixed h2", { color: "black" })
  .to(".small-logo svg .b", { fill: "transparent" })
  .to(".cursor", { border: "3px solid black" })
  .to(".grow, .grow-small", { backgroundColor: "black" })
  .to(".header-fixed .hambuger-menu span", { backgroundColor: "black" })
  .to(".menu", { backgroundColor: "white" })
  .to(".menu-num, .menu-name", { color: "black" })
  .to(".menu-line", { backgroundColor: "gray" });
