let lastScrollTop = 0;
const body = document.body

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    if (currentScroll <= 0) {
        body.classList.remove("scroll_up")
    }
    if (currentScroll > lastScrollTop && !body.classList.contains("scroll_down")) {
        body.classList.remove("scroll_up");
        body.classList.add("scroll_down");
    }
    if (currentScroll < lastScrollTop && body.classList.contains("scroll_down")) {
        body.classList.remove("scroll_down");
        body.classList.add("scroll_up");
    }
    lastScrollTop = currentScroll


})
