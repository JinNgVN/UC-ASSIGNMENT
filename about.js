document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide_wrapper');

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0,  // Trigger even when a tiny portion of the slide becomes visible.
        rootMargin: "-200px -50px -200px -50px"  // Adjust this value to decide how far outside the viewport the callback should be triggered.
    });

    slides.forEach(slide => {
        observer.observe(slide);
    });
});



const accordionHeaders = document.querySelectorAll(".accordion_header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", function() {
        const accordionItem = this.parentElement;


        accordionItem.classList.toggle("active");
     
        // accordionHeaders.forEach(otherHeader => {
        //     if(otherHeader !== header) {
        //         otherHeader.parentElement.classList.remove("active");
        //     }
        // });
    });
});



function toggleIcon(element) {
    const icon = element.querySelector('i');
    
    if (icon.classList.contains('fa-plus')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }
}
