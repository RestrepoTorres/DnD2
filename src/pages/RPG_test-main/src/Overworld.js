class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop() {
        const step = () => {
            // Clean the canvas before re-drawing
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            // Select who the camera will follow
            const cameraPerson = this.map.gameObjects.player_character;
            // Update all objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    map: this.map,
                })
            })
            // Draw the map
            this.map.drawMap(this.ctx, cameraPerson);
            // Draw the objects contained in the map
            Object.values(this.map.gameObjects).sort((a,b) => {
                return a.y - b.y;
            }).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson);
            })
            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    bindActionInput() {
        new KeyPressListener("Enter", () => {
            this.map.checkForActionCutscene()
        })
    }

    bindPlayerPositionCheck() {
        document.addEventListener("CharacterWalkingComplete", e => {
            if (e.detail.whoId === "player_character") {
                this.map.checkForFootstepCutscene()
            }
        })
    }

    startMap(mapConfig) {
        this.map = new OverworldMap(mapConfig);
        this.map.overworld = this;
        this.map.mountObjects();
    }

    init() {

        this.startMap(window.OverworldMaps.GameStart);

        this.bindActionInput();
        this.bindPlayerPositionCheck();

        this.directionInput = new DirectionInput();
        this.directionInput.init();

        this.startGameLoop();
        
        this.map.startCutscene([
            { type: "changeMap", map: "DirtRoadToCity" }
            /* { who:"player_character", type: "walk", direction: "down" },
            { who:"player_character", type: "walk", direction: "down" },
            { who:"player_character", type: "walk", direction: "right" },
            { who:"player_character", type: "stand", direction: "right", time: 1200 },
            { who:"npcA", type: "stand", direction: "left", time: 800 },
            { type: "textMessage", text: "Is dangerous to go alone, take this!" } */
        ])
    }
}