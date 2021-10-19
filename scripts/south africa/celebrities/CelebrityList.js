import { useAfricaCeleb } from "./CelebritiesDataProvider.js"
import { Celeb } from "./Celebrity.js"




export const AfricaCelebList = () => {



    const contentElement = document.querySelector(".africa-celeb-list")
    const africaCelebs = useAfricaCeleb()

    let africaCelebHTMLRepresentations = ""
    for (const singleAfricaCelebObject of africaCelebs) {



       africaCelebHTMLRepresentations += Celeb(singleAfricaCelebObject)
    }

    

    contentElement.innerHTML += `
        <article class="africa-celeb-list">
        ${africaCelebHTMLRepresentations}  
        </article>
    `
}