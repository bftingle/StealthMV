class Crystal extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame, id) {
        super(scene.matter.world, x, y, texture, frame);
        this.id = id;
        this.setDisplaySize(36, 36);
        this.setStatic(true);

        scene.add.existing(this);
        scene.pickup = this;
        scene.lightArray.push(this);
    }

    update() {
        if(this.scene.matter.overlap(this.scene.player, this)) {
            switch(this.id) {
                case '1_3':
                    this.scene.game.stone1_3 = true;
                    break;
                case '1_4':
                    this.scene.game.stone1_4 = true;
                    break;
                case '1_5':
                    this.scene.game.stone1_5 = true;
                    break;
                case '2_3':
                    this.scene.game.stone2_3 = true;
                    break;
                case '3_2':
                    this.scene.game.stone3_2 = true;
                    break;
                case '3_4':
                    this.scene.game.stone3_4 = true;
                    break;
                case '4_3':
                    this.scene.game.stone4_3 = true;
                    break;
                case '4_5':
                    this.scene.game.stone4_5 = true;
                    break;
                case '5_2':
                    this.scene.game.stone5_2 = true;
                    break;
            }
            this.scene.pickup = null;
            this.destroy();
        }
    }
}