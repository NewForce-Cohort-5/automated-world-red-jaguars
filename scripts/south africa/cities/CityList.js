import { useAfricaCity } from "./CityDataProvider.js"
import { City } from "../../ui/City.js"




export const AfricaCityList = () => {



    const cities = useAfricaCity()
 
    let africaCityHTMLRepresentations = "<h1>Cities</h1>"
    for (const singleCityObject of cities) {
            africaCityHTMLRepresentations += City(singleCityObject)

    }
    document.querySelector(".africa-city-list").innerHTML += `
        <article class="africa-city-list">
            ${africaCityHTMLRepresentations}
        </article>
    `
}