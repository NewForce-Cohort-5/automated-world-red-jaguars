import { Celebs } from "./Celebrities.js";
import { useCelebsIceland } from "./CelebritiesDataProvider.js";

export const CelebsList = () => {
    const contentElement = document.querySelector(".celeb-list")
    const celebs = useCelebsIceland()

    let celebsHTMLRepresentations = ""
    for (const singleObjectCelebs of celebs) {

        celebsHTMLRepresentations += Celebs(singleObjectCelebs)
    }

    contentElement.innerHTML += `
    <article class ="celeb-list"> ${celebsHTMLRepresentations}</article>`
}