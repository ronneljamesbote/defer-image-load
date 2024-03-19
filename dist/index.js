function loadImage(imgElement) {
    var _a;
    var src = (_a = imgElement.dataset) === null || _a === void 0 ? void 0 : _a.deferredSrc;
    if (!src) {
        return;
    }
    var mock = document.createElement('img');
    mock.setAttribute('src', src);
    mock.onload = function () {
        imgElement.setAttribute('src', src);
        mock = null;
    };
}

function deferImages(id) {
    var target = document.querySelectorAll(id);
    target.forEach(function (value) { return loadImage(value); });
}

export { deferImages as default };
//# sourceMappingURL=index.js.map
