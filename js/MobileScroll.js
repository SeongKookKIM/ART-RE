gsap
  .timeline({
    scrollTrigger: {
      trigger: "#m-nfts",
      start: "top top",
      end: "bottom+=2500 center-=200",
      scrub: 1,
      pin: true,
    },
  })
  .from(".m-first-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".m-second-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".m-third-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".m-four-title", { y: innerHeight * 1, duration: 2.5 })
  .from(".m-bottom-logo", { x: innerWidth * -1, opacity: 0, duration: 2.5 })
  .from(".m-five-title ", { y: innerHeight * 1, duration: 2.5 })
  .to(".m-nfts-title", { top: "-100vh", duration: 7 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".m-nft-contents",
      start: "top bottom",
      end: "bottom+=100 bottom",
      scrub: 1,
    },
  })
  .to(".m-nfts-s", { opacity: 1, duration: 1 })
  .to(".m-nfts-t", { opacity: 1, duration: 1 })
  .to(".m-nfts-f", { opacity: 1, duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#m-about",
      start: "top-=300 top",
      end: "top center",
      scrub: 1,
    },
  })
  .to("body", { backgroundColor: "white", duration: 5 })
  .to(".m-fixed-gnb h3", { color: "black" })
  .to(".m-gnb-menu span", { backgroundColor: "black" })
  .to(".m-bottom-logo .m-b", { fill: "black" })
  .from(".m-about-title h2:nth-child(1)", {
    y: innerHeight * -0.1,
    opacity: 0,
    duration: 1.2,
  })
  .from(".m-about-title h2:nth-child(2)", {
    y: innerHeight * 0.1,
    opacity: 0,
    duration: 1.2,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#m-project",
      start: "top-=300 top",
      end: "top center",
      scrub: 1,
    },
  })
  .to("body", { backgroundColor: "black", duration: 5 })
  .to(".m-fixed-gnb h3", { color: "white" })
  .to(".m-gnb-menu span", { backgroundColor: "white" })
  .to(".m-bottom-logo .m-b", { fill: "white" });
