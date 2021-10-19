import { useAfricaCity } from "./CityDataProvider.js"
import { City } from "../../ui/City.js"




export const AfricaCityList = () => {



    const contentElement = document.querySelector(".africa-city-list")
    const africaCities = useAfricaCity()

    let africaCityHTMLRepresentations = ""
    for (const singleAfricaCityObject of africaCities) {



       africaCityHTMLRepresentations += City(singleAfricaCityObject)
    }

    

    contentElement.innerHTML += `
        <article class="africa-city-list">
        ${africaCityHTMLRepresentations}  
        </article>
    `
}