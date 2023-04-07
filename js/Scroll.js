gsap
  .timeline({
    scrollTrigger: {
      trigger: ".nft-title",
      start: "top-=500 top",
      end: "center+=200 center",
      markers: true,
      scrub: 1,
      pin: true,
    },
  })
  .from(".first-title", { y: innerHeight * 1, duration: 0.5 })
  .from(".second-title", { y: innerHeight * 1, duration: 0.5 })
  .from(".third-title", { y: innerHeight * 1, duration: 0.5 })
  .from(".four-title", { y: innerHeight * 1, duration: 0.5 })
  .from(".five-title", { y: innerHeight * 1, duration: 0.5 });
