window.onload = function () {
  const form = document.getElementById("myForm");
  const startBtn = document.getElementById("startBtn");
  const squares = document.querySelectorAll(".grid_child");
  let currentPlayer;
  let players = [];

  // Player creation object
  const playerFactory = (name, side) => {
    return {
      name,
      side,
    };
  };

  // Rules to winning
  const gameOver = () => {
    const g1 = document.getElementById("grid_1").getAttribute("mark");
    const g2 = document.getElementById("grid_2").getAttribute("mark");
    const g3 = document.getElementById("grid_3").getAttribute("mark");
    const g4 = document.getElementById("grid_4").getAttribute("mark");
    const g5 = document.getElementById("grid_5").getAttribute("mark");
    const g6 = document.getElementById("grid_6").getAttribute("mark");
    const g7 = document.getElementById("grid_7").getAttribute("mark");
    const g8 = document.getElementById("grid_8").getAttribute("mark");
    const g9 = document.getElementById("grid_9").getAttribute("mark");
    let allSquaresFilled = true;

    squares.forEach((square) => {
      if (square.getAttribute("mark") === "") {
        allSquaresFilled = false;
      }
    });

    if (
      (g1 === "x" && g4 === "x" && g7 === "x") ||
      (g2 === "x" && g5 === "x" && g8 === "x") ||
      (g3 === "x" && g6 === "x" && g9 === "x") ||
      (g1 === "x" && g2 === "x" && g3 === "x") ||
      (g4 === "x" && g5 === "x" && g6 === "x") ||
      (g7 === "x" && g8 === "x" && g9 === "x") ||
      (g1 === "x" && g5 === "x" && g9 === "x") ||
      (g3 === "x" && g5 === "x" && g7 === "x")
    ) {
      document.getElementById("text_display").innerHTML =
        currentPlayer.name + " " + "wins!";
      squares.forEach((square) => {
        square.removeEventListener("click", markSquare);
      });
    } else if (
      (g1 === "o" && g4 === "o" && g7 === "o") ||
      (g2 === "o" && g5 === "o" && g8 === "o") ||
      (g3 === "o" && g6 === "o" && g9 === "o") ||
      (g1 === "o" && g2 === "o" && g3 === "o") ||
      (g4 === "o" && g5 === "o" && g6 === "o") ||
      (g7 === "o" && g8 === "o" && g9 === "o") ||
      (g1 === "o" && g5 === "o" && g9 === "o") ||
      (g3 === "o" && g5 === "o" && g7 === "o")
    ) {
      document.getElementById("text_display").innerHTML =
        currentPlayer.name + " " + "wins!";
      squares.forEach((square) => {
        square.removeEventListener("click", markSquare);
      });
    } else if (allSquaresFilled) {
      document.getElementById("text_display").innerHTML = "Tie" + "match.";
      squares.forEach((square) => {
        square.removeEventListener("click", markSquare);
      });
    } else {
      currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
      document.getElementById("text_display").innerHTML =
        "It's" + " " + currentPlayer.name + "'s" + " " + "turn.";
    }
  };

  // Marks the game board
  const markSquare = (e) => {
    if (e.target.getAttribute("mark") === "") {
      e.target.setAttribute("mark", currentPlayer.side);
      e.target.innerHTML = currentPlayer.side;
    }

    gameOver();
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
      players = [];
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
    players.push(player1, player2);

    e.preventDefault();

    startBtn.style.display = "none";

    newGame(player1, player2);
  };
};
