export const Cities = (cities) => {
    return `
        <section class="cities card">
            <div><img  class="city__image image--card" src="${cities.Image}" /></div>
            <div class="city__name">${cities.Name}</div>
            <div class="city_description">${cities.Desc}</div>
            <div class="city_link">${cities.Link}</div>
            <div class="city_landmark">${cities.Landmark}</div>
            <div class="city_population">${cities.Population}</div>
        </section>
    `
}