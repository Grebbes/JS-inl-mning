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
const locations = [
  {
    name: "Town Square",
    "button text": [
      "Enter the armory",
      "Enter the potion shop",
      "Hunt for orcs",
      "Raid the orc encampment",
    ],
    //  "button function": [goArmory, goPotionShop, goHunt, goRaid],
    text: "You step into the town square. The usual bustle is muted, villagers move about with hurried steps and worried eyes, whispering among themselves. Nearby, two shops stand out, both look like they might prove useful in gathering some supplies and armour.",
  },
  {
    name: "Armory",
    "button text": [
      "Buy weapon(30gold)",
      "Buy armour(10gold)",
      "Go back to town square",
    ],
    // "button function": [buyWeapon, buyArmour, goTown],
    text: "You step into the armory, and immediately a sharp, assessing gaze cuts through the dim light. An old man stands behind the counter—scarred, weathered, and clearly no stranger to battle. His eyes narrow slightly as he studies you.Well then,’ he rasps, ‘you here to buy some armor, or are you just taking in the scenery?",
  },
  {
    name: "Potion Shop",
    "button text": ["Buy health potion", "Go back to town square"],
    // "button function": [buyPotion, goTown],
    text: "You step into the potion shop, greeted by swirling scents of herbs and faintly glowing vials. A soft, knowing gaze meets yours, an older woman stands behind the counter. There is something otherworldly about her, as if she sees more then she lets on.‘Welcome, dear one,’ she murmurs, her voice warm and strangely enchanting. ‘Seeking a potion… or simply wandering where curiosity leads you?’",
  },
  {
    name: "Hunting",
    "button text": [
      "Fight rabid beast",
      "Fight Orc raider",
      "Fight Orc shaman",
      "Go back to town",
    ],
    // "button function": [fightBeast, fightRaider, fightShaman, goTown],
    text: "Through the twisted trees, you catch sight of an orc encampment. Flames leap from crude fires, casting shadows that twitch like living things. Inside the camp you spot a rabid beast snarlig at the edge, fast but weak, and orc raider sharpening his axe, dangerous but beatable, and a dark orc shaman chanting by a smoky brazier, powerful and deadly... what do you do?",
  },
  {
    name: "Raid",
    "button text": ["Fight the Orc warlord", "Go back to town"],
    // "button function": [fightWarlord, goTown],
    text: "The chamber opens before you, dark and cavernous, torches sputtering along stone walls, the air heavy with the scent of battle and steel. At the center stands the orc warlord, fierce, battle, hardened, and radiating deadly strength. Every muscle tensed, every scar a story of conquest, he glares at you. This is the greatest challenge yet. Will you face him?",
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Drink potion", "Run"],
    // "button function": [attack, dodge, drinkPotion, run],
    text: "You are fighting the orcs.",
  },
  {
    name: "Kill monster",
    "button text": ["Go to town square", "Go to town square"],
    // "button function": [goTown, goTown],
    text: "With a final strike, the enemy falls. Silence fills the clearing, your victory is clear but the fight is far from over.",
  },
  {
    name: "lose",
    "button text": ["Replay", "Replay"],
    "button function": [restartGame, restartGame],
    text: "Darkness rushes in as your strength fades. The world blurs, and the last thing you feel is the weight of your defeat. The battle is over... and you have fallen.",
  },
  {
    name: "win",
    "button text": ["Replay", "Replay"],
    "button function": [restartGame, restartGame],
    text: "With a final, resounding strike, the orc warlord collapses, his fierce glare fading at last. Silence descends over the stronghold, broken only by the echo of your victory. You have faced the greatest threat and emerged triumphant, the battle is won, and the village and realm is safe... for now.",
  },
];

function restartGame() {
  location.reload();
}

function dontHelp() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 2)}.png)`;

  if (image === 2) {
    text.innerText =
      "You turn away, leaving the town to its fate. Fire consume the streets, smoke curling into the sky, and the villagers are left to face ruin without a home. The cries of the desperate fade behind you as you walk away.";
    button1.innerText = "Restart";
    button2.innerText = "Restart";
    button2.onclick = restartGame;
    button1.onclick = restartGame;
  }
}

button2.onclick = dontHelp;
