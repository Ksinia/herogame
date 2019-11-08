var hero = {
    name: "Xena", heroic: true, inventory: [], health: 10, weapon:
        { type: "Sword", damage: 2 }
};
displayStas();
console.log(hero.inventory);

function rest(person) {
    if (person.health == 10) {
        alert("Already healthy");
        return person;
    }
    person.health = 10;
    displayStas();
    return person;
}
function pickUpItem(person, weapon) {
    person.inventory.push(weapon);
    displayStas();
    console.log(hero.inventory);
}
function equipWeapon(person) {
    if (person.inventory.length > 0) {
        person.weapon = person.inventory[0];
        displayStas();
    }
}
//function that writes your hero's name, health, weapontype, weapon damage to the page
function displayStas() {
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


