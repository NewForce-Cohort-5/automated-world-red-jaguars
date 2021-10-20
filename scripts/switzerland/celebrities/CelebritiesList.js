import { useSwissCelebrities } from "./CelebritiesDataProvider.js"
import { Celeb } from "../../ui/Celebrity.js"
 
 export const SwissCelebrityList = () => {
 
     const celebrities = useSwissCelebrities()
 
     let swissCelebrityHTMLRepresentations = ""
     for (const singleCelebrityObject of celebrities) {
             swissCelebrityHTMLRepresentations += Celeb(singleCelebrityObject)

     }
     document.querySelector(".swiss-celebrity-list").innerHTML += `
         <article class="swiss-celebrity-list">
             ${swissCelebrityHTMLRepresentations}
         </article>
     `
 }