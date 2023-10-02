const nav = document.querySelector(".primary-navigation");
const button = document.querySelector(".mobile-nav-toggle");

button.addEventListener('click', () => {
    const visibility = nav.getAttribute("data-visible");
    
    if(visibility === "false" ){
        nav.setAttribute("data-visible", true)
        button.setAttribute("aria-expanded", true)
    } else {
        nav.setAttribute("data-visible", false)
        button.setAttribute("aria-expanded", false)
    }

    console.log(button.getAttribute("aria-expanded"))
});
