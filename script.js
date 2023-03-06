window.onload = function () {
  const form = document.getElementById("myForm");
  const startBtn = document.getElementById("startBtn");
  const squares = document.querySelectorAll(".grid_child");
  let currentPlayer;

  // Player creation object
  const playerFactory = (name, side) => {
    return {
      name,
      side,
    };
  };

  // Rules to winning
  const gameOver = () => {};

  // Marks the game board
  const markSquare = (e) => {
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

    const element = document.getElementById("restart");
    const replayBtn = document.createElement("button");
    replayBtn.setAttribute("id", "restartBtn");
    replayBtn.innerHTML = "Restart";
    replayBtn.onclick = function () {
      form.reset();
      document.getElementById("text_display").innerHTML = "";
      squares.forEach((square) => {
        square.setAttribute("mark", "");
        square.innerHTML = "";
      });
      replayBtn.style.display = "none";
      startBtn.style.display = "block";
    };
    element.appendChild(replayBtn);
  };

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

    // eslint-disable-next-line prefer-const
    let player1 = playerFactory(formName1, formSide1);
    // eslint-disable-next-line prefer-const
    let player2 = playerFactory(formName2, formSide2);

    e.preventDefault();

    startBtn.style.display = "none";

    newGame(player1, player2);
  };
};
