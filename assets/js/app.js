function changeNav(scrollingDown) {
    let ribbon = document.getElementsByClassName('ribbon')[0],
        fontSize = window.getComputedStyle(ribbon, null).getPropertyValue('font-size');
    if (parseInt(fontSize) == 40) {
        if ((document.body.scrollTop != 0 || document.documentElement.scrollTop !== 0) && scrollingDown) {
            ribbon.style.opacity = 1;
            ribbon.style.display = "flex";
        } else {
            ribbon.style.opacity = 0;
            ribbon.style.display = "none";
        }
    }
};

let lastScrollTop = 0;
document.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        changeNav(true);
    } else {
        changeNav(false);
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);