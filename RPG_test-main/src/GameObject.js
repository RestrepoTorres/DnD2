class GameObject {
    constructor(config) {
        this.id = null;
        this.isMounted = false;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "assets/sprites/NPC_test.png",
        });
        this.behaviorLoop = config.behaviorLoop || [];
        this.behaviorLoopIndex = 0;

        this.talking = config.talking || [];
    }

    mount(map) {
        this.isMounted = true;
        map.addWall(this.x,this.y);

        // We start the gameObjects behaviors after a short delay
        setTimeout(() => {
            this.doBehaviorEvent(map);
        }, 10);
    }

    update() {

    }

    async doBehaviorEvent(map) {
        // Check if there is a cutscene playing or if there is no event to be fired
        if (map.isCutscenePlaying || this.behaviorLoop.length === 0 || this.isStanding) {
            return;
        }
        let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
        eventConfig.who = this.id;

        // Create an instance of the event we want to fire
        const eventHandler = new OverworldEvent({map, event:eventConfig});
        await eventHandler.init(); // We wait for the event to finish

        this.behaviorLoopIndex += 1;
        if (this.behaviorLoopIndex === this.behaviorLoop.length) {
            this.behaviorLoopIndex = 0;
        }

        // Go to next event
        this.doBehaviorEvent(map);
    }
}