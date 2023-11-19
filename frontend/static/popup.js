// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var pc;

function showModal(element) {
    modal.style.display = "block";
    pc = element.parentElement;
  }

 function hideModal() {
    modal.style.display = "none";
    console.log("pc: " + pc);
    currentPC = pc.parentElement.parentElement.getAttribute("pc_id");
    console.log("cur pc:" + currentPC);
    // index = enabledComputers.indexOf(currentPC);
    // console.log("pc: " + pc.parentElement);

    pc.parentElement.children[1].innerHTML = 
    `<button type="button" onclick='event.stopPropagation(); isPC(this);'>Remove</button>
    <button type="button" onclick='event.stopPropagation(); inUse(this);'>Done!</button>
    <div>Used by: ${document.getElementById("fname").value}</div>
    `;  
    handleFlip(pc.parentElement);

    document.getElementById("fname").value = "";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    pc.parentElement.parentElement.children[0].classList.toggle('isAvailable');
    pc.parentElement.parentElement.children[1].classList.toggle('isAvailable');
  
    pc.parentElement.parentElement.children[0].classList.toggle('inUse');
    pc.parentElement.parentElement.children[1].classList.toggle('inUse');
  }
  if (event.target == span) {
    modal.style.display = "none";
  }
}