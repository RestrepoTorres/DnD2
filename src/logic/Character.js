import Entity from "./Entity.js";

export default class Character extends Entity {
    characterClass = "NoClass";
    gold = 0;
    karma = 50;
    isAlive = true;
    constructor(id, name, health, defense, strenght, race, level, characterClass, gold, karma, isAlive) {
        super(id, name, health, defense, strenght, race, level);
        this.characterClass = characterClass;
        this.gold = gold;
        this.karma = karma;
        this.isAlive = isAlive;
    }
    
};
