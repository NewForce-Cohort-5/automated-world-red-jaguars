// City
// -Name
// -Desc.
// -image
// -Link
// -Landmark
// -Population


const cityData = [
  {
    name: "Amsterdam",
    description: "Amsterdam's main attractions include its historic canals, the Rijksmuseum, the Van Gogh Museum, the Stedelijk Museum, Hermitage Amsterdam, the Concertgebouw, the Anne Frank House, the Scheepvaartmuseum, the Amsterdam Museum, the Heineken Experience, the Royal Palace of Amsterdam, Natura Artis Magistra, Hortus Botanicus Amsterdam, NEMO, the red-light district and many cannabis coffee shops.",
    image: "images/city-amsterdam.jpg",
    link: "https://en.wikipedia.org/wiki/Amsterdam",
    landmark: "Vondelpark",
    population: "872,680"
  },
  {
    name: "Zaanstad",
    description: "Zaanstad is a Dutch municipality in the province of North Holland, situated northwest of Amsterdam. Its main city is Zaandam. It is part of the conurbation and metropolitan area of Amsterdam.",
    image: "images/city-zaanstad.jpg",
    link: "https://en.wikipedia.org/wiki/Zaanstad",
    landmark: "Zaans Museum",
    population: "155,885"
  },
  {
    name: "The Hague",
    description: "With a population of over half a million, it is the third-largest city in the Netherlands, after Amsterdam and Rotterdam.",
    image: "images/city-the-hague.jpg",
    link: "https://en.wikipedia.org/wiki/The_Hague",
    landmark: "Madurodam",
    population: "2.4m"
  }
];

export const useNetherlandsCities = () => {
  return cityData.slice();
}