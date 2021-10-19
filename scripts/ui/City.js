export const City = (city) => {
    return `
         <section class="city-card">
            <div class="city__name"> <a class="city__link" href="${city.link}"><b>${city.name}</b></a></div>
            <div class="city__desc"><i>${city.description}</i></div>
            <div class="city__landmark"><b>Landmark: </b>${city.landmark}</div>
            <div class="city__pop"><b>Population: </b>${city.population}</div>
        </section>
    `
}
