const images = document.getElementsByClassName("v1Nh3 kIKUG _bz0w");

Array.prototype.forEach.call(images, (image) => {
  image.addEventListener("click", () => {
    window.open(image.childNodes[0].href, "_blank");
  });
});
