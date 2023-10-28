import Entity from "./Entity.js";

export default class Npc extends Entity {
    faction = "NoFaction";
    location = "Unknown";
    isVendor = false;
    constructor(id, name, health, defense, strenght, race, level, faction, location, isVendor) {
        super(id, name, health, defense, strenght, race, level);
        this.faction = faction;
        this.location = location;
        this.isVendor = isVendor;
    }
};
