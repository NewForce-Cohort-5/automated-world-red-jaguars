const africanCelebCollection = [
    {
        name: "Trevor Noah",
        description: "Professional comedian who began his career while growing up in Johannesburg until his introduction to Hollywood with a role in The Daily Show",
        link: "https://en.wikipedia.org/wiki/Trevor_Noah"
    },

    {
        name: "Elon Musk",
        description: "Visionary entrepreneur Elon Musk is the charismatic co-founder of PayPal (PYPL) and Tesla (TSLA), as well as the founder of SpaceX, Neuralink, and The Boring Company. He serves as CEO of Tesla and CEO/lead designer of SpaceX.",
        link: "https://en.wikipedia.org/wiki/Elon_Musk"
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