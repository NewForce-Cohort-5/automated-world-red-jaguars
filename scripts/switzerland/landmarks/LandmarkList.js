import { useSwissLandmarks } from "./LandmarkDataProvider.js"
import { Landmark } from "../../ui/Landmark.js"
 
 export const SwissLandmarkList = () => {
 
     const landmarks = useSwissLandmarks()
 
     let swissLandmarkHTMLRepresentations = "<h1>Landmarks</h1>"
     for (const singleLandmarkObject of landmarks) {
             swissLandmarkHTMLRepresentations += Landmark(singleLandmarkObject)

     }
     document.querySelector(".swiss-landmark-list").innerHTML += `
         <article class="swiss-landmark-list">
             ${swissLandmarkHTMLRepresentations}
         </article>
     `
 }