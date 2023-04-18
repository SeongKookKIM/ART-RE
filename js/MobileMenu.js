$(function () {
  let mobile_on = false;
  $(".m-gnb-menu").click(function () {
    let delay_time = 0;
    mobile_on = !mobile_on;
    $(this).toggleClass("open");
    if (mobile_on) {
      document.body.style.overflow = "hidden";

      gsap.to(".mobile-bg", 2, {
        right: "0%",
        ease: Expo.easeInOut,
      });
      gsap.to(".mobile-menu", 2, {
        right: "0%",
        ease: Expo.easeInOut,
        delay: 0.2,
      });

      $(".mobile-menu nav ul li").each(function () {
        TweenMax.to($(this), 1.2, {
          x: -0.05,
          opacity: 1,
          delay: delay_time + 1,
          ease: Expo.easeInOut,
        });
        delay_time += 0.08;
      });
    } else {
      $(".mobile-menu nav ul li").each(function () {
        document.body.style.overflowY = "auto";
        TweenMax.to($(this), 1.2, {
          x: 0,
          opacity: 0,
          delay: delay_time,
          ease: Expo.easeInOut,
        });
        delay_time += 0.08;
      });
      gsap.to(".mobile-menu", 2, {
        right: "-100%",
        ease: Expo.easeInOut,
        delay: 1,
      });
      gsap.to(".mobile-bg", 2, {
        right: "-100%",
        ease: Expo.easeInOut,
        delay: 1.2,
      });
    }
  });

  $(".mobile-menu nav ul li").click(function () {
    mobile_on = false;
    let delay_time = 0;

    document.body.style.overflowY = "auto";

    $(".m-gnb-menu").removeClass("open");

    $(".mobile-menu nav ul li").each(function () {
      TweenMax.to($(this), 1.2, {
        x: 0,
        opacity: 0,
        delay: delay_time,
        ease: Expo.easeInOut,
      });
      delay_time += 0.08;
    });
    gsap.to(".mobile-menu", 2, {
      right: "-100%",
      ease: Expo.easeInOut,
      delay: 1,
    });
    gsap.to(".mobile-bg", 2, {
      right: "-100%",
      ease: Expo.easeInOut,
      delay: 1.2,
    });
  });
});
