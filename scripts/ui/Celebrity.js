export const Celeb = (celeb) => {
    return `
         <section class="celeb-card">
            <div class="celeb-name"><a class="celeb-link" href="${celeb.link}"><b>${celeb.name}</a></b></div>
            <div class="celeb-desc"><i>${celeb.description}</i></div>
        </section>
    `
}
