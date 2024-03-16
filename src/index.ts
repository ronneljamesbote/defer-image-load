const identifier = 'img[data-load="deffered"]';

function loadImage(imgElement: HTMLImageElement) {
  const src: string | null = imgElement.dataset?.originalSrc;

  if (!src) {
    return;
  }

  let mock: HTMLImageElement | null = document.createElement("img");
  mock.setAttribute("src", src);
  mock.onload = function () {
    imgElement.setAttribute("src", src);
    mock = null;
  };
}

export default {
  init: function () {
    document
      .querySelectorAll(identifier)
      .forEach((value) => loadImage(value as HTMLImageElement));
  },
};
