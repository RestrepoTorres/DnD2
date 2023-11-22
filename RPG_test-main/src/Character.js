class Character extends GameObject {
    constructor(config) {
        super(config);
        this.IsPlayerControlled = config.IsPlayerControlled || false;
        this.movingProgressRemaining = 0;
        this.isStanding = false;

        this.directionUpdate = {
            "up" : ["y", -1],
            "down" : ["y", 1],
            "left" : ["x", -1],
            "right" : ["x", 1],
        }
    }

    update(state) {
        if (this.movingProgressRemaining > 0) {
            this.updatePosition();
        } else {
            // Case 1: Player *can* provide input and is currently pressing a key
            if (!state.map.isCutscenePlaying && this.IsPlayerControlled && state.arrow) {
                this.startBehavior(state, {
                    type: "walk",
                    direction: state.arrow
                })
            }
            // Other cases of movement will be considered here
            this.updateSprite();
        }  
    }

    startBehavior(state, behavior) {
        // The character will move in whichever direction the behavior tells him to
        this.direction = behavior.direction;
        if (behavior.type === "walk") {
            // Stop the character from moving if the space is not free
            if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                behavior.retry && setTimeout(() => {
                    this.startBehavior(state, behavior)
                }, 10)
                return;
            };
            // If the space is not taken then move the character
            state.map.moveWall(this.x,this.y,this.direction);
            this.movingProgressRemaining = 16;
            this.updateSprite();
        }

        if (behavior.type === "stand") {
            this.isStanding = true;
            setTimeout(() => {
                utils.emitEvent("CharacterStandingComplete", {
                    whoId: this.id
                })
                this.isStanding = false;
            }, behavior.time)
        }
    }


    updatePosition() { 
        const [property, change] = this.directionUpdate[this.direction]
        this[property] += change;
        this.movingProgressRemaining -= 1;

        if (this.movingProgressRemaining === 0) {
            // Character has completed movement
            utils.emitEvent("CharacterWalkingComplete", {
                whoId: this.id
            })
        }
    }

    updateSprite() {
        if (this.movingProgressRemaining > 0){
            this.sprite.setAnimation("walk-" + this.direction);
            return;
        }
        this.sprite.setAnimation("idle-" + this.direction);
    }
}