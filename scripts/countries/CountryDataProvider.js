const countryCollection = [
    {
        image:"/images/swiss-homepage.jpg",
        name: "Iceland",
        description: "Iceland is an island, a European country, located midway between North America and mainland Europe. It lies just below the Arctic Circle between 64 and 66 degrees north. The capital is Reykjavik. It is the northernmost capital in the world and is located exactly halfway between New York and Moscow.",
        link: "iceland.html"
    },

    {
        image: "images/netherland-homepage.jpg",
        name: "Netherlands",
        description: "The Netherlands is a small country sandwiched between Belgium and Germany in Western Europe. The North Sea, located to the north and west of the Netherlands, is continually battering the land. The Netherlands is larger than the state of Maryland, but smaller than West Virginia.",
        link: "natherlands.html"
    },

    {
        image: "images/south-africa-homepage.jpg",
        name: "South Africa",
        description: "South Africa is one of the most geographically varied countries on the African continent, comprising territory that ranges from the rolling, fertile plains of the highveld and the wide-open savannah of Mpumalanga to the Kalahari desert and the peaks of the Drakensberg Mountains.",
        link: "southafrica.html"
    },

    {
        image: "images/swiss-homepage.jpg",
        name: "Switzerland",
        description: "Switzerland is a small mountainous country located in central Europe. This landlocked country is about the size of New Jersey and is between France and Italy. ... Most of the population lives in the plateau which is between the high Alps in the south and the Jura mountains in the north.",
        link: "switzerland.html"
    },
]

export const useCountries = () => {
    return countrycollection.slice()
}