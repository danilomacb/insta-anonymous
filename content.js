function runContent() {
  let firstExecution = true;
  let handlers = [];
  let images = document.getElementsByClassName("v1Nh3 kIKUG _bz0w");

  function imagesLoop() {
    Array.prototype.forEach.call(images, (image) => {
      const wrappedFunc = openImage.bind(image);
      handlers.push(wrappedFunc);
      image.addEventListener("click", wrappedFunc);
    });
  }

  function removeHandlers() {
    for (var i = 0; images.length > i; i++) {
      images[i].removeEventListener("click", handlers[i]);
    }

    handlers = [];
  }

  function imagesToLink() {
    if (firstExecution) {
      imagesLoop();

      firstExecution = false;

      return;
    }

    removeHandlers();

    images = document.getElementsByClassName("v1Nh3 kIKUG _bz0w");

    imagesLoop();
  }

  function openImage() {
    window.open(this.childNodes[0].href, "_blank");
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
}

runContent();

window.addEventListener("change", () => {
  setTimeout(() => {
    runContent();
  }, 3000)
});
