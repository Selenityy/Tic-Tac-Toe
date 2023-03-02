window.onload = function () {
  const form = document.getElementById("myForm");
  const startBtn = document.getElementById("startBtn");
  //   const gameBtn = document.querySelector("#startBtn");
  const btnText = startBtn.innerHTML;
  const squares = document.querySelectorAll(".grid_child");
//   const players = [];
  let currentPlayer;

  // Player creation object
  const playerFactory = (name, side) => {
    return {
      name,
      side,
    };
  };

  // Start button toggle function
  // eslint-disable-next-line no-unused-vars
  //   const toggle = () => {
  //     gameBtn.innerHTML = btnText === "Start" ? "Restart" : "Start";
  //   };

  // Rules to winning
  const gameOver = () => {};

  // Marks the game board
  const markSquare = (e) => {
    console.log(currentPlayer);
    console.log(currentPlayer.side);
    if (e.target.getAttribute("mark") === "") {
      e.target.setAttribute("mark", currentPlayer.side);
      e.target.innerHTML = currentPlayer.side;
    }
  };

  // Begins the listener event, displays whose turn it is, and resets the square attributes
  const newGame = (player1, player2) => {
    if (player1.side === "x") {
      currentPlayer = player1;
      document.getElementById("text_display").innerHTML =
        "It's" + " " + currentPlayer.name + "'s" + " " + "turn.";
    } else {
      currentPlayer = player2;
      document.getElementById("text_display").innerHTML =
        "It's" + " " + currentPlayer.name + "'s" + " " + "turn.";
    }

    squares.forEach((square) => {
      square.setAttribute("mark", "");
      square.addEventListener("click", markSquare);
    });

    // let element = document.getElementById("restart");
    // let replayBtn = document.createElement("button");
    // replayBtn.innerHTML = "Restart"
    // replayBtn.onclick = function() {

    // };
    // element.appendChild(replayBtn);
  };

  // Clicking restart button triggers the following:
  function reset() {
    form.reset();
    startBtn.innerHTML = btnText === "Restart" ? "Start" : "Restart";
    squares.innerHTML = "";
    squares.setAttribute("mark") === "";
  }

  // Clicking start button triggers the following:
  startBtn.onclick = function (e) {
    const formName1 = document.getElementById("playerName1").value;
    const formSide1 = document.querySelector(
      'input[name="sides"]:checked'
    ).value;
    const formName2 = document.getElementById("playerName2").value;
    const formSide2 = document.querySelector(
      'input[name="sides"]:not(:checked)'
    ).value;

    let player1 = playerFactory(formName1, formSide1);
    let player2 = playerFactory(formName2, formSide2);
    // player1.toString();
    // player2.toString();

    // players.push(player1);
    // players.push(player2);

    // toggle();

    e.preventDefault();

    newGame(player1, player2);
  };
};
