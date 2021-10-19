export const Landmark = (landmark) => {
    return `
         <section class="landmark-card">
            <div class="landmark__name"> <a class="landmark__link" href="${city.link}"><b>${city.name}</b></a></div>
            <div class="landmark__desc"><i>${landmark.description}</i></div>
            <div class="landmark__landmark"><b>Landmark: </b>${landmark.landmark}</div>
            <div class="landmark__pop"><b>Population: </b>${landmark.population}</div>
        </section>
    `
}