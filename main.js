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
let image = 0;

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
const weapons = [
  { name: "Stick", power: 10 },
  { name: "Rusty sword", power: 15 },
  { name: "Claymore", power: 30 },
  { name: "Sword of Heroes", power: 50 },
];
const monsters = [
  { name: "Rabid beast", level: 3, health: 25 },
  { name: "Orc raider", level: 7, health: 50 },
  { name: "Orc shaman", level: 12, health: 70 },
  { name: "Orc warlord", level: 20, health: 200 },
];

button2.addEventListener("click", () => {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${image = 2}.png)`;
  
function restartGame() {
  location.reload();
}

  if (image = 2) {
    text.innerText =
      "You turn around and leave the Town to it's fate, letting it burn to the ground and leaving the villagers without a home.";
    button1.innerText = "Restart";
    button2.innerText = "Restart";
    button2.addEventListener("click", () => {
      restartGame();
    });
    button1.addEventListener("click", () => {
      restartGame();
    });
  } 
});

