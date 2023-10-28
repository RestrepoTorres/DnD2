import Character from "./Character.js";
import Npc from "./Npc.js";
import Enemy from "./Enemy.js";

const vi = new Character("char1", "Victor", 125, 20, 25, "Human", 1, "Wizard", 15, 50, true);
const en1 = new Enemy("ene1", "Spider", 15, 10, 11, "Insectoid", 5);
console.log(vi.health)
const pruebaBool = fight(vi, en1);
console.log(pruebaBool)

function fight(character1, enemy1) {
    let player1 = character1;
    let enemigo1 = enemy1;
    player1.health = player1.health - 1;
    return enemigo1.health > player1.health;
}

function story(situationId, ) {
    
}

