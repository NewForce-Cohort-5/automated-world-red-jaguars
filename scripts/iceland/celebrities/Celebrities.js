export const Celebs = (celebs) => {
    return `
    <section class="celebs card">
    <div><img  class="landmark__image image--card" src="${celebs.Image}" /></div>
    <div class="city__name">${celebs.Name}</div>
    <div class="city_description">${celebs.Desc}</div>
    <div class="city_link">${celebs.Link}</div>
    </section>`
}