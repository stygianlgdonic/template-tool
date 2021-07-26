export default function generatesvgUrl(svg: any) {



    let blob = new Blob([svg], { type: 'image/svg+xml' });
    let url = URL.createObjectURL(blob);

    return url
}
