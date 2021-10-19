export const City = (city) => {
    return `
        <section class="city card">
            <div><img  class="city__image image--card" src="${city.image}" /></div>
            <div class="city__name">${city.name}</div>
            <div class="city__population">${city.species}</div>
            <div class="city__description">${city.description}</div>
            <div class="city__landmarks">${fish.location}</div>
            <div class="fi__diet">${fish.food}</div>
        </section>
    `
}