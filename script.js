const character = document.getElementById("character");
const healthbar = document.querySelector(".healthbar");
const background = document.querySelector(".background");

// const getCharacterPosition = () => {
//     return parseInt(window.getComputedStyle(character).right, 10) 
// }
// округление значения до целого числа

// let currentPosition = getCharacterPosition();
// получение начальной позиции 

// console.log(currentPosition);
let isJumping = false;
let health = 100;
// начальный уровень HP
let direction = "right";
// начальное направление персонажа
let backgroundPositionX = 0;
// смещение основного фона

window.addEventListener("keydown", function(event) { 
    // присвоение значений переменной
    let currentPositionX = parseInt(window.getComputedStyle(character).right, 10);
    let currentPositionY = parseInt(window.getComputedStyle(character).bottom, 10);

    if(event.key === "ArrowLeft") {
        currentPositionX += 10;
        backgroundPositionX += 10;
        if (direction !== "left") {
            character.style.transform = "scaleX(-1)";
            direction = "left";
        }
    } else if(event.key === "ArrowRight") {
        currentPositionX -= 10;
        backgroundPositionX -= 10;
        if (direction !== "right") {
            character.style.transform = "scaleX(1)";
            direction = "right";
        }
    } else if(event.key === "ArrowUp" && !isJumping) {
        isJumping = true;
        currentPositionY += 100;
        character.style.bottom = currentPositionY + "px";
        
        setTimeout(function() {
            currentPositionY -= 100;
            character.style.bottom = currentPositionY + "px";

            setTimeout(function() {
                isJumping = false;
            }, 150);
        }, 150);
    } else if (event.key === " ") {
        health -= 10;
        if (health < 0) health = 0;
        healthbar.style.width = health + "%";
    }

    character.style.right = currentPositionX + "px";
    background.style.backgroundPosition = `${backgroundPositionX}px 0`;
});


// // 1. Сделать отображение худа (ХП бар);
// // 2. По кнопке пробела отнимать ХП;
// // 3. Менять направление персонажа (Transform, translate).
// 4. Сделать зацикленный фон