/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generatorExcuse();
  });
};

let generatorExcuse = () => {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const getRandomElement = array =>
    array[Math.floor(Math.random() * array.length)];

  const whoResult = getRandomElement(who);
  const actionResult = getRandomElement(action);
  const whatResult = getRandomElement(what);
  const whenResult = getRandomElement(when);

  return `${whoResult} ${actionResult} ${whatResult} ${whenResult}`;
};
