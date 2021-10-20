import { useNetherlandsLandmarks } from "./LandmarkDataProvider.js";
import { Landmark } from "../../ui/Landmark.js";

const landmarks = useNetherlandsLandmarks();

export const LandmarkList = () => {
  const el = document.querySelector(".landmarks");
  el.innerHTML = "<h1>Landmarks</h1>";

  for (const landmark of landmarks) {
    el.innerHTML += Landmark(landmark);
  }
}