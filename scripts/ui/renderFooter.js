import { Footer } from "./Footer.js";

export const renderFooter = () => {
  const location = document.querySelector(".footer");

  location.innerHTML = Footer();
}