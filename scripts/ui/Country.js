export const Country = (country) => {
    return `
         <section class="country-card">
            <img class="country-image" src="${country.image}" alt="">
            <div class="country__name"> <a class="country__link" href="${country.link}"><b>${country.name}</b></a></div>
            <div class="country__desc"><i>${country.description}</i></div>
        </section>
    `
}