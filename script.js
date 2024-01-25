
let resourcesHTML = ''

resources.map(info => resourcesHTML += `<article>
<h2>${info.category}</h2>
<p>${info.text}</p>
<ul>
    ${info.sources.map(source => `<li><a href=${source.url}>${source.title}</a></li>`).join('')}
</ul>
</article>`
)



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
    main[0].innerHTML = resourcesHTML
})
}

document.getElementById("HTML").click()

