// Citizen
// -Name
// -Desc.
// -image
// -Link

const citizenData = [
  {
    name: "Vincent van Gogh",
    description: "In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art.",
    image: "images/van-gogh.jpg",
    link: "https://en.wikipedia.org/wiki/Vincent_van_Gogh"
  },
  {
    name: "Rutger Hauer",
    description: "Hauer's career began in 1969 with the title role in the Dutch television series Floris and surged with his leading role in Turkish Delight (1973), which in 1999 was named the Best Dutch Film of the Century.",
    image: "images/Rutger_Hauer.jpg",
    link: "https://en.wikipedia.org/wiki/Rutger_Hauer"
  },
  {
    name: "Eddie Van Halen",
    description: "He was the main songwriter and guitarist of the American rock band Van Halen, which he co-founded in 1972 with his brother, drummer Alex Van Halen, bassist Mark Stone, and singer David Lee Roth.",
    image: "images/van-halen.jpg",
    link: "https://en.wikipedia.org/wiki/Eddie_Van_Halen"
  }
];

export const useNetherlandsCitizens = () => {
  return citizenData.slice();
}
