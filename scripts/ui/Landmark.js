export const Landmark = (landmark) => {
    return `
         <section class="landmark-card">
         <img class= "landmark-image" src="${landmark.image}" alt="">
         <div class="landmark-name"> <a class="city__link" href="${landmark.link}"><b>${landmark.name}</b></a></div>
            <div class="landmark-desc"><i>${landmark.description}</i></div>
            <div class="landmark-link">${landmark.city}</div>
        </section>
    `
}
