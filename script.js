window.onload = function () {
  const form = document.getElementById("myForm");
  const startBtn = document.getElementById("startBtn");
  const gameBtn = document.querySelector("#start_btn");
  const btnText = gameBtn.innerHTML;
  const squares = document.querySelectorAll(".grid_child");
  const players = [];

  // Player creation object
  const playerFactory = (name, side) => {
    const sayTurn = () => {
      document.getElementById("text_display").innerHTML =
        name + "'s" + " " + "turn.";
    };
    return {
      name,
      side,
      sayTurn,
    };
  };

  // Start button toggle function
  // eslint-disable-next-line no-unused-vars
  const toggle = () => {
    gameBtn.innerHTML = btnText === "Start" ? "Restart" : "Start";
  };

  const sayWinner = (winningPlayer) => {
    let winningPlayer = // add who wins here
      console.log("Congratulations" + winningPlayer + "!");
  };

  // Rules to winning
  const gameOver = () => {};

  // How the game runs
  const game = () => {
    const playerSide = player1.side;
    const mark = (e) => {
      e.target.innerHTML = playerSide;
    };
    squares.forEach((square) => square.addEventListener("click", mark));
  };

  // Clicking restart button triggers the following:
  function reset() {
    form.reset();
    gameBtn.innerHTML = btnText === "Restart" ? "Start" : "Restart";
    squares.innerHTML = "";
  }

  // Clicking start button triggers the following:
  startBtn.onclick = function (event) {
    const formName1 = document.getElementById("playerName1").value;
    const formSide1 = document.querySelector(
      'input[name="sides"]:checked'
    ).value;
    const formName2 = document.getElementById("playerName2").value;
    const formSide2 = document.querySelector(
      'input[name="sides"]:not(:checked)'
    ).value;

    const player1 = playerFactory(formName1, formSide1);
    const player2 = playerFactory(formName2, formSide2);

    players.push(player1);
    players.push(player2);

    toggle();

    game();

    event.preventDefault();
  };
};
