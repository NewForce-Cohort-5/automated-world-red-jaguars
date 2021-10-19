const swissCityCollection = [
    {
        name: "Zurich",
        description: "Zurich is the largest city in Switzerland and there are many cool things to do and see during your stay. The city is home to some of the largest museums and art galleries in the country. Therefore, it’s referred to as the historical, cultural, and financial center of the nation. Zurich is home to the Landesmuseum, also known as the Swiss National Museum. It contains art collections that date back to the prehistoric era. Apart from the numerous museums and galleries, you can also visit Lake Zurich, which offers breathtaking views. There is hardly a better way to explore the city than on a boat trip. If you need another reason to believe Zurich is worth a visit, consider the fact that Mercer has ranked it as one of the cities with the best quality of life in the world.",
        link: "https://en.wikipedia.org/wiki/Z%C3%BCrich",
        landmark: "Lake Zurich",
        population: "415,215",
        image: 'images/Zurich.jpg'
    },
    {
        name: "Geneva",
        description: "In the list of the cities you want to visit in Switzerland, you should also add the city of Geneva. It’s considered an international city and it’s home to some of the most beautiful attractions in Switzerland. Starting with Lake Geneva, which is the largest lake in Switzerland and one of the largest in Europe. Geneva also offers its tourists a mesmerizing view of the Alps, be it during the summer or wintertime.",
        link: "https://en.wikipedia.org/wiki/Geneva",
        landmark: "Chillon Castle",
        population: "201,818",
        image: 'images/Geneva.jpg'
    },
    {
        name: "Lucerne",
        description: "Lucerne is one of the most beautiful cities in the world. Thanks to the surrounding mountains and the lake that borders the city, there are many stunning views to be seen in Lucerne. Some of the most famous attractions of the city are the 14th century Chapel Bridge, the Water Tower, the Musegg Wall, and the Lion Monument. The delightful medieval quarter of Lucerne is a contribution to the magnificent landscape of the city. Additionally, tourists may also take pleasure from visiting the city during wintertime, as it offers a list of amusing things to do. Especially if they’re looking forward to enjoying the beautiful panorama of the Alps.",
        link: "https://en.wikipedia.org/wiki/Lucerne",
        landmark: "Lake Lucerne",
        population: "81,691",
        image: 'images/Lucerne.png'
    }
]

export const useSwissCity = () => {
    return swissCityCollection.slice()
}