// Create tables
function tableCreate(row, col) {
  const body = document.body,
        tbl = document.createElement('table');
  tbl.style.width = '100px';
  tbl.style.border = '1px solid black';

  for (let i = 0; i < row; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < col; j++) {
      // if (i === 2 && j === 1) {
      //   break;
      // } else {
        const td = tr.insertCell();
        // td.appendChild(document.createTextNode(`Cell ${String.fromCharCode(i+65)}${j+1}`));
        var card = document.createElement("div");
        var front = document.createElement("div");
        var back = document.createElement("div");
        card.className = "card";
        card.onclick = function(){handleFlip(this)};

        front.id = "front";
        front.className = "cardFront";
        front.innerText = `PC: ${String.fromCharCode(i+65)}${j+1}`;
        // front.onclick = function(){handleFlip(this)};
        back.id = "back";
        back.className = "cardBack";
        back.innerHTML = `<button type="button" onclick='event.stopPropagation(); isPC(this);'>Click Me!</button>`
        // back.onclick = function(){handleFlip(this)};
  
        td.append(card);
        card.append(front);
        card.append(back);
        td.style.border = '1px solid black';
        // if (i === 1 && j === 1) {
        //   td.setAttribute('rowSpan', '2');
        // }
      // }
    }
  }
  body.appendChild(tbl);
}

