export const Landmarks = (landmarks) => {
    return `
    <section class="landmarks card">
    <div><img  class="landmark__image image--card" src="${landmarks.Image}" /></div>
    <div class="city__name">${landmarks.Name}</div>
    <div class="city_description">${landmarks.Desc}</div>
    <div class="city_link">${landmarks.Link}</div>
    </section>`
}