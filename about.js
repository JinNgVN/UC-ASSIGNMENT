let lastScrollTop = 0;
const body = document.body


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.about_info > div');
    
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5  // Adjust if needed. 0.1 means 10% visibility triggers the callback.
    });

    slides.forEach(slide => {
        observer.observe(slide);
    });
});

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

// Get all accordion headers
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", function() {
        const accordionItem = this.parentElement;

        // Toggle active class
        accordionItem.classList.toggle("active");
        
        // Optionally: Close other sections
        accordionHeaders.forEach(otherHeader => {
            if(otherHeader !== header) {
                otherHeader.parentElement.classList.remove("active");
            }
        });
    });
});



