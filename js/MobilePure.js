// @@@PROJECT-LIST
const projectListItems = document.querySelectorAll(".m-project-list");

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
