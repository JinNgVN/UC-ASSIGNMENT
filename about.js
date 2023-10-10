
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.about_info > div');
    
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5 
    });

    slides.forEach(slide => {
        observer.observe(slide);
    });
});


const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", function() {
        const accordionItem = this.parentElement;


        accordionItem.classList.toggle("active");
     
        accordionHeaders.forEach(otherHeader => {
            if(otherHeader !== header) {
                otherHeader.parentElement.classList.remove("active");
            }
        });
    });
});



