type GetRandomImageURLParams = {
    word: string;
};

export default async function getRandomImageData({
    word,
}: GetRandomImageURLParams) {
    const response = await fetch(
        `https://loremflickr.com/320/240/${encodeURIComponent(word.split(' ').join(','))}`
    );
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }    
    const data = await response.blob();
    const imageData = Buffer.from(await data.arrayBuffer());

    return `data:$data.type;base64,${imageData.toString('base64')}`
}