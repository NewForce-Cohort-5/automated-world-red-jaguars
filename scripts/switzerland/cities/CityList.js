import { useSwitzerlandCities } from "./CityDataProvider.js"
 
 export const CityList = () => {
 
     const cities = useSwitzerlandCities()
 
     let cityHTMLRepresentations = ""
     for (const singleCityObject of cities) {
             cityHTMLRepresentations += City(singleCityObject)

     }
     document.querySelector(".swiss-city-list").innerHTML += `
         <article class="swiss-city-list">
             ${cityHTMLRepresentations}
         </article>
     `
 }