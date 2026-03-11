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

for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function() {

        let element;

        if(player1 == player2){
            element = x;
        }else{
            element = o;
        }

        let cloneElement = element.cloneNode(true);

        this.appendChild(cloneElement);

        // computar jogada

        if(player1 == player2){
            player1++
        }else{
            player2++
        }
    })
}
