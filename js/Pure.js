// @@@PICTURE
const pictureSection = document.querySelector(".picture");

pictureSection.addEventListener("mouseover", function () {
  const hoverBg = this.getAttribute("data-hover-bg");
  this.style.backgroundImage = `url(${hoverBg})`;
});

pictureSection.addEventListener("mouseout", function () {
  const originalBg = this.getAttribute("data-original-bg");
  this.style.backgroundImage = `url(${originalBg})`;
});

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
