
let resourcesHTML = ''
//lager en variabel med en tom streng som blir brukt til å bygge opp HTML-innholdet

resources.map(info => resourcesHTML += `<article>
<h2>${info.category}</h2>
<p>${info.text}</p>
<ul>
    ${info.sources.map(source => `<li><a href=${source.url}>${source.title}</a></li>`).join('')}
</ul>
</article>`
)
//bruker map for å gå igjennom objektene i arrayen resources, for så å sette verdiene inn i HTML-koden

function showInfo(e) {
    resourcesHTML = ""
    let menuItems = Array.from(document.getElementsByClassName("menuItem"))
    menuItems.map(menuItem => {
        if (menuItem.classList.contains("active")) {
            menuItem.classList.remove("active")
        }
    })
    e.target.classList.add("active")
    const main = document.getElementsByTagName("main")
    //lager funksjonen showInfo hvor elementene som har id" menuItem og lager en array ved hjelp av Array.from
    //kjører en map på menuItems hvor elementer med class="active" blir fjernet.
    //e.target.classList.add("active") legger til active på elementet som blir klikket på.
    
    resources.map(info => {
        if (e.target.id === info.category) {
            resourcesHTML += `<article>
            <h2>${info.category}</h2>
            <p>${info.text}</p>
            <ul>
                ${info.sources.map(source => `<li><a href=${source.url}>${source.title}</a></li>`).join('')}
            </ul>
            </article>`
        }
    //bruker map på resources arrayen for å generere HTML-kode basert på verdiene fra resources. 
    //koden sjekker også om kategorien til en ressurs er lik ID-en til elementet som blir klikket på.
    main[0].innerHTML = resourcesHTML
    //setter HTML-innholdet til main-elementet til resourcesHTML som nå inneholder generert HTML-kode for den
    //valgte kategorien.
})
}

document.getElementById("HTML").click()
//starter visningen med HTML-kategorien som standard.
