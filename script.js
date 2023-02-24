// eslint-disable-next-line no-unused-vars
const toggle = () => {
    const gameBtn = document.querySelector("#start_btn");
    const btnText = gameBtn.innerHTML;
    if(btnText === "Start") {
        console.log("start");
    } else {
        console.log("restart");
    };
    gameBtn.innerHTML = btnText === "Start" ? "Restart" : "Start";
};