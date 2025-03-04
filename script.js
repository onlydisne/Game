const character = document.getElementById("character"); // получаем элемент персонажа
const healthbar = document.querySelector(".healthbar"); // получаем элемент халтфбара
const background = document.querySelector(".background"); // получаем элемент фона

let isJumping = false; // данный флаг указывает, находится ли персонаж в прыжке
let health = 100; // начальное количество HP
let direction = "right"; // начальное направление персонажа
let backgroundPositionX = 0; // начальная позиция фона
const backgroundSpeed = 5; // скорость движения фона

// отслеживание нажатия определенных клавиш:
window.addEventListener("keydown", function(event) { 
    let currentPositionX = parseInt(window.getComputedStyle(character).right, 10); // получаем текущую позицию персонажа по X
    let currentPositionY = parseInt(window.getComputedStyle(character).bottom, 10); // получаем текущую позицию персонажа по Y

// если нажата клавиша влево:
    if(event.key === "ArrowLeft") {
        currentPositionX += 10; // двигаем персонажа влево
        backgroundPositionX += backgroundSpeed; // двигаем фон вправо
        if (direction !== "left") {
            character.style.transform = "scaleX(-1)"; // меняем направление персонажа (если он смотрел вправо)
            direction = "left"; // обновляем направление
        }
// если нажата клавиша вправо:
    } else if(event.key === "ArrowRight") {
        currentPositionX -= 10; // двигаем персонажа вправо
        backgroundPositionX -= 10; // двигаем фон влево
        if (direction !== "right") {
            character.style.transform = "scaleX(1)"; // меняем направление персонажа (если он смотрел влево)
            direction = "right"; // обновляем направление
        }
// если нажата клавиша вверх:
    } else if(event.key === "ArrowUp" && !isJumping) {
        isJumping = true; // устанавливаем флаг прыжка
        currentPositionY += 100; // двигаем персонажа вверх
        character.style.bottom = currentPositionY + "px"; // обновляем позицию персонажа

// через 150 мсек персонаж должен опуститься вниз:        
        setTimeout(function() {
            currentPositionY -= 100;
            character.style.bottom = currentPositionY + "px";

// через 150 мсек персонаж сможет прыгнуть снова:    
            setTimeout(function() {
                isJumping = false;
            }, 150);
        }, 150);
// если нажата клавиша пробел:
    } else if (event.key === " ") {
        health -= 10; // уменьшаем количество HP
        if (health < 0) health = 0; // если здоровье < 0, то оставляем 0
        document.querySelector(".healthbar").style.width = health + "%"; // обновляем ширину индикатора здоровья
    }
// если фон уходит слишком далеко влево, то сбрасываем его
    if (backgroundPositionX <= -1920) {
        backgroundPositionX = 0;
// если фон уходит слишком далеко вправо, то сбрасываем его
    else if (backgroundPositionX >= 1920) {
        backgroundPositionX = 0;
    }
    
    character.style.right = currentPositionX + "px"; // применяем новую позицию персонажа
    background.style.backgroundPosition = `${backgroundPositionX}px 0`; // обновляем позицию фона
});
