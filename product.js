const wideDiv = document.querySelector('.navigation');
const stickyParent = document.querySelector(".parent_wide_div");
const nextSection = document.querySelector('footer');
const navProducts = document.querySelectorAll('.nav_product');
let previousActiveNav = null;


// Artificially increase the document height by the width of the wide-div
document.body.style.height = `${document.body.offsetHeight + wideDiv.offsetWidth - wideDiv.offsetHeight*2}px`;

let threshold = wideDiv.offsetWidth - window.innerWidth;
let wideDivHeight = wideDiv.offsetHeight;
window.addEventListener('scroll', function(e) {
    let position = window.scrollY;

    if (position > wideDivHeight) {
      let adjustedPosition = position - wideDivHeight;

      if (adjustedPosition <= threshold) {
        hightlightNav(position);
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
  let adjustedScrollPosition = (itemWidth * index + nav.offsetHeight + imageProduct.offsetHeight);
  adjustedScrollPosition = adjustedScrollPosition === 715 ? 745 : adjustedScrollPosition;
  console.log(adjustedScrollPosition);
  window.scrollTo(adjustedScrollPosition, adjustedScrollPosition);
}

// Add the event listeners to all nav_product elements

navProducts.forEach((navProduct, index) => {
  navProduct.addEventListener('click', function() {
    toggleClassNav(navProduct);
    navigateTo(index);
  });
});

const toggleClassNav = (navProduct) => {
  if (previousActiveNav) {
    previousActiveNav.classList.remove("select");
  }
  previousActiveNav = navProduct;
  navProduct.classList.add("select");
}

const hightlightNav = (adjustedPosition) => {
  if (adjustedPosition >= 745 && adjustedPosition <1931) {
    toggleClassNav(navProducts[0]);
  } else if (adjustedPosition >= 1931 && adjustedPosition <3300) {
    toggleClassNav(navProducts[1]);
  } else if (adjustedPosition >= 3300 && adjustedPosition <4700) {
    toggleClassNav(navProducts[2]);
  } else if (adjustedPosition >= 4700 && adjustedPosition <6300) {
    toggleClassNav(navProducts[3]);
  } else if (adjustedPosition >= 6300 && adjustedPosition <7700) {
    toggleClassNav(navProducts[4]);
  } else {
    toggleClassNav(navProducts[5]);
  }
}
