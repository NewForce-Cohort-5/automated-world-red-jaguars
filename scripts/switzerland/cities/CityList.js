import { useSwitzerlandCities } from "./CityDataProvider.js"
 
 export const CityList = () => {
 
     const cities = useSwitzerlandCities()
 
     let fishHTMLRepresentations = ""
     for (const singleCityObject of cities) {
             cityHTMLRepresentations += City(singleCityObject)

     }
     document.querySelector("#swissCityList").innerHTML += `
         <article class="cityList">
             ${fishHTMLRepresentations}
         </article>
     `
 }