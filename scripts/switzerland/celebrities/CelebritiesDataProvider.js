const swissCelebrities = [
    {
        name: "Roger Federer",
        description: "Swiss tennis player who dominated the sport in the early 21st century with his exceptional all-around game. His total of 20 career men’s singles Grand Slam championships (a feat later matched by Rafael Nadal and Novak Djokovic) is the most in tennis history.",
        image: './images/Roger Federer.jpg',
        link: 'https://en.wikipedia.org/wiki/Roger_Federer'
    },
    {
        name: "Jean-Jacques Rousseau",
        description: "Jean-Jacques Rousseau was a Genevan philosopher, composer, and writer. His political philosophy influenced aspects of the French Revolution. He also helped develop modern economic, political, and educational thought. His writing inspired a transformation in French drama and poetry. His works also influenced such writers around the world as Tolstoy. His works as a composer were acknowledged by composers like Mozart.",
        image: './images/Jean-Jacques Rousseau.jpg',
        link: 'https://en.wikipedia.org/wiki/Jean-Jacques_Rousseau'
    },
    {
        name: "Carl Jung",
        description: "Widely regarded as the father of analytical psychology, Carl Jung is one of the most important contributors to symbolization and dream analysis. The concepts of socionics and a popular psychometric instrument called Myers-Briggs Type Indicator (MBTI) were developed from Jung's theory. Apart from working as a psychiatrist and psychoanalyst, Carl Jung was also an artist, craftsman, builder, and prolific writer.",
        image: './images/Carl Jung.jpg',
        link: 'https://en.wikipedia.org/wiki/Carl_Jung'
    }
]


export const useSwissCelebrities = () => {
    return swissCelebrities.slice()
}