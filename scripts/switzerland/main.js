import { renderNav } from "../ui/renderNav.js"
import { setActive } from "../helper/setActive.js";
import { SwissCityList } from "./cities/CityList.js"
import { SwissLandmarkList } from "./landmarks/LandmarkList.js"
import { SwissCelebrityList } from "./celebrities/CelebrityList.js"

renderNav()
setActive()
SwissCityList()
SwissLandmarkList()
SwissCelebrityList()