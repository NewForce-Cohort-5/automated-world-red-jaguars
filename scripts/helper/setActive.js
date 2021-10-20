export const setActive = () => {

  // Extract the current page pathname from the document's location object
  // Remove the [/] and [.html] e.g. /netherlands.html becomes netherlands
  const removeDotHTML = document.location.pathname.replace(/[.]html$/, '');
  const page = removeDotHTML.replace(/\//, '');
  
  // Get all elements with the class nav-link and iterate over them to find
  // the one with the current page name inside the elements text content
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {

    // Make a variable the gets the links text content and make it all lowercase
    const linkLowerCase = link.textContent.toLocaleLowerCase();
    if (page === linkLowerCase) {
      
      // Once a match is found within the array set that link's class to active
      link.classList += ' active';
    }
  });
}