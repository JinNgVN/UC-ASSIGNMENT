const wideDiv = document.querySelector('.navigation');
const stickyParent = document.querySelector(".parent_wide_div");
const nextSection = document.querySelector('footer');

// Artificially increase the document height by the width of the wide-div
document.body.style.height = `${document.body.offsetHeight + wideDiv.offsetWidth - wideDiv.offsetHeight*2}px`;

let threshold = wideDiv.offsetWidth - window.innerWidth;
let wideDivHeight = wideDiv.offsetHeight;
window.addEventListener('scroll', function(e) {
    let position = window.scrollY;

    if (position > wideDivHeight) {
        let adjustedPosition = position - wideDivHeight;

        if (adjustedPosition <= threshold) {
            wideDiv.style.transform = `translateX(-${adjustedPosition}px)`;
            if (stickyParent.style.position !== 'sticky') {
                stickyParent.style.position = 'sticky';  
            }
        } else {
          wideDiv.style.transform = `translateX(-${threshold}px)`;
        }
    }
});


const imageProduct = document.querySelector(".image");
const nav = document.querySelector("header");
function navigateTo(index) {
  // Assuming each item in .navigation has the same width, and that width is 100vw
  // Adjust accordingly if this is not the case
  const itemWidth = stickyParent.offsetWidth;

  // Adjust the scroll position to match the translation
  const adjustedScrollPosition = (itemWidth * index + nav.offsetHeight + imageProduct.offsetHeight);
  window.scrollTo(adjustedScrollPosition, adjustedScrollPosition );
}

// Add the event listeners to all nav_product elements
const navProducts = document.querySelectorAll('.nav_product');
navProducts.forEach((navProduct, index) => {
  navProduct.addEventListener('click', function() {
      navigateTo(index);
  });
});
