export const Landmark = (landmark) => {
    return `
         <section class="city-card">
         <img class= "landmark-image" src="${landmark.image}" alt="">
         <div class="city__name"> <a class="city__link" href="${landmark.link}"><b>${landmark.name}</b></a></div>
            <div class="city__desc"><i>${landmark.description}</i></div>
            <div class="city__link">${landmark.city}</div>
        </section>
    `
}
