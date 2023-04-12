// @@@PICTURE
// const pictureSection = document.querySelector(".picture");

// pictureSection.addEventListener("mouseover", function () {
//   const hoverBg = this.getAttribute("data-hover-bg");
//   this.style.backgroundImage = `url(${hoverBg})`;
// });

// pictureSection.addEventListener("mouseout", function () {
//   const originalBg = this.getAttribute("data-original-bg");
//   this.style.backgroundImage = `url(${originalBg})`;
// });

// @@@PROJECT-LIST
const projectListItems = document.querySelectorAll(".project-list");

projectListItems.forEach(function (it) {
  it.addEventListener("mouseover", function () {
    const newImageSrc = this.getAttribute("data-hover-bg");
    const imageElement = this.querySelector("img");
    imageElement.src = newImageSrc;
  });

  it.addEventListener("mouseout", function () {
    const originalImageSrc = this.getAttribute("data-original-bg");
    const imageElement = this.querySelector("img");
    imageElement.src = originalImageSrc;
  });
});

// PARTNERS
var stops = 8,
  delay = 2000,
  animationDelay = 10,
  step = 0.02,
  img = $(".item"),
  r = 400,
  xcenter = 200,
  ycenter = 300,
  last,
  d = 0,
  t = 0,
  i = 1,
  angledStops = 360 / stops,
  RadToDeg = 180 / Math.PI,
  stop = angledStops;

function setup() {
  var start = (270 * Math.PI) / 180,
    spacing = (2 * Math.PI) / img.length;
  img.each(function () {
    $(this)
      .data("pos", start)
      .css({
        top: Math.floor(ycenter + r * Math.sin(start)),
        left: Math.floor(xcenter + r * Math.cos(start)),
      });
    start += spacing;
  });
}

function moveit() {
  t += step;
  last = d;
  d = Math.round(t * RadToDeg) % 360;
  $.when(
    img.each(function () {
      var $t = $(this),
        pos = $t.data("pos") + step;
      $t.data("pos", pos).animate(
        {
          top: Math.floor(ycenter + r * Math.sin(pos)),
          left: Math.floor(xcenter + r * Math.cos(pos)),
        },
        animationDelay
      );
    })
  ).then(function () {
    if (d > stop || d < last) {
      i++;
      if (i > stops || d < angledStops) {
        stop = angledStops;
        i = 1;
      } else {
        stop = angledStops * i;
      }
      setTimeout(moveit, delay);
    } else {
      moveit();
    }
  });
}

$(document).ready(function () {
  setup();
  moveit();
});
