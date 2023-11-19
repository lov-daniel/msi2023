// Create tables
function tableCreate(row, col) {
  const body = document.body,
        tbl = document.createElement('table');

  tbl.style.width = '100px';
  tbl.style.margin = "auto";


  for (let i = 0; i < row; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < col; j++) {
        const td = tr.insertCell();
        var card = document.createElement("div");
        var front = document.createElement("div");
        var back = document.createElement("div");
        card.className = "card";
        card.setAttribute("pc_id", `${String.fromCharCode(i+65)}${j+1}`);
        card.onclick = function(){handleFlip(this)};

        front.id = "front";
        front.className = "cardFront";
        // front.innerText = `PC: ${String.fromCharCode(i+65)}${j+1}`;
        // front.innerHTML = 
        // `  
        // <img src="static/logo.png" alt="Computer" class="image">
        // <div class="overlay">PC</div>
        // `
        back.id = "back";
        back.className = "cardBack";
        back.innerHTML = `<button type="button" onclick='event.stopPropagation(); isPC(this);'>Toggle</button>`
  
        td.append(card);
        card.append(front);
        card.append(back);
        // if (i === 1 && j === 1) {
        //   td.setAttribute('rowSpan', '2');
        // }
      // }
    }
  }
  body.appendChild(tbl);
}

