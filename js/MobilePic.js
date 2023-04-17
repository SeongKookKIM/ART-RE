var image = document.getElementById("m-image");
var images = ["img/picture02.png", "img/picture01.png"];
var i = 0;
setInterval(function () {
  image.src = images[i];
  i = (i + 1) % images.length;
}, 300);
