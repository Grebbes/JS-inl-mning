function fightBeast() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 7)}.png)`;
  fighting = 0;

  goFight();
  update(locations[5]);
  text.innerText = "You are fighting a Rabid beast";
}

function fightRaider() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 8)}.png)`;
  fighting = 1;

  goFight();
  update(locations[5]);
  text.innerText = "You are fighting a Orc Raider";
}

function fightShaman() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 9)}.png)`;
  fighting = 2;

  goFight();
  update(locations[5]);
  text.innerText = "You are fighting a Orc Shaman";
}

function fightWarlord() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 11)}.png)`;
  fighting = 3;

  goFight();
  update(locations[5]);
  text.innerText = "You are fighting the Orc Warlord";
}

function goFight() {
  monsterStats.style.display = "flex";
  monsterNameText.innerText = monsters[fighting].name;
  monsterHealth = monsters[fighting].health;
  monsterHealthText.innerText = monsterHealth;
  console.log("fighting");
}

function attack() {
  text.innerText = " You attack with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    const damage = Math.ceil(Math.random() * weapons[currentWeapon].power);
    monsterHealth -= damage;
    monsterHealthText.innerText = monsterHealth;
    text.innerText +=
      " You deal " + damage + " damage to the " + monsters[fighting].name;
    text.innerHTML +=
      " <br> the " +
      monsters[fighting].name +
      " alsoe deals " +
      getMonsterAttackValue(monsters[fighting].level) +
      " damage to you!";
  } else {
    text.innerText =
      "The " + monsters[fighting].name + "move with such speed that you miss!";
    text.innerHTML =
      "<br> but the " +
      monsters[fighting].name +
      " still deals" +
      getMonsterAttackValue(monsters[fighting].level) +
      " damage to you.";
  }
  healthText.innerText = health;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    defeatMonster();
  }
}

function dodge() {
  console.log("dodge");
}

function drinkPotion() {
  console.log("drinking potion");
}

function run() {
  goTown();
  monsterStats.style.display = "none";
  text.innerText =
    "You run away from the fight, barley escaping with your life.";
}

function getMonsterAttackValue(level) {
  const hit = level * 3 - Math.ceil(Math.random() * xp);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > 0.3 || health < 20;
}

function lose() {
  update(locations[7]);
  button3.style.display = "none";
  button4.style.display = "none";
}

function defeatMonster() {
  update(locations[6]);
  button3.style.display = "none";
  button4.style.display = "none";
  gold += Math.ceil(Math.random(monsters[fighting].level) * 7.5) + 10;
  xp += Math.ceil(Math.random(monsters[fighting].level) * 10) + 5;
  goldText.innerText = gold;
  xpText.innerText = xp;
}
