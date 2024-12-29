window.addEventListener("load",()=>{
    let articleNav = document.getElementById("article-nav");
    let toggled = false;
    document.getElementById("article-nav-toggle").addEventListener("click",(event)=>{
        toggled = !toggled;
        event.target.innerText = toggled?"<":">";
        toggled?articleNav.classList.add("opened"):articleNav.classList.remove("opened");
    });
    document.querySelectorAll("#article-nav a").forEach(element=> {
        element.addEventListener("click",()=>{
            toggled = false;
            articleNav.classList.remove("opened");
        });
    })
});