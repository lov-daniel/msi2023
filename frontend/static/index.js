// Create tables
var cardArray = [];
var cardIDArray = [];
function tableCreate(row, col, enabledCards=0) {
  const body = document.body,
        tbl = document.createElement('table');

        console.log(enabledCards)
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
        back.innerHTML = `<button type="button" onclick='event.stopPropagation(); isPC(this);'>Add</button>`
  
        
        td.append(card);
        card.append(front);
        card.append(back);

        if (enabledCards) {
          if (enabledCards[0].includes(card.getAttribute("pc_id")) === true) {
            console.log("pc found!");
            handleFlip(card);
        }

        // $.ajax({
        //   type: "POST",
        //   url: "/sendJSONdataDuration"
        //   data: {
        //     "duration": getDuration(this);
        //   },
        //   success: function(response) {
        //     console.log("successfuly sent list");
        //     console.log(getDuration(this);
        //   }
        // })

        // if (i === 1 && j === 1) {
        //   td.setAttribute('rowSpan', '2');
        // }
      // }
    }
  }
  body.appendChild(tbl);
}
}