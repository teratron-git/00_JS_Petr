let menuItem = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu"),
    title = document.getElementById("title"),
    column = document.querySelectorAll(".column"),
    adv = document.querySelector(".adv");

console.log(menuItem);
// menu.forEach(function(item, i){
//     item[1].textContent = "Второй пункт!!!";
// });

menuItem[1].textContent = "Второй пункт!!!";
menuItem[2].textContent = "Третий пункт!!!";

let li = document.createElement("li");
    li.classList.add("menu-item");
    li.innerHTML = "Пятый элемент";
    
menu.appendChild(li);

document.body.style.backgroundImage = "url(../img/apple_true.jpg)";
title.innerHTML = "Мы продаем только ПОДЛИННУЮ технику Apple";

console.log(column);
console.log(adv);
column[1].removeChild(adv);

let a = prompt("Как вы относитесь к технике Apple?","");
document.getElementById("prompt").innerHTML = a;