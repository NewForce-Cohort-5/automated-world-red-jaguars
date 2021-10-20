import { useSwissCelebrities } from "./CelebrityDataProvider.js"
import { Celeb } from "../../ui/Celebrity.js"
 
 export const SwissCelebrityList = () => {
 
     const celebrities = useSwissCelebrities()
 
     let swissCelebrityHTMLRepresentations = "<h1>Celebrities</h1>"
     for (const singleCelebrityObject of celebrities) {
             swissCelebrityHTMLRepresentations += Celeb(singleCelebrityObject)

     }
     document.querySelector(".swiss-celebrity-list").innerHTML += `
         <article class="swiss-celebrity-list">
             ${swissCelebrityHTMLRepresentations}
         </article>
     `
 }