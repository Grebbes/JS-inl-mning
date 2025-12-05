/**
 * lets the player fight the rabid beast
 * updates background and player ui
 * @function fightBeast
 * @returns {void}
 */
function fightBeast() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 7)}.png)`;
  fighting = 0;

  goFight();
  update(locations[5]);
  text.innerText = "You are fighting a Rabid beast";
}
/**
 * lets the player gith the orc raider
 * updates background and ui
 * @function fightRaider
 * @returns {void}
 */
function fightRaider() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 8)}.png)`;
  fighting = 1;

  goFight();
  update(locations[5]);
  text.innerText = "You are fighting a Orc Raider";
}
/**
 * lets the player fight the orc shaman
 * updates background and ui
 * @function fightShaman
 * @returns {void}
 */
function fightShaman() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 9)}.png)`;
  fighting = 2;

  goFight();
  update(locations[5]);
  text.innerText = "You are fighting a Orc Shaman";
}
/**
 * lets the player fight the orc  warlord
 * updates background and ui
 * @function fightWarlord
 * @returns {void}
 */
function fightWarlord() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 11)}.png)`;
  fighting = 3;

  goFight();
  update(locations[5]);
  text.innerText = "You are fighting the Orc Warlord";
}
/**
 * updates and shows the monsterstats dependent on who the players fights
 * stops and resets the market and shop sound
 * starts the battle music
 * @function goFight
 * @returns {void}
 */
function goFight() {
  monsterStats.style.display = "flex";
  monsterNameText.innerText = monsters[fighting].name;
  monsterHealth = monsters[fighting].health;
  monsterHealthText.innerText = monsterHealth;
  marketSound.pause();
  marketSound.currentTime = 0;
  shopSound.pause();
  shopSound.currentTime = 0;
  beforeBattleMusic.pause();
  beforeBattleMusic.currentTime = 0;
  battleMusic.play();
}

/**
 * lets the player attack and deal damage based on the power of the weapon he has
 * updates health of player if damage is taken. same for monster
 * calculates damage taken based on monsters level
 * plays takingDmg sound
 * checks if player dies or defeats the monster
 * @function attack
 * @returns {void}
 */
function attack() {
  text.innerText = " You attack with your " + weapons[currentWeapon].name + ".";
  const monsterDamage = getMonsterAttackValue(monsters[fighting].level);
  health -= monsterDamage 
  takingDmgSound.play();

  if (isMonsterHit()) {
    const damage = Math.ceil(Math.random() * weapons[currentWeapon].power);
    monsterHealth -= damage;
    monsterHealthText.innerText = monsterHealth;
    text.innerText +=
      " You deal " + damage + " damage to the " + monsters[fighting].name;
    text.innerHTML +=
      " <br> the " +
      monsters[fighting].name +
      " also deals " +
      monsterDamage +
      " damage to you!";
  } else {
    text.innerText =
      "The " + monsters[fighting].name + "move with such speed that you miss!";
    text.innerHTML +=
      "<br> but the " +
      monsters[fighting].name +
      " still deals " +
      monsterDamage +
      " damage to you.";
  }
  healthText.innerText = health;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 3) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  saveGame();
}

/**
 * lets the player click and dodge attack
 * updates text
 * @function dodge
 * @returns {void}
 */
function dodge() {
  text.innerText = "You dodge the attack.";
}

/**
 * lets the player drink a healing potion if he is bellow max health
 * potion heals a random number between 25-50
 * alse checks if current potion is equal or less than 0. if it is player can not drink a potion and updates text
 * if player is at maxhealth he cannot drink
 * plays drink sound
 * @function drinkPotion
 * @returns {void}
 */
function drinkPotion() {
  potion = 25;
  potionHealing = Math.ceil(Math.random() * potion + 25);
  if (currentPotion <= 0) {
    text.innerText =
      "You don't seem to have any healing potions on you. Maybe you should visit the potion shop in town to see what they have.";
  } else if (health === maxHealth) {
    text.innerText = "I dont need healing right now";
  } else if (health + potionHealing >= maxHealth) {
    drinkSound.play();
    health = maxHealth;
    currentPotion--;
    healthText.innerText = health;
    potionText.innerText = currentPotion;
    text.innerText =
      "you drink the potion that you bought from the old lady. suddenly you feel energized and that the wounds are healing.";
    text.innerHTML +=
      "<br> The potion restores " +
      potionHealing +
      " points of health. <br> You now have " +
      currentPotion +
      " Healing potions in your inventory.";
  } else {
    drinkSound.play();
    health += potionHealing;
    currentPotion--;
    healthText.innerText = health;
    potionText.innerText = currentPotion;
    text.innerText =
      "you drink the potion that you bought from the old lady. suddenly you feel energized and that the wounds are healing.";
    text.innerHTML +=
      "<br> The potion restores " +
      potionHealing +
      " points of health. <br> You now have " +
      currentPotion +
      " Healing potions in your inventory.";
  }
  saveGame();
}
/**
 * lets the player go back to town if he is close to dying
 * updates text
 * @function run 
 * @returns {void}
 */
function run() {
  goTown();
  monsterStats.style.display = "none";
  text.innerText =
    "You run away from the fight, barley escaping with your life.";
  saveGame();
}

/**
 * calculates the monsters hit rate and damage based on level and player xp.
 * @function getMonsterAttackValue
 * @param {number} level the level of the monster
 * @returns {number} the damage the monster deals
 */
function getMonsterAttackValue(level) {
  const hit = level * 3 - Math.round(Math.random() * xp);
  return hit > 0 ? hit : 0;
}
/**
 * calculates the players hit rate 
 * @function isMonsterHit
 * @returns {boolean} true or false
 */
function isMonsterHit() {
  return Math.random() > 0.3 || health < 20;
}
/**
 * tells the player that he dies
 * updates buttons and text
 * @function lose
 * @returns {void}
 */
function lose() {
  battleMusic.pause();
  battleMusic.currentTime = 0;
  dyingSound.play();
  update(locations[7]);
  button3.style.display = "none";
  button4.style.display = "none";
}
/**
 * tells the player that he defeats the monster
 * updates buttons and text
 * updates gold and xp 
 * @function defeatMonster
 * @returns {void}
 */
function defeatMonster() {
  update(locations[6]);
  button3.style.display = "none";
  button4.style.display = "none";
  gold += Math.ceil(Math.random() * monsters[fighting].level * 15);
  xp += monsters[fighting].level + 10;
  goldText.innerText = gold;
  xpText.innerText = xp;
}
/**
 * tells the player that he won the game
 * updates buttons and text
 * @function winGame
 * @returns {void}
 */
function winGame() {
  update(locations[8]);
  button3.style.display = "none";
  button4.style.display = "none";
}
