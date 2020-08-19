let images = document.getElementsByClassName("v1Nh3 kIKUG _bz0w");
let tempImage;

function imagesToLink() {
  Array.prototype.forEach.call(images, (image) => {
    tempImage = image;
    image.removeEventListener("click", openImage);
  });

  images = document.getElementsByClassName("v1Nh3 kIKUG _bz0w");

  Array.prototype.forEach.call(images, (image) => {
    tempImage = image;
    image.addEventListener("click", openImage);
  });
}

function openImage() {
  window.open(tempImage.childNodes[0].href, "_blank");
}

imagesToLink();

const observer = new MutationObserver((mutationsList) => {
  for (let i = 0; mutationsList.length > i; i++) {
    if (mutationsList[i].target.tagName === "DIV") {
      imagesToLink();
      break;
    }
  }
});

observer.observe(document.getElementsByClassName("_2z6nI")[0], {
  attributes: true,
  childList: true,
  subtree: true,
});
