const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function observerCallback(payload){ //payload refers to intersection changes
  //if the first bit of target element appears 100%
  if(payload[0].intersectionRatio === 1){
    //makes the button appear
    button.disabled = false;
    // get rid of the observer on the target element
    observer.unobserve(terms.lastElementChild); 
  }
}

const observer = new IntersectionObserver(observerCallback, {
  root: terms, // parent element 
  threshold: 1 // intersection ratio, when its one fires the callback 
});

// observe the target element 
observer.observe(terms.lastElementChild);