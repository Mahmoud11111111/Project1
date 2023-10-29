const game = document.querySelector(".game-container")
const char = document.querySelector(".character")
let interval;
let keyDown = false;


const moveLeft = () => {
    let leftPos = parseInt(window.getComputedStyle(char).getPropertyValue("left"));
    if (leftPos > 0)
        char.style.left = leftPos - 2 + "px";
}
const moveRight = () => {
    let leftPos = parseInt(window.getComputedStyle(char).getPropertyValue("left"));
    if (leftPos < 370)
        char.style.left = leftPos + 2 + "px";
}

document.addEventListener("keydown", (event) => {
    if (!keyDown) {
        if (event.key == "ArrowLeft") {
            interval = setInterval(moveLeft, 1)
        }
        else if (event.key == "ArrowRight") {
            interval = setInterval(moveRight, 1)
        }
    }

    keyDown = true;
})

document.addEventListener("keyup", () => {
    clearInterval(interval);
    keyDown = false;
})