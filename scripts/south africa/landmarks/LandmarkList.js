
import { useAfricaCity } from "./CityDataProvider.js"
import { AfricaCity } from "./City.js"




export const AfricaCityList = () => {



    const contentElement = document.querySelector(".africa-city-list")
    const africaCities = useAfricaCity()

    let africaCityHTMLRepresentations = ""
    for (const singleAfricaCityObject of africaCities) {



       africaCityHTMLRepresentations += AfricaCity(singleAfricaCityObject)
    }

    

    contentElement.innerHTML += `
        <article class="africa-city-list">
        ${africaCityHTMLRepresentations}  
        </article>
    `
}