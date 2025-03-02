const character = document.getElementById("character");

// const getCharacterPosition = () => {
//     return parseInt(window.getComputedStyle(character).right, 10) 
// }
// округление значения до целого числа

// let currentPosition = getCharacterPosition();
// получение начальной позиции 

// console.log(currentPosition);
let isJumping = false;

window.addEventListener("keydown", function(event) { 
    // присвоение значений переменной
    let currentPositionX = parseInt(window.getComputedStyle(character).right, 10);
    let currentPositionY = parseInt(window.getComputedStyle(character).bottom, 10);

    if(event.key === "ArrowLeft") {
        currentPositionX += 10;
    } else if(event.key === "ArrowRight") {
        currentPositionX -= 10;
    } else if(event.key === "ArrowUp" && !isJumping) {
        isJumping = true;
        currentPositionY += 100;
        character.style.bottom = currentPositionY + "px";
        
        setTimeout(function() {
            currentPositionY -= 100;
            character.style.bottom = currentPositionY + "px";

            setTimeout(function() {
                isJumping = false;
            }, 150)
        }, 150)
    }

    character.style.right = currentPositionX + "px";
})


// // 1. Сделать отображение худа (ХП бар);
// // 2. По кнопке пробела отнимать ХП;
// // 3. Менять направление персонажа (Transform, translate).
// 4. Сделать зацикленный фон