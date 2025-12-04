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

function goTown() {
  let changeBackground = document.body;
  monsterStats.style.display = "none";

  changeBackground.style.backgroundImage = `url(Images/image${(image = 3)}.png)`;
  update(locations[0]);
  beforeBattleMusic.pause();
  beforeBattleMusic.currentTime = 0;
  battleMusic.pause();
  battleMusic.currentTime = 0;
  marketSound.play();
  shopSound.play();
  button3.style.display = "block";
  button4.style.display = "block";
  saveGame();
}

button1.onclick = goTown;
button2.onclick = dontHelp;

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button4.innerText = location["button text"][3];
  button1.onclick = location["button function"][0];
  button2.onclick = location["button function"][1];
  button3.onclick = location["button function"][2];
  button4.onclick = location["button function"][3];
  text.innerHTML = location.text;
}

function goArmory() {
  let changeBackground = document.body;
  monsterStats.style.display = "none";

  changeBackground.style.backgroundImage = `url(Images/image${(image = 4)}.png)`;
  update(locations[1]);
  button2.addEventListener("mouseover", () => {
    if (image === 4) {
      text.innerText = "Increase hitpoints by 10 points.";
    }
  });
  button2.addEventListener("mouseout", () => {
    if (image === 4) {
      text.innerText = locations[1].text;
    }
  });
  if (currentWeapon < weapons.length - 1) {
    button1.innerText =
      "Buy " +
      weapons[currentWeapon + 1].name +
      ": " +
      weapons[currentWeapon + 1].value +
      "gold";
  } else {
    button1.innerText = "Nothing more to sell";
  }
  button3.style.display = "block";
  button4.style.display = "block";
  saveGame();
}

function goPotionShop() {
  let changeBackground = document.body;
  monsterStats.style.display = "none";
  changeBackground.style.backgroundImage = `url(Images/image${(image = 5)}.png)`;

  update(locations[2]);
  button3.style.display = "none";
  button4.style.display = "none";
}

function goHunt() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 6)}.png)`;

  update(locations[3]);
  marketSound.pause();
  marketSound.currentTime = 0;
  shopSound.pause();
  shopSound.currentTime = 0;
  battleMusic.pause();
  battleMusic.currentTime = 0;
  beforeBattleMusic.play();
  button3.style.display = "block";
  button4.style.display = "block";
}

function goRaid() {
  let changeBackground = document.body;
  changeBackground.style.backgroundImage = `url(Images/image${(image = 10)}.png)`;

  update(locations[4]);
  marketSound.pause();
  marketSound.currentTime = 0;
  shopSound.pause();
  shopSound.currentTime = 0;
  battleMusic.pause();
  battleMusic.currentTime = 0;
  beforeBattleMusic.play();
  button3.style.display = "block";
  button4.style.display = "none";
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    let newWeapon = weapons[currentWeapon + 1];
    if (gold >= newWeapon.value) {
      currentWeapon++;
      inventory.push(newWeapon.name);
      gold -= newWeapon.value;
      goldText.innerText = gold;
      text.innerText = "You just bought a " + newWeapon.name + ". ";
      text.innerText += " In your inventory you have a " + inventory;
    } else {
      text.innerText = "You don't have enough gold for that.";
    }
  }
  if (weapons[currentWeapon].name === "Sword of Heroes") {
    button1.innerText = "Nothing more to sell";
    text.innerText = "You already have the best weapon";
  } else {
    button1.innerText =
      "Buy " +
      weapons[currentWeapon + 1].name +
      ": " +
      weapons[currentWeapon + 1].value +
      "gold";
  }
  saveGame();
}

function sellWeapon() {
  if (inventory.length === 1) {
    if (inventory[0] === "Sword of Heroes") {
      text.innerText =
        "This looks like a really powerful sword, i should probably not sell it!";
    } else {
      text.innerText = "I probably should not sell my only weapon";
    }
    return;
  }

  let weaponName = inventory.shift();
  const weapon = weapons.find((w) => w.name === weaponName);
  gold += weapon.value / 2;
  goldText.innerText = gold;
  text.innerText =
    "You just sold one of your weapons to the shop keeper. You now have a " +
    inventory +
    " in your inventory.";
  saveGame();
}

function buyArmour() {
  if (gold >= 10) {
    health += 10;
    maxHealth += 10;
    gold -= 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    fullHealthText.innerText = maxHealth;
    text.innerText =
      "The shopkeeper takes your armour and works at it vigorously, after a while he hands it back to you, the armour looking brand new and a bit more sturdy.";
  } else {
    text.innerText = "You don't have enough gold for that.";
  }
  saveGame();
}

function buyPotion() {
  if (gold < 25) {
    text.innerText = "You dont have enough gold for that.";
    return;
  }

  currentPotion++;
  gold -= 25;
  goldText.innerText = gold;
  potionText.innerText = currentPotion;
  text.innerText =
    "The shop keeper smiles at you as she slides the potion that you just bought across the table. Your inventory now contains: " +
    inventory +
    " " +
    currentPotion +
    "x Healing potion";
  saveGame();
}
