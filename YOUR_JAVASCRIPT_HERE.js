let hero = {
    name: "Xena Warrior Princess", heroic: true, inventory: [], health: 10, weapon:
        { type: "Sword", damage: 2 }
};

let enemies = [
    {
        name: "Gorgona",
        health: 10,
        damage: 2,
        imgsrc: "images/gorgona.png"
    },
    {
        name: "Minotavr",
        health: 10,
        damage: 3,
        imgsrc: "images/minotavr.png"
    },
    {
        name: "Chimera",
        health: 15,
        damage: 4,
        imgsrc: "images/chimera.png"
    }
]

displayStats();

// display random enemy - todo later
// const rand = Math.floor(Math.random() * (enemies.length));
// const randomEnemy = enemies[rand];
// displayEnemy(randomEnemy);

let currentLevel = 0;
let currentEnemy = enemies[currentLevel];
displayEnemy(currentEnemy);

function rest(person) {
    if (person.health == 10) {
        alert("Already healthy");
        return person;
    }
    person.health = 10;
    displayStats();
    return person;
}
function pickUpItem(person, weapon) {
    person.inventory.push(weapon);
    displayStats();
    //Sorry, cannot remove the dagger from page when it picked up, otherwise will not pass the tests #14 and #15
    // document.getElementById("dagger").remove();

}
function equipWeapon(person) {
    if (person.inventory.length > 0) {
        person.weapon = person.inventory[0];
        displayStats();
    }
}
//function that writes your hero's name, health, weapontype, weapon damage to the page
function displayStats() {
    const heroInfo = document.getElementById("hero-info");

    if (!document.getElementById("hero-name")) {
        const name = document.createElement('p');
        name.id = "hero-name";
        heroInfo.appendChild(name);
    }
    const name = document.getElementById("hero-name");
    name.innerHTML = `Hero: ${hero.name}`;

    if (!document.getElementById("health")) {
        const health = document.createElement('p');
        health.id = "health";
        heroInfo.appendChild(health);
    }
    const health = document.getElementById("health");
    health.innerHTML = `Health: ${hero.health}`;

    if (!document.getElementById("weapon-type")) {
        const weaponType = document.createElement('p');
        weaponType.id = "weapon-type";
        heroInfo.appendChild(weaponType);
    }
    const weaponType = document.getElementById("weapon-type");
    weaponType.innerHTML = `Weapon Type: ${hero.weapon.type}`;

    if (!document.getElementById("damage")) {
        const damage = document.createElement('p');
        damage.id = "damage";
        heroInfo.appendChild(damage);
    }
    const damage = document.getElementById("damage");
    damage.innerHTML = `Damage: ${hero.weapon.damage}`;
}

function displayEnemy(enemy) {
    // create div for enemy
    const enemyInfo = document.createElement("div");
    enemyInfo.classList.add("enemy-info");
    enemyInfo.id = `${enemy.name}-info`;
    // create enemy image
    const enemyImage = document.createElement('img');
    enemyImage.src = enemy.imgsrc;
    enemyImage.id = enemy.name;
    enemyImage.classList.add("enemy"); // todo in css: implement change of cursor when on the enemy image
    enemyImage.addEventListener("click", fight);
    // create enemy name
    const enemyName = document.createElement('p');
    // create enemy health
    const enemyHealth = document.createElement('p');
    // create enemy damage
    const enemyDamage = document.createElement('p');
    // add all element to enemy div
    enemyInfo.appendChild(enemyImage);
    enemyInfo.appendChild(enemyName);
    enemyInfo.appendChild(enemyHealth);
    enemyInfo.appendChild(enemyDamage);
    // update info inside elements
    enemyName.innerHTML = `Name: ${enemy.name}`;
    enemyHealth.innerHTML = `Health: ${enemy.health}`;
    enemyDamage.innerHTML = `Damage: ${enemy.damage}`;
    //put enemy on the page
    document.getElementById("enemy-area").appendChild(enemyInfo);
}

function fight(event) {
    // const enemyName = event.target.id;
    // getting the enemy info from current enemy (todo: remake later)
    currentEnemy.health -= hero.weapon.damage;
    event.target.nextSibling.nextSibling.innerHTML = `Health: ${currentEnemy.health}`;
    const enemyDamage = currentEnemy.damage;
    hero.health -= enemyDamage;
    console.log(hero.health);
    displayStats();
    // todo: i don't understand, why hero health does not show zero BEFORE alert
    if (currentEnemy.health <= 0) {
        alert(`You killed ${currentEnemy.name}`);
        event.target.parentNode.classList.add("killed");
        currentLevel += 1;
        if (currentLevel >= 3) {
            let al = alert("You won!");
            location.reload();
            console.log(al.querySelector('button'))
            return
        }
        currentEnemy = enemies[currentLevel];
        displayEnemy(currentEnemy);
    }
    if (hero.health <= 0) {
        alert("Game over!");
        location.reload();
        return
    }
}

function changeName() {
    // gather data
    const inputFieldName = document.getElementById('new-name');
    const newName = inputFieldName.value;
    //validation
    if (doesNotPassAllValidations(newName)) {
        return null
    }
    //change first letter of the name to upper case
    const newNewName = newName[0].toUpperCase() + newName.slice(1);
    hero.name = newNewName;
    inputFieldName.value = null;
    displayStats();
}
function doesNotPassAllValidations(name) {
    if (!name) {
        alert('You forgot to fill the name!');
        return true;
    }
    if (name.length > 20) {
        alert(`Your name must not exceed 20 symbols. Now it is ${name.length} symbols`);
        return true;
    }
    return false;
}