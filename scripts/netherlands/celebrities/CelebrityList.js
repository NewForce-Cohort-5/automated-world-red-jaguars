import { useNetherlandsCitizens } from "./CelebritiesDataProvider.js";
import { Celeb as Celebrity } from "../../ui/Celebrity.js";

const celebrities = useNetherlandsCitizens();

export const CelebrityList = () => {
  const el = document.querySelector(".celebrities");
  el.innerHTML = "<h1>Celebrities</h1>";

  for (const celebrity of celebrities) {
    el.innerHTML += Celebrity(celebrity);
  }
}