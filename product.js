let isScrollingHorizontally = false;
let lastScrollTopProduct = 0;
let isScrollingDown = true;
let accumulatedDelta = 0;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    isScrollingHorizontally = entry.isIntersecting;
  });
}, {
    threshold: 0.1,  // Adjust this value
});

observer.observe(document.querySelector(".navigation"));

window.addEventListener('scroll', (e) => {
  const currentScrollTop = window.scrollY;
  isScrollingDown = currentScrollTop > lastScrollTopProduct;
  lastScrollTopProduct = currentScrollTop;
  
  if (isScrollingHorizontally) {
    console.log("Moving now")
    e.preventDefault();  // Prevent natural scrolling
    const wideDiv = document.querySelector(".navigation");
    const delta = isScrollingDown ? -10 : 10;
    accumulatedDelta += delta;
    
    // Bounds checking for left and right ends of wide div
    const maxTranslateX = -500 * window.innerWidth;  // Assuming vw is equivalent to the window width
    const newTranslateX = Math.min(0, Math.max(maxTranslateX, accumulatedDelta));
    wideDiv.style.transform = `translateX(${newTranslateX}px)`;
    
    // Allow natural scrolling to resume if at the rightmost end
    if (newTranslateX === maxTranslateX) {
      isScrollingHorizontally = false;
    }
  }
});
