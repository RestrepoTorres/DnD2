export default class Entity {
    id;
    name = "Stranger";
    health = 25;
    defense = 10;
    strenght = 15;
    race = "Unknown"
    level = 0

    constructor(id, name, health, defense, strenght, race, level){
        this.id = id;
        this.name = name;
        this.health = health;
        this.defense = defense;
        this.strenght = strenght;
        this.race = race;
        this.level = level;
    }
    
}