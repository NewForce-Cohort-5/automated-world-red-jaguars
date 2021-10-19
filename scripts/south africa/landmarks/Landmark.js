export const AfricaCity = (africaCity) => {
    return `
         <section class="city-card">
            <div class="city__name"><b>${africaCity.name}</b></div>
            <div class="city__desc"><i>${africaCity.description}</i></div>
            <a class="city__link" href="">${africaCity.link}</a>
            <div class="city__landmark"><b>Landmark: </b>${africaCity.landmark}</div>
            <div class="city__pop"><b>Population: </b>${africaCity.population}</div>
        </section>
    `
}
