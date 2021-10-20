import { useNetherlandsCities } from "./CityDataProvider.js";
import { City } from "../../ui/City.js";

const cities = useNetherlandsCities();

export const CityList = () => {
  const el = document.querySelector(".cities");
  el.innerHTML = "<h1>Cities</h1>";

  for (const city of cities) {
    el.innerHTML += City(city);
  }
}