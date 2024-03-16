define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var identifier = 'img[data-load="deffered"]';
    function loadImage(imgElement) {
        var _a;
        var src = (_a = imgElement.dataset) === null || _a === void 0 ? void 0 : _a.originalSrc;
        if (!src) {
            return;
        }
        var mock = document.createElement("img");
        mock.setAttribute("src", src);
        mock.onload = function () {
            imgElement.setAttribute("src", src);
            mock = null;
        };
    }
    exports.default = {
        init: function () {
            document
                .querySelectorAll(identifier)
                .forEach(function (value) { return loadImage(value); });
        },
    };
});
//# sourceMappingURL=defer-image-load.js.map