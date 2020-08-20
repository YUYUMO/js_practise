// grab tabs
const tabs = document.querySelector('.tabs');
// grab tab buttons
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// grab tab panels and turn them into array
const tabPanels = Array.from(tabs.querySelectorAll('[role= "tabpanel"]'));

//create a function to handle click of the tab button
function handleTabClick(){
  //hide all tab panels
  tabPanels.forEach((tabPanel)=>{
    tabPanel.hidden = true;
  });
  //mark all tab buttons as unselected
  tabButtons.forEach((button)=>{
    button.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected',true);
  // find the associated tab panel and show it
  /*
  method 1
  const tabPanel = tabs.querySelector(`[aria-labelledby = "${id}"]`);
  tabPanel.hidden = false;
  */
  // method 2 find in the array of tab panels
  const id = event.currentTarget.id;
  const tabPanel = tabPanels.find(panel=> panel.getAttribute('aria-labelledby') === id);
  tabPanel.hidden = false;
}


// listen to the click of tab button and run the handler function 
tabButtons.forEach((button) => {
  button.addEventListener('click', handleTabClick);
})
