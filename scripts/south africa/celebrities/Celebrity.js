export const AfricaCeleb = (africaCeleb) => {
    return `
         <section class="city-card">
            <div class="city__name"><b>${africaCeleb.name}</b></div>
            <div class="city__desc"><i>${africaCeleb.description}</i></div>
            <a class="city__link" href="">${africaCeleb.link}</a>
        </section>
    `
}
