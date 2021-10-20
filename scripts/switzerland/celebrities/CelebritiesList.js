import { useSwissCelebrities } from "./CelebritiesDataProvider.js"
import { City } from "../../ui/Celebrity.js"
 
 export const SwissCelebrityList = () => {
 
     const celebrities = useSwissCelebrities()
 
     let swissCelebrityHTMLRepresentations = ""
     for (const singleCelebrityObject of celebrities) {
             swissCelebrityHTMLRepresentations += Celebrity(singleCelebrityObject)

     }
     document.querySelector(".swiss-celebrity-list").innerHTML += `
         <article class="swiss-celebrity-list">
             ${swissCelebrityHTMLRepresentations}
         </article>
     `
 }