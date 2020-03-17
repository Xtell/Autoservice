document.addEventListener("DOMContentLoaded", function(event) { 
    let servicesItems = document.querySelectorAll(".services__item");
    let mainNavToggle = document.querySelector(".main-nav__toggle");
    let mainNavList = document.querySelector(".main-nav__list");
    
    mainNavToggle.addEventListener('click', (evt) => {
        evt.preventDefault();
        mainNavList.classList.toggle("main-nav__list--shown");
    });
    
    function addListener(el) {
        el.addEventListener('click', (evt) => {
            let sublist = el.querySelector(".services__sublist");
            let sublistArrow = {
                element = el.querySelector('.services__sublist-arrow'),
                width: parseInt(getComputedStyle(this.element).borderLeftWidth),
                height: parseInt(getComputedStyle(this.element).borderBottomWidth),
                positionLeft: parseInt(getComputedStyle(this.element).left)
            };
            // let arrowPosition = parseInt(getComputedStyle(sublist, "::after").left);
            // let arrowWidth = parseInt(getComputedStyle(sublist, "::after").borderLeftWidth);
            if (el.classList.contains("services__item--shown")) {
                el.classList.remove("services__item--shown");
                closeSublist(sublist);
            }
            else {
                let currentShown = document.querySelector(".services__item--shown");
                if (currentShown != null) {
                    currentShown.classList.remove("services__item--shown");
                    // closeSublist(sublist);
                }
                el.classList.add("services__item--shown");
                expandSublist(el, sublist, sublistArrow);
            }
        });
    }
    function expandSublist(item, sublist, sublistArrow) {
        // Item
        let itemOffsetTop = item.offsetTop;
        let itemOffsetLeft = item.offsetLeft;
        let itemWidth = item.offsetWidth;
        let itemHeight = item.offsetHeight;
        //Sublist arrow
        let sublistCurrentPositionTop = parseInt(getComputedStyle(sublist).top, 10);
        let sublistNewPositionTop = itemOffsetTop + itemHeight + 20;
        let sublistArrowPositionTop = sublistNewPositionTop - sublistArrow.height;
        let sublistArrowPositionLeft = Math.floor(itemWidth / 2) + itemOffsetLeft - sublistArrow.width;
        sublist.style.top = String(sublistNewPositionTop) + "px";
        sublistArrow.element.style.top = String(sublistArrowPositionTop) + "px";
        sublistArrow.element.style.left = String(sublistArrowPositionLeft) + "px";
    }
    function closeSublist(sublist) {
        sublist.style.top = "";

    }
    for (let i = 0; i < servicesItems.length; i++) {
        addListener(servicesItems[i]);
    }
  });
