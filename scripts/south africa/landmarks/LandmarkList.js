
import { useAfricaLandmark } from "./LandmarkDataProvider.js"
import { Landmark } from "../../ui/Landmark.js"




export const AfricaLandmarkList = () => {



    const landmarks = useAfricaLandmark()
 
    let africaLandmarkHTMLRepresentations = "<h1>Landmarks</h1>"
    for (const singleLandmarkObject of landmarks) {
            africaLandmarkHTMLRepresentations += Landmark(singleLandmarkObject)

    }
    document.querySelector(".africa-landmark-list").innerHTML += `
        <article class="africa-landmark-list">
            ${africaLandmarkHTMLRepresentations}
        </article>
    `
}