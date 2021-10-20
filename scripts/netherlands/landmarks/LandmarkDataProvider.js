// Landmark
// -Name
// -Desc.
// -image
// -City
// -Link

const landmarkData = [
  {
    name: "Anne Frank House",
    description: "During World War II, Anne Frank hid from Nazi persecution with her family and four other people in hidden rooms at the rear of the 17th-century canal house, known as the Secret Annex (Dutch: Achterhuis). She did not survive the war but her wartime diary was published in 1947.",
    image: "images/anne-frank-house.jpg",
    city: "Amsterdam",
    link: "https://en.wikipedia.org/wiki/Anne_Frank_House"
  },
  {
    name: "Binnenhof",
    description: "Little is known about the origin of the Binnenhof. Presumably, the grounds next to the Hofvijver lake, and the small homestead on it, were purchased by Count Floris IV of Holland from Meiland van Wassenaar in November 1229.",
    image: "images/binnenhof.jpg",
    city: "The Hague",
    link: "https://en.wikipedia.org/wiki/Binnenhof"
  },
  {
    name: "Rijksmuseum",
    description: "The Rijksmuseum was founded in The Hague on 19 November 1798 and moved to Amsterdam in 1808, where it was first located in the Royal Palace and later in the Trippenhuis. The current main building was designed by Pierre Cuypers and first opened in 1885.",
    image: "images/rijksmuseum.jpg",
    city: "Amsterdam",
    link: "https://en.wikipedia.org/wiki/Rijksmuseum"
  }
];

export const useNetherlandsLandmarks = () => {
  return landmarkData.slice();
}