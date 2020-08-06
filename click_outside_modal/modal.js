// select all card buttons
const cardButtons = document.querySelectorAll('.card button');
// select inner modal
const innerModal = document.querySelector('.modal-inner');
// select outer modal
const outerModal = document.querySelector('.modal-outer');


//define handle button click function
function handleButtonClick(event){
  //grab the clicked button which has the listener
  const button = event.currentTarget;
  //find the card associated with the clicked button
  const card = button.closest('.card');
  // console.log(card);
  // grab the image src
  const imageSrc = card.querySelector('img').src;
  // grab the card description
  const desc = card.dataset.description; 
  console.log(desc);
  // grab the name info
  const name = card.querySelector('h2').textContent;
  // populate the modal with the new info
  innerModal.innerHTML = `
    <img src = ${imageSrc}.replace('200', '600') alt= ${name}>
    <p>${desc}</p>
  `
  // show the modal
  outerModal.classList.add('open');
}

//loop over each card button and add a listener for a click on each button
cardButtons.forEach(button => button.addEventListener('click', handleButtonClick));

//define function to close modal
function closeModal(){
  outerModal.classList.remove('open');
}

//add event listener to click outer modal (not inside inner modal)
outerModal.addEventListener('click',function(event){
  const outsideModal = !event.target.closest('.modal-inner');
  if(outsideModal){
    closeModal();
  }
});

// add event listener to escape keydown
window.addEventListener('keydown', function(event){
  if(event.key === 'Escape'){
    closeModal();
  }
})
