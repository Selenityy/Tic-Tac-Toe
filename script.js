// Start button toggle function
// eslint-disable-next-line no-unused-vars
const toggle = () => {
    const gameBtn = document.querySelector("#start_btn");
    const btnText = gameBtn.innerHTML;
    if(btnText === "Start") {
        console.log("start"); // later make this start the game
    } else {
        console.log("restart"); // later make this wipe everything
    };
    gameBtn.innerHTML = btnText === "Start" ? "Restart" : "Start";
};

// add when the start button is clicked, these are grabbed from the form
const formName = document.getElementById("playerName1").value;
const formSide = document.querySelector('input[name="sides"]:checked').value;
const formNameTwo = document.getElementById("playerName2").value;
const formSideTwo = document.querySelector('input[name="sides"]:not(:checked)').value;

const playerFactory = (name, side) => {
    const sayName = () => console.log(name); // later have this update the player text sentence
    return {
        name,
        side,
        sayName,
    };
};

const player1 = playerFactory(formName, formSide);
const player2 = playerFactory(formNameTwo, formSideTwo);

// let winningPlayer = add who wins here

// eslint-disable-next-line no-unused-vars
// const sayWinner = (winningPlayer) => {
//     console.log("Congratulations" + winningPlayer + "!");
// };

// //add the rules to a game ending here
// const gameOver = () => {

// };


const playerSide = player1.side // or player2.side?
const mark = (e) => {
    e.target.innerHTML = playerSide
};

const squares = document.querySelectorAll(".grid_child");
squares.forEach(square => square.addEventListener("click", mark));