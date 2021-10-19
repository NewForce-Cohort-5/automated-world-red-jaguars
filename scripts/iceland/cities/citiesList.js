import { useCities } from "./CityDataProvider.js";
import { Cities } from "./cities.js";


export const CitiesList = () => {
 
    const contentElement = document.querySelector(".iceland-list")
    const cities = useCities()

    // Generate all of the HTML for all of the fish
    let citiesHTMLRepresentations = ""
    for (const singleObjectCities of cities) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       citiesHTMLRepresentations += Cities(singleObjectCities)
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="iceland-list">
            ${citiesHTMLRepresentations}
        </article>`