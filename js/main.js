// start navbar
let navbarLinks = document.querySelector(".navbar .container .links");
let barsIcon = document.querySelector(".navbar .container .fa-bars");
let closebar = document.querySelector(".navbar .container .fa-close")
let navbarLinksHeight = navbarLinks.offsetHeight;
if (document.body.offsetWidth < 992) {
    navbarLinks.style.height = "0px";
}
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-bars")) {
        barsIcon.className = "fas fa-close";
        navbarLinks.style.height = `${navbarLinksHeight}px`;
        navbarLinks.style.borderBottom = "3px solid var(--text-color)";
    }
    else if (e.target.classList.contains("fa-close")){
        barsIcon.className = "fas fa-bars";
        navbarLinks.style.height = `0px`;
        navbarLinks.style.borderBottom = "none";
    }
})

// barsIcon.onclick = function () {
//     barsIcon.className = "fas fa-close"
//     navbarLinks.style.height = `${navbarLinksHeight}px`;
// }
// closebar.onclick = function () {
//     navbarLinks.style.height = `0px`;
// }
// end navbar
let linkedliost = {
    val: 1,
    next:{
        val: 2,
        next: null,
    }
}
let node = {
    val: 1,
    next: {
        val: 1,
        next: null,
    },
}
