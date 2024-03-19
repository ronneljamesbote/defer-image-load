import loadImage from './loadImage'

function deferImages(id: string) {
    const target: NodeListOf<HTMLImageElement> = document.querySelectorAll(id)

    target.forEach((value: HTMLImageElement) => loadImage(value))
}

export default deferImages
