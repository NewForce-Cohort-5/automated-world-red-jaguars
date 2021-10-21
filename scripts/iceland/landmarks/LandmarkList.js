import { useLandmarks } from "./LandmarkDataProvider.js";
import {Landmark as Landmarks} from "../../ui/Landmark.js";


export const LandmarkList = () => {
    const contentElement = document.querySelector(".landmarks-list")
    const landmarks = useLandmarks()

    let landmarksHTMLRepresentations = ""
    for (const singleObjectLandmarks of landmarks) {
        
        landmarksHTMLRepresentations += Landmarks(singleObjectLandmarks)
    }

contentElement.innerHTML += `
<article class="landmarks-list"> ${landmarksHTMLRepresentations} </article>`
}