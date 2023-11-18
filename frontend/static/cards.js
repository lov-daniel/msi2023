// Cards
function handleFlip(element) {

  element.children[0].classList.toggle('flipped');
  element.children[1].classList.toggle('flipped');

  console.log(element);
  // console.log(element.children[0]);
  console.log("flip");
  return element;
}

// front.addEventListener('click', handleFlip)
// back.addEventListener('click', handleFlip)