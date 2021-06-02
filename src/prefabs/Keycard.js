class Keycard extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame, id) {
        super(scene.matter.world, x, y, texture, frame);
        this.id = id;
        this.setDisplaySize(36, 36);
        this.setStatic(true);

        scene.add.existing(this);
        scene.pickup = this;
    }

    update() {
        if(this.scene.matter.overlap(this.scene.player, this)) {
            switch(this.id) {
                case 'greenCard':
                    this.scene.game.greenCard = true;
                    break;
                case 'blueCard':
                    this.scene.game.blueCard = true;
                    break;
                case 'redCard':
                    this.scene.game.redCard = true;
                    break;
            }
            this.scene.pickup = null;
            this.destroy();
        }
    }
}