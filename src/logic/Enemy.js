import Entity from "./Entity";

export default class Enemy extends Entity {
    faction = "NoFaction";
    location = "Unknown";
    isBoss = false;
    canDropItems = false;
    expGivenOnDefeat = 0;
};
