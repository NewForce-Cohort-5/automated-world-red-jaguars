import { renderNav } from "../ui/renderNav.js";
import { setActive } from "../helper/setActive.js";
import { CityList } from "./cities/CityList.js";
import { LandmarkList } from "./landmarks/LandmarkList.js";
import { CelebrityList } from "./celebrities/CelebrityList.js";
import { renderFooter } from "../ui/renderFooter.js";

renderNav();
setActive();
CityList();
LandmarkList();
CelebrityList();
renderFooter();