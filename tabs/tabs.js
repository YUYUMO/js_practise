const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// array.from change the node list into array
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(event){
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  })
  // mark all tabs as unselected
  tabButtons.forEach(button=> {
    button.setAttribute('aria-selected', false); 
  })
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it
  // same as const id = event.currentTarget.id;
  const {id} = event.currentTarget;
  /* method 1
  console.log(id);
  const tabPanel = tabs.querySelector(`[aria-labelledby = "${id}"]`);
  tabPanel.hidden = false;
  */
  // method 2 - find in the array of panels 
  console.log(tabPanels);
  const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby')=== id); 
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', tabClickHandler)); 