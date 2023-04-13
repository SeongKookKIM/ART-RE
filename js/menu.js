$(function () {
  let on_off = false;

  $(".hambuger-menu").click(function () {
    on_off = !on_off;
    if (on_off) {
      $(this).css({ gap: "0" });
      $(".hambuger-menu span").css({ position: "absolute", height: "5px" });
      $(".hambuger-menu span:nth-child(2)").css({
        width: "70px",
        rotate: "45deg",
      });
      $(".hambuger-menu span:nth-child(1)").css({
        rotate: "-45deg",
      });
      $(".menu-deco").animate({ top: "0" }, 1000);
      $(".menu").animate({ top: "0" }, 1300);
    } else {
      $(".menu").animate({ top: "-100%" }, 1000);
      $(".menu-deco").animate({ top: "-100%" }, 1300);
      $(".hambuger-menu span:nth-child(1)").css({
        rotate: "0deg",
      });
      $(".hambuger-menu span:nth-child(2)").css({
        width: "45px",
        rotate: "0deg",
      });
      $(".hambuger-menu span").css({ position: "relative", height: "3px" });
      $(this).css({ gap: "20px" });
    }
    $(".menu ul li a").click(function () {
      location.reload();
    });
  });
});
