import { renderNav } from "../ui/renderNav.js"
import { setActive } from "../helper/setActive.js";
import { AfricaCityList } from "./cities/CityList.js";
import { AfricaLandmarkList } from "./landmarks/LandmarkList.js"
import { AfricaCelebList } from "./celebrities/CelebrityList.js"
import { renderFooter } from "../ui/renderFooter.js"



renderNav();
setActive();
AfricaCityList();
AfricaLandmarkList();
AfricaCelebList();
renderFooter();