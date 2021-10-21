const citiesIceland = [
   {
    image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Iceland/Reykjavik/reykjavik-guide-lead-image-48-hours-xlarge.jpg",
    name: "Reykjavik",
    description: "Reykjavik, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland’s Viking history. The striking concrete Hallgrimskirkja church and rotating Perlan glass dome offer sweeping views of the sea and nearby hills. Exemplifying the island’s volcanic activity is the geothermal Blue Lagoon spa, near the village of Grindavik",
    link: "https://en.wikipedia.org/wiki/Reykjav%C3%ADk",
    landmark: "Sun Voyager",
    population: "131,136"
   }, 

   {
    image: "https://www.cunard.com/content/dam/cunard/inventory-assets/ports/AEY/AEY.jpg.1533895856802.image.750.563.low.jpg",
    name: "Akureyri",
    description: "Akureyri is a city at the base of Eyjafjörður Fjord in northern Iceland. In the center, the 1940 Akureyri Church has stained-glass windows portraying scenes from Icelandic Christian history. There are views of the fjord from the forecourt. Nearby, the Akureyri Art Museum displays contemporary art from Iceland and farther afield. To the south are the Botanical Gardens, with specimens from across Iceland. ",
    link: "https://en.wikipedia.org/wiki/Akureyri",
    landmark: "Akureyrarkirkja",
    population: "18,191"
   },

   {
    image: "https://guidetoiceland.imgix.net/421585/x/0/hafnarfjordurharbourview.jpg?ixlib=php-3.3.0",
    name: "Hafnarfjordur",
    description: "Hafnarfjörður, officially Hafnarfjarðarkaupstaður, is a port town and municipality in Iceland, located about 10 km south of Reykjavík. The municipality consists of two non-contiguous areas in the Capital Region, on the southwest coast of the country..",
    link: "https://en.wikipedia.org/wiki/Hafnarfj%C3%B6r%C3%B0ur",
    landmark: "Thríhnúkagígur Volcano",
    population: "29,971"
   }
]

export const useCities = () => {
    return citiesIceland.slice()
}


