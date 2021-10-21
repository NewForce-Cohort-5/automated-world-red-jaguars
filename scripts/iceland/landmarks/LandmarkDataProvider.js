const landmarksIceland = [
    {
    image: "https://www.icelandtravel.is/wp-content/uploads/2019/03/Jokulsarlon-1300x883.jpg",
    name: "Jokulsarlon Glacier Lagoon (and the “Diamond Beach”)",
    description:"The lagoon is the deepest found in Iceland carved out by the river and its feeding glacier. The multi-colored icebergs break of Breidamerkurjokull, to the drop into the lagoon only to keep floating around until they reach the black beach below. Once they have made it to the beach the icebergs are much smaller. This is where most spent their last moments before being united with the Atlantic ocean. This black sand beach where they melt away is therefore often called the Diamond Beach.",
    link: "https://en.wikipedia.org/wiki/J%C3%B6kuls%C3%A1rl%C3%B3n",
    city: "Grindavík"
    },

    { 
        image: "https://www.icelandtravel.is/wp-content/uploads/2018/04/lake-myvatn-classic-1.jpg",
        name: "Lake Myvatn",
        description:"To visit Lake Myvatn and its surrounding attractions is truly a surreal experience. Myvatn is simply put a geological wonderland sculpted by thousands of years worth of volcanic eruptions, earthquakes and other natural phenomenons. It is one of the largest lakes in Iceland and the nesting ground to many bird species. Some have even gone as far as to say that no other place on earth is home to as many different species of duck.",
        city: "Krafla Volcano",
        link: "https://en.wikipedia.org/wiki/M%C3%BDvatn",
    },

    {
        image: "https://www.icelandtravel.is/wp-content/uploads/2019/02/shutterstock_497026894-1300x867.jpg",
        name: "The Blue Lagoon",
        description:"The first thing most people hear about Iceland is the Blue Lagoon. Perhaps not surprisingly given its incredible unique locator, colors and medically proven healing powers. It is located smack in the middle of the Reykjanes Peninsula. In between the Keflavik airport and Reykjavik making it the ideal stop to make to or from the airport.",
        city: "Vatnajökull National Park",
        link: "https://en.wikipedia.org/wiki/Blue_Lagoon_(geothermal_spa)",
    }
]

export const useLandmarks = () => {
    return landmarksIceland.slice()
}