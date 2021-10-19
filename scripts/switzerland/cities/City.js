export const City = (city) => {
    return `
        <section class="city card">
            <div><img  class="city__image image--card" src="${city.image}" /></div>
            <div class="city__name"><a class="city__link" href="${city.name}"></a></div>
            <div class="city__pop">${city.population}</div>
            <div class="city__description">${city.description}</div>
            <div class="city__landmarks">${city.landmarks}</div>
            <div class="city__link"><a href="${city.link}"</a></div>
        </section>
    `
}