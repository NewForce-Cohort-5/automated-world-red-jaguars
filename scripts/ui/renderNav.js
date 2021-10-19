import { navBar } from "./navbar.js"; 

export const renderNav = () => {
  const location = document.querySelector(".nav-loc");

  location.innerHTML = navBar();
}