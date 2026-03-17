let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Count
let player1 = 0;
let player2 = 0;

// Box event click

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    let element = checkElement(player1, player2);

    if (this.childNodes.length == 0) {
      let cloneElement = element.cloneNode(true);

      this.appendChild(cloneElement);

      // computar jogada

      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }

    //   check condition

      checkCondition()

    }
  });
}

function checkElement(player1, player2) {
  if (player1 == player2) {
    element = x;
  } else {
    element = o;
  }

  return element;
}

function checkCondition(){
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length && b3.childNodes.length){
      
      let b1Child = b1.childNodes[0].className;
      let b2Child = b2.childNodes[0].className;
      let b3Child = b3.childNodes[0].className;

      if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
        alert("Player 1 wins")

      }else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
        alert("Player 2 wins")
      }

    }

    if(b4.childNodes.length > 0 && b5.childNodes.length && b6.childNodes.length){
      
      let b4Child = b4.childNodes[0].className;
      let b5Child = b5.childNodes[0].className;
      let b6Child = b6.childNodes[0].className;

      if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
        alert("Player 1 wins")

      }else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
        alert("Player 2 wins")
      }

    }

    if(b7.childNodes.length > 0 && b8.childNodes.length && b9.childNodes.length){
      
      let b7Child = b7.childNodes[0].className;
      let b8Child = b8.childNodes[0].className;
      let b9Child = b9.childNodes[0].className;

      if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
        alert("Player 1 wins")

      }else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
        alert("Player 2 wins")
      }

    }

    // vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length && b7.childNodes.length){
      
      let b1Child = b1.childNodes[0].className;
      let b4Child = b4.childNodes[0].className;
      let b7Child = b7.childNodes[0].className;

      if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
        alert("Player 1 wins")

      }else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
        alert("Player 2 wins")
      }

    }

    if(b2.childNodes.length > 0 && b5.childNodes.length && b8.childNodes.length){
      
      let b2Child = b2.childNodes[0].className;
      let b5Child = b5.childNodes[0].className;
      let b8Child = b8.childNodes[0].className;

      if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
        alert("Player 1 wins")

      }else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
        alert("Player 2 wins")
      }

    }

    if(b3.childNodes.length > 0 && b6.childNodes.length && b9.childNodes.length){
      
      let b3Child = b3.childNodes[0].className;
      let b6Child = b6.childNodes[0].className;
      let b9Child = b9.childNodes[0].className;

      if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
        alert("Player 1 wins")

      }else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
        alert("Player 2 wins")
      }

    }

    // diagonal
    if(b1.childNodes.length > 0 && b4.childNodes.length && b7.childNodes.length){
      
      let b1Child = b1.childNodes[0].className;
      let b5Child = b5.childNodes[0].className;
      let b9Child = b9.childNodes[0].className;

      if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
        alert("Player 1 wins")

      }else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
        alert("Player 2 wins")
      }

    }

    if(b3.childNodes.length > 0 && b5.childNodes.length && b7.childNodes.length){
      
      let b3Child = b3.childNodes[0].className;
      let b5Child = b5.childNodes[0].className;
      let b7Child = b7.childNodes[0].className;

      if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
        alert("Player 1 wins")

      }else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
        alert("Player 2 wins")
      }

    }

    // Deu velha

    let counter = 0;

    for(i = 0; i < boxes.length; i++){
      if(boxes[i].childNodes[0] != undefined){
        counter++
      }
    }

    if(counter == 9){
      alert("deu velha")
    }
}