// Cards
function handleFlip(element) {
  element.children[0].classList.toggle('flipped');
  element.children[1].classList.toggle('flipped');

  return element;
}
