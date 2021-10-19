const swissLandmarks = [
    {
        name: "Lake Geneva",
        description: "There’s a good reason why Lake Geneva is an amazing natural landmark in Switzerland, not only is it the largest lake in Switzerland but it’s also one of the largest in Europe. Surrounded by the Alps and the French-speaking Swiss city of Geneva, the lake is the perfect meeting of urban civilisation and Switzerland’s stunning nature.",
        image: './images/Lake Geneva.jpg',
        link: 'https://en.wikipedia.org/wiki/Lake_Geneva'
    },
    {
        name: "Lake Lucerne",
        description: "Lake Lucerne is a stunning body of glistening turquoise water located in Central Switzerland. A smaller lake than Geneva, its shape is spiky with several arms of water. The best views of the lake are arguably from the top of Mount Pilatus, although great panoramic viewpoints are more easily accessible from the Sonnenberg mini-mountain.",
        image: './images/Lake Lucerne.jpg',
        link: 'https://en.wikipedia.org/wiki/Lake_Lucerne'
    },
    {
        name: "Chillon Castle",
        description: "Chillon Castle, found on the eastern shores of Lake Geneva near Montreux, is one of the most visited castles in Switzerland. Its cultural heritage includes serving as an inspiration to famous writers like Victor Hugo, Lord Byron and Alexandre Dumas.",
        image: './images/Chillon Castle.jpg',
        link: 'https://en.wikipedia.org/wiki/Chillon_Castle'
    }
]


export const useSwissLandmarks = () => {
    return swissLandmarks.slice()
}