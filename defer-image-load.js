const identifier = 'img[data-load="deffered"]';
function loadImage(imgElement) {
    var _a;
    const src = (_a = imgElement.dataset) === null || _a === void 0 ? void 0 : _a.originalSrc;
    if (!src) {
        return;
    }
    let mock = document.createElement("img");
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
            .forEach((value) => loadImage(value));
    },
};
