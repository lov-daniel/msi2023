// Cards
enabledComputers = [];

function handleFlip(element) {
  element.children[0].classList.toggle('flipped');
  element.children[1].classList.toggle('flipped');
  
  return element;
}

function inUse(element) {
  element.classList.toggle('inUse');
}

function isPC(element) {
  // enabledComputers.push("");
  // console.log(element.parentElement.parentElement.children[0]);

  currentPC = element.parentElement.parentElement.getAttribute("pc_id");
  
  element.parentElement.parentElement.children[0].classList.toggle('isAvailable');
  element.parentElement.parentElement.children[1].classList.toggle('isAvailable');
  handleFlip(element.parentElement.parentElement);
  
  if (enabledComputers.includes(currentPC)) {
    // Removes computer
    index = enabledComputers.indexOf(currentPC);
    enabledComputers.splice(index, 1);

    element.parentElement.parentElement.children[0].innerHTML = "";
    element.parentElement.parentElement.children[1].innerHTML = 
    `<button type="button" onclick='event.stopPropagation(); isPC(this);'>Add</button>`;

  } else {
    // Adds computer
    enabledComputers.push(currentPC);

    element.parentElement.parentElement.children[0].innerHTML = 
    `<img src="static/logo.png" alt="Computer" class="image">
    <div class="overlay">PC: ${currentPC}</div>`;

    element.parentElement.parentElement.children[1].innerHTML = 
    `<button type="button" onclick='event.stopPropagation(); isPC(this);'>Remov</button>`;
  

  console.log(enabledComputers);
  
  $.ajax({
    url: "/sendJSONdata",
    type: "POST",
    contentType: "application/json",
    data: {
      PCs: enabledComputers
    },
    success: function(response) {
      console.log("successfuly sent list");
    }
  })
  }
}