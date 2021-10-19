export const Cities = (cities) => {
    return `
        <section class="cities card">
            <div><img  class="city__image image--card" src="${citiesIceland.Image}" /></div>
            <div class="city__name">${citiesIceland.Name}</div>
            <div class="city_description">${citiesIceland.Desc}</div>
            <div class="city_link">${citiesIceland.Link}</div>
            <div class="city_landmark">${citiesIceland.Landmark}</div>
            <div class="city_population">${citiesIceland.Population}</div>
        </section>
    `