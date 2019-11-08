var hero = {
    name: "Xena", heroic: true, inventory: [], health: 10, weapon:
        { type: "sword", damage: 2 }
};

function rest(person) {
    if (person.health == 10) {
        alert("Already healthy");
        return person;
    }
    person.health = 10;
    return person;
}
function pickUpItem(person, weapon) {
    person.inventory.push(weapon);
}
function equipWeapon(person) {
    if (person.inventory.length > 0) {
        person.weapon = person.inventory[0];
    }
}

