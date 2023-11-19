// enabledComputers = [];
// Create tables
function originalTable(row, col) {
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
        card.id = '${String.fromCharCode(i+65)}${j+1}' 
        card.onclick = function(){handleFlip(this)};

        front.id = "front";
        front.className = "cardFront";
        front.innerText = `PC: ${String.fromCharCode(i+65)}${j+1}`;
        
        back.id = "back";
        back.className = "cardBack";
        back.innerHTML = 
        `
        <link rel="stylesheet" href="../static/styles.css">
        <div class="btn-group" style="width:100%">
          <button style="width:100%" id="pcbutton" onclick = 'event.stopPropagation(); isPC(this);'>Enable</button><br>
        </div>
        `
        td.append(card);
        card.append(front);
        card.append(back);
        // enabledComputers.push(card)
    }
  }
  body.appendChild(tbl);
}