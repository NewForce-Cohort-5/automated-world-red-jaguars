const africanCelebCollection = [
    {
        name: "Trevor Noah",
        description: "Professional comedian who began his career while growing up in Johannesburg until his introduction to Hollywood with a role in The Daily Show",
        link: "https://en.wikipedia.org/wiki/Trevor_Noah"
    },

    {
        name: "Roger Federer",
        description: "World renowed tennis champion. Federer's mother, Lynette, was born in Kempton park, on the East Ran, adjacent to Johannesburg",
        link: "https://en.wikipedia.org/wiki/Roger_Federer"
    },

    {
        name: "Nelson Mandela",
        description: "The first president of post-Apartheid South Africa and join Nobel Peace Prize Winner",
        link: "https://www.nelsonmandela.org/content/page/biography"
    },
]

export const useAfricaCeleb = () => {
    return africanCelebCollection.slice()
}