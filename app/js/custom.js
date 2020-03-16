let servicesItems = document.querySelectorAll(".services__item");
let mainNavToggle = document.querySelector(".main-nav__toggle");
let mainNavList = document.querySelector(".main-nav__list");

mainNavToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    mainNavList.classList.toggle("main-nav__list--shown");
});

function addListener(el) {
    el.addEventListener('click', (evt) => {
        if (el.classList.contains("services__item--shown")) {
            el.classList.remove("services__item--shown");
        }
        else {
            let currentShown = document.querySelector(".services__item--shown");
            if (currentShown != null) {
                currentShown.classList.remove("services__item--shown");
            }
            el.classList.add("services__item--shown");

        }

    });
}
for (let i = 0; i < servicesItems.length; i++) {
    addListener(servicesItems[i]);
}
