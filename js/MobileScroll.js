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
      start: "top-=100 top",
      end: "bottom top",
      scrub: 1,
    },
  })
  .from(".m-nft-contents p .m-nfts-s", { opacity: 0, duration: 1 })
  .from(".m-nft-contents p .m-nfts-t", { opacity: 0, duration: 1 })
  .from(".m-nft-contents p .m-nfts-f", { opacity: 0, duration: 1 });

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
  .to(".m-bottom-logo .m-b", { fill: "black" });

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
