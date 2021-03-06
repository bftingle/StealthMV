class Keycard extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame, id) {
        super(scene.matter.world, x, y, texture, frame);
        this.id = id;
        this.setDisplaySize(36, 36);
        this.setStatic(true);
        this.setCollidesWith(0);

        scene.add.existing(this);
        scene.pickupArray.push(this);
        this.pickup = scene.sound.add('pickup');
    }

    update() {
        if(this.scene.matter.overlap(this.scene.player, this)) {
            this.pickup.play();
            switch(this.id) {
                case 'green':
                    this.scene.game.greenCard = true;
                    break;
                case 'blue':
                    this.scene.game.blueCard = true;
                    break;
                case 'red':
                    this.scene.game.redCard = true;
                    break;
            }
            this.setPosition(-969, -969);
        }
    }
}