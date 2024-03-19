function loadImage(imgElement: HTMLImageElement) {
    const src: string | undefined = imgElement.dataset?.deferredSrc

    if (!src) {
        return
    }

    let mock: HTMLImageElement | null = document.createElement('img')
    mock.setAttribute('src', src)
    mock.onload = function () {
        imgElement.setAttribute('src', src)
        mock = null
    }
}

export default loadImage
