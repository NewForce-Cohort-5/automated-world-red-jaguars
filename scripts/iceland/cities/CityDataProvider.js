const citiesIceland = [
   {
    Image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Iceland/Reykjavik/reykjavik-guide-lead-image-48-hours-xlarge.jpg",
    Name: "Reykjavik",
    Desc: "Reykjavik, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland’s Viking history. The striking concrete Hallgrimskirkja church and rotating Perlan glass dome offer sweeping views of the sea and nearby hills. Exemplifying the island’s volcanic activity is the geothermal Blue Lagoon spa, near the village of Grindavik",
    Link: <a href="https://en.wikipedia.org/wiki/Reykjav%C3%ADk">More Info</a>,
    Landmark: "",
    Population: "131,136"
   }, 

   {

   }
]

export const useCities = () => {
    return citiesIceland.slice()
}


