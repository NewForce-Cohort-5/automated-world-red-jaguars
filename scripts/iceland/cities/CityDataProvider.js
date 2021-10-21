const citiesIceland = [
   {
    Image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Iceland/Reykjavik/reykjavik-guide-lead-image-48-hours-xlarge.jpg",
    Name: "Reykjavik",
    Desc: "Reykjavik, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland’s Viking history. The striking concrete Hallgrimskirkja church and rotating Perlan glass dome offer sweeping views of the sea and nearby hills. Exemplifying the island’s volcanic activity is the geothermal Blue Lagoon spa, near the village of Grindavik",
    Link: "https://en.wikipedia.org/wiki/Reykjav%C3%ADk",
    Landmark: "",
    Population: "131,136"
   }, 

   {
    Image: "https://www.cunard.com/content/dam/cunard/inventory-assets/ports/AEY/AEY.jpg.1533895856802.image.750.563.low.jpg",
    Name: "Akureyri",
    Desc: "Akureyri is a city at the base of Eyjafjörður Fjord in northern Iceland. In the center, the 1940 Akureyri Church has stained-glass windows portraying scenes from Icelandic Christian history. There are views of the fjord from the forecourt. Nearby, the Akureyri Art Museum displays contemporary art from Iceland and farther afield. To the south are the Botanical Gardens, with specimens from across Iceland. ",
    Link: "https://en.wikipedia.org/wiki/Akureyri",
    Landmark: "",
    Population: "18,191"
   },

   {
    Image: "https://guidetoiceland.imgix.net/421585/x/0/hafnarfjordurharbourview.jpg?ixlib=php-3.3.0",
    Name: "Hafnarfjordur",
    Desc: "Hafnarfjörður, officially Hafnarfjarðarkaupstaður, is a port town and municipality in Iceland, located about 10 km south of Reykjavík. The municipality consists of two non-contiguous areas in the Capital Region, on the southwest coast of the country..",
    Link: "https://en.wikipedia.org/wiki/Hafnarfj%C3%B6r%C3%B0ur",
    Landmark: "",
    Population: "29,971"
   }
]

export const useCities = () => {
    return citiesIceland.slice()
}


