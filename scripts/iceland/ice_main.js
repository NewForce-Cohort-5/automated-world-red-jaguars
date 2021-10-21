import { renderNav } from "../ui/renderNav.js";
import { CitiesList } from "./cities/CitiesList.js";
import {LandmarkList} from "./landmarks/LandmarkList.js";
import { CelebsList} from "./celebrities/CelebritiesList.js"
import { setActive } from "../helper/setActive.js";
import { renderFooter } from "../ui/renderFooter.js"

renderNav()
CitiesList()
LandmarkList()
CelebsList()
setActive()
renderFooter()