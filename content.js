let images = document.getElementsByClassName("v1Nh3 kIKUG _bz0w");
let firstExecution = true;
let handlers = [];

function imagesToLink() {
  if (firstExecution) {
    Array.prototype.forEach.call(images, (image) => {
      const wrappedFunc = openImage.bind(this, image);
      handlers.push(wrappedFunc);
      image.addEventListener("click", wrappedFunc);
    });

    firstExecution = false;

    return;
  }

  removeHandlers();

  images = document.getElementsByClassName("v1Nh3 kIKUG _bz0w");

  Array.prototype.forEach.call(images, (image) => {
    image.addEventListener("click", openImage.bind(this, image));
  });
}

function openImage(image) {
  window.open(image.childNodes[0].href, "_blank");
}

function removeHandlers() {
  for (var i = 0; images.length > i; i++) {
    images[i].removeEventListener("click", handlers[i]);
  }
  handlers = [];
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
