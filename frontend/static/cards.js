// Cards
enabledComputers = [];
inUseComputers = [];
startTime = [];
userIDs = [];

const d = new Date();

function handleFlip(element) {
  element.children[0].classList.toggle('flipped');
  element.children[1].classList.toggle('flipped');
  
  return element;
}

function inUse(element) {
  currentPC = element.parentElement.parentElement.getAttribute("pc_id");
    
  element.parentElement.parentElement.children[0].classList.toggle('isAvailable');
  element.parentElement.parentElement.children[1].classList.toggle('isAvailable');

  element.parentElement.parentElement.children[0].classList.toggle('inUse');
  element.parentElement.parentElement.children[1].classList.toggle('inUse');

  if (inUseComputers.includes(currentPC)) {
    // Removes from being used
    index = inUseComputers.indexOf(currentPC);
    inUseComputers.splice(index, 1);

    element.parentElement.parentElement.children[1].innerHTML = 
    `<button type="button" onclick='event.stopPropagation(); isPC(this);'>Remove</button>
    <button type="button" onclick='event.stopPropagation(); showModal(this); inUse(this);'>Use PC</button>
    `;

  } else {
    // Adds to being used

    inUseComputers.push(currentPC);
    index = inUseComputers.indexOf(currentPC);
    
    userIDs.push(document.getElementById("fname").value);
    console.log("current user: " + userIDs);
    console.log("index: " + index);


    element.parentElement.parentElement.children[1].innerHTML = 
    `<button type="button" onclick='event.stopPropagation(); isPC(this);'>Remove</button>
    <button type="button" onclick='event.stopPropagation(); inUse(this);'>Done!</button>
    <div>Used by: ${userIDs[index]}</div>
    `;  

  console.log("Computers in use: " + inUseComputers);
  
  }
}

function isPC(element) {
  // enabledComputers.push("");
  // console.log(element.parentElement.parentElement.children[0]);

  currentPC = element.parentElement.parentElement.getAttribute("pc_id");
  
  // element.parentElement.parentElement.children[0].classList.toggle('isAvailable');
  // element.parentElement.parentElement.children[1].classList.toggle('isAvailable');
  handleFlip(element.parentElement.parentElement);
  
  if (enabledComputers.includes(currentPC)) {
    // Removes computer
    index = enabledComputers.indexOf(currentPC);
    enabledComputers.splice(index, 1);

    $.ajax({  
      url: "/getJSONdata",
      type: "POST",
      data: {
        "removed": index
      },
      success: function(response) {
      }
    })

    element.parentElement.parentElement.children[0].classList.remove('isAvailable');
    element.parentElement.parentElement.children[1].classList.remove('isAvailable');
    element.parentElement.parentElement.children[0].classList.remove('inUse');
    element.parentElement.parentElement.children[1].classList.remove('inUse');

    element.parentElement.parentElement.children[0].innerHTML = "";
    element.parentElement.parentElement.children[1].innerHTML = 
    `<button type="button" onclick='event.stopPropagation(); isPC(this);'>Add</button>`;

    // element.parentElement.parentElement.children[0].classList.remove('isAvailable');
    // element.parentElement.parentElement.children[1].classList.remove('isAvailable');

  } else {
    // Adds computer
    enabledComputers.push(currentPC);

    element.parentElement.parentElement.children[0].classList.toggle('isAvailable');
    element.parentElement.parentElement.children[1].classList.toggle('isAvailable');

    element.parentElement.parentElement.children[0].innerHTML = 
    `<img src="../static/computer.png" alt="Computer" class="image">
    <div class="overlay">PC: ${currentPC}</div>`;

    element.parentElement.parentElement.children[1].innerHTML = 
    `<button type="button" onclick='event.stopPropagation(); isPC(this);'>Remove</button>
    <button type="button" onclick='event.stopPropagation(); showModal(this); inUse(this);'>Use PC</button>
    `;  

    console.log("Computers in system: " + enabledComputers);
    
    $.ajax({
      url: "/getJSONdata",
      type: "POST",
      data: {
        "PCs": currentPC
      },
      success: function(response) {
        console.log("successfuly sent list");
        console.log(enabledComputers);
      }
    })
  }
}