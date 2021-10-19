import { useAfricaCeleb } from "./CeleritiesbDataProvider.js"
import { AfricaCeleb } from "./Celebrity"




export const AfricaCelebList = () => {



    const contentElement = document.querySelector(".africa-celeb-list")
    const africaCities = useAfricaCeleb()

    let africaCelebHTMLRepresentations = ""
    for (const singleAfricaCelebObject of africaCelebs) {



       africaCelebHTMLRepresentations += AfricaCeleb(singleAfricaCelebObject)
    }

    

    contentElement.innerHTML += `
        <article class="africa-celeb-list">
        ${africaCelebHTMLRepresentations}  
        </article>
    `
}