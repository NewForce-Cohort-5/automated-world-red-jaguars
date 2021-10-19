import { useSwissCity } from "./CityDataProvider.js"
import { City } from "../../ui/City.js"
 
 export const SwissCityList = () => {
 
     const cities = useSwissCity()
 
     let swissCityHTMLRepresentations = ""
     for (const singleCityObject of cities) {
             swissCityHTMLRepresentations += City(singleCityObject)

     }
     document.querySelector(".swiss-city-list").innerHTML += `
         <article class="swiss-city-list">
             ${swissCityHTMLRepresentations}
         </article>
     `
 }