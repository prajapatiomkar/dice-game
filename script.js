let count_dice_no_p1 = document.getElementById("count_dice_no_p1");
let count_dice_no_p2 = document.getElementById("count_dice_no_p2");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");
let dice_button = document.querySelector(".dice_button");
let c1 = 1;
let c2 = 1;

dice_button.addEventListener("click",()=>{
    gameLogic();
})

function gameLogic() {
    let no1 = randomNoProduce();
    let no2 = randomNoProduce();
    count_dice_no_p1.innerHTML = no1;
    count_dice_no_p2.innerHTML = no2;

    if (no1 == no2) {
        player1.textContent = "Draw"
        player2.textContent = "Draw"
    } else if (no1 > no2) {
        player1.textContent = "Winner"
        player2.textContent = "Loss"
        counter1.innerText = c1++;

    } else {
        player1.textContent = "Loss"
        player2.textContent = "Winner"
        counter2.innerText = c2++;
    }

    
    

}
function randomNoProduce() {
    return Math.round(Math.random() * 5 + 1);
}

