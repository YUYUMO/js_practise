// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const list = document.createElement('ul');
// add three list items with the words "one, two three" in them
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

const li1 = document.createElement('li');
li1.textContent = 'one';
li.insertAdjacentElement('beforebegin', li1);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);
// put that list into the above wrapper
div.appendChild(list);
// create an image
const image = document.createElement('img');
// set the source to an image
image.setAttribute('src', 'https://picsum.photos/200');
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div>
    <p></p>
    <p></p>
  </div>
`;

const pDiv = document.createRange().createctxualFragment(myHTML);
// put this div before the unordered list from above
div.insertBefore(pDiv, list);
// add a class to the second paragraph called warning
const firstP = document.querySelector('p');
firstP.nextElementSibling.classList.add('warning');
// remove the first paragraph
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const HTML = `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
      <button class='delete'>Delete</button>
    </div>
  `;
  return HTML;
}

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');
document.body.appendChild(cardsDiv);
// Have that function make 4 cards
let cards = generatePlayerCard('phyllis', 23, 130);
cards += generatePlayerCard('wes', 30, 150);
cards += generatePlayerCard('john', 28, 160);
cards += generatePlayerCard('charlotte', 32, 170);

const cardsHTML = document.createRange().createctxualFragment(cards);
// append those cards to the div
cardsDiv.appendChild(cardsHTML);
// put the div into the DOM just before the wrapper element
document.body.insertBefore(cardsDiv, div);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const deleteButtons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const clickedButton = event.currentTarget;
  clickedButton.closest('.playerCard').remove();
}
// loop over them and attach a listener
deleteButtons.forEach(button => button.addEventListener('click', deleteCard));
