const useSvg = (xmlns, viewBox, fill, stroke, path) => {

    let svg = `<svg xmlns="${xmlns}" fill="${fill}" viewBox="${viewBox}" stroke="${stroke}">${path}</svg>`

    let blob = new Blob([svg], { type: 'image/svg+xml' });
    let url = URL.createObjectURL(blob);

    return url
}

export default useSvg

