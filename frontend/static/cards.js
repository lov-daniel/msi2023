// Cards
function handleFlip(element) {
  element.children[0].classList.toggle('flipped');
  element.children[1].classList.toggle('flipped');

  return element;
}

function inUse(element) {
  element.classList.toggle('inUse');
}

function isPC(element) {
  console.log(element.parentElement.parentElement);
  element.parentElement.parentElement.children[0].classList.toggle('isPC');

}