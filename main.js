/* window.addEventListener("DOMContentLoaded", main);

function main() {} */

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventry = ["stick"];
let healthPotion = 10;

let background = document.querySelector(".fullscreen");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xp-Text");
const healthText = document.querySelector("#health-Text");
const goldText = document.querySelector("#gold-Text");
const monsterStats = document.querySelector("#monsterstats");
const monsterHealthText = document.querySelector("#monster-Health");
const monsterNameText = document.querySelector("#monster-Name");

button2.addEventListener("click", () => {
  let changeBackground = document.body;
  changeBackground.classList.toggle("fullscreen2");

  if (changeBackground.classList.contains("fullscreen2")) {
    text.innerText =
      "You turn around and leave the Town to it's fate, letting it burn to the ground and leaving the villagers without a home";
    button1.innerText = "Restart";
    button2.innerText = "Restart";
  } else {
    text.innerText =
      "Greeting traveler, our town is in dire need of help! would you help us please?";
    button1.innerText = "Help the town";
    button2.innerText = "Turn around and leave them";
  }
});

button1.addEventListener("click", () => {
  let changeBackground = document.body;
  if (changeBackground.classList.contains("fullscreen2")) {
    changeBackground.classList.toggle("fullscreen2");
    text.innerText =
      "Greeting traveler, our town is in dire need of help! would you help us please?";
    button1.innerText = "Help the town";
    button2.innerText = "Turn around and leave them";
  }
});
