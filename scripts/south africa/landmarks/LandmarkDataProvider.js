const africanLandmarkCollection = [
    {
        image:"/images/table-mountain.png",
        name: "Table Mountain",
        description: "Known as the most iconic landmark of South Africa, an national park, once named as one of the World's 7 wonders. It's famous cable car has taken millions of people to it's peak.",
        city: "Cape Town",
        link: "https://tablemountainnationalpark.org/"
    },

    {
        image: "images/Old-Fort-sunset.jpg",
        name: "Constitution Hill",
        description: "The site of incarceration in South Africa that imprisoned a large number of world renowned men and women such as Nelson Mandela and Mahatma Gandhi",
        city: "Johannesburg",
        link: "https://www.constitutionhill.org.za/"
    },

    {
        image: "images/p-nationalpark.jpg",
        name: "Pilanesberg National Park",
        description: "Among Southern Africa’s fascinating game reserves, Pilanesberg National Park is possibly the most accessible. Situated in the ecologically rich transition zone between the Kalahari and the Lowveld, this vast area promises thrilling big game viewing in a malaria free environment. ",
        city: "Rustenberg",
        link: "https://www.pilanesbergnationalpark.org/?gclid=CjwKCAjw2bmLBhBREiwAZ6ugo-ZMCZPf3UwhWnKDCAYYWDgLoaL0MH-Ncy05sl41QopS1K1pQmI7HBoCWfoQAvD_BwE"
    },
]

export const useAfricaLandmark = () => {
    return africanLandmarkCollection.slice()
}