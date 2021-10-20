import { useAfricaCeleb } from "./CelebritiesDataProvider.js"
import { Celeb } from "../../ui/Celebrity.js"




export const AfricaCelebList = () => {


    const celebrities = useAfricaCeleb()
 
    let africaCelebrityHTMLRepresentations = "<h1>Celebrities</h1>"
    for (const singleCelebrityObject of celebrities) {
            africaCelebrityHTMLRepresentations += Celeb(singleCelebrityObject)

    }
    document.querySelector(".africa-celeb-list").innerHTML += `
        <article class="africa-celeb-list">
            ${africaCelebrityHTMLRepresentations}
        </article>
    `
}