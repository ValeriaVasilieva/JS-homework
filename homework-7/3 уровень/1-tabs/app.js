"use strict";
const texts = {
  text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  text2:
    "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
  text3:
    "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.",
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
const collection = document.querySelectorAll(".nav-link");
const div = document.querySelector(".text");

for (let a of collection) {
  a.addEventListener("click", clickHandler);
}

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} e
 */
function clickHandler(e) {
  changeText(e.target);
  changeActiveClass(e.target);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event
 */
function changeActiveClass(a) {
  for (let a of collection) {
    a.classList.remove("active");
  }
  a.classList.add("active");
}

/**
 * Эта фукнция должна читать текст (например через textContent) из
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event
 */
function changeText(a) {
  switch (a.textContent) {
    case "Link 1":
      div.textContent = texts.text1;
      break;
    case "Link 2":
      div.textContent = texts.text2;
      break;
    case "Link 3":
      div.textContent = texts.text3;
      break;
  }
}
