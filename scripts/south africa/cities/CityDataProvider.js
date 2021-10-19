const africanCityCollection = [
    {
        name: "Johannesburg",
        description: "Renowned for its thunderstorms, it is ironically the Economic powerhouse of Africa! 'Joburg' as it is called by locals, was founded in the heydays of one of the World's biggest and richest gold rushes - earning it the name of 'Egoli' meaning 'place of gold'.",
        link: "https://sahistory.org.za/place/johannesburg-gauteng-province",
        landmark:"Constitution Hill",
        population:"5,926,668"
    },

    {
        name: "Rustenburg",
        description: "The Magaliesberg range of Mountains dominates the Landscape that is now known as the Northwest Province. Rustenburg, the largest City in this Province, has significance for many groups in South Africa, and its History is complex and rich in variety.",
        link: "https://www.sahistory.org.za/place/rustenburg",
        landmark:"Pilanesberg National Park",
        population:"549,575"
    },

    {
        name: "Cape Town",
        description: "Cape Town is one of South Africa’s most Historically important Cities. It was here, in the Mother City, where the first European colonists set foot in South Africa—which also marked the beginning of the South African slave trade.",
        link: "https://www.sahistory.org.za/place/cape-town-western-province",
        landmark:"Table Mountain",
        population:"4,709,990"
    },
]

export const useAfricaCity = () => {
    return africanCityCollection.slice()
}