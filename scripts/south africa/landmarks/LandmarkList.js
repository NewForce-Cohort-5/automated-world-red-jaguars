
import { useAfricaLandmark } from "./LandmarkDataProvider.js"
import { Landmark } from "../../ui/Landmark.js"




export const AfricaLandmarkList = () => {



    const contentElement = document.querySelector(".africa-landmark-list")
    const africaLandmarks = useAfricaLandmark()

    let africaLandmarkHTMLRepresentations = ""
    for (const singleAfricaLandmarkObject of africaLandmarks) {



       africaLandmarkHTMLRepresentations += Landmark(singleAfricaLandmarkObject)
    }

    

    contentElement.innerHTML += `
        <article class="africa-landmark-list">
        ${africaLandmarkHTMLRepresentations}  
        </article>
    `
}