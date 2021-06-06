class Crystal extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame, id) {
        super(scene.matter.world, x, y, texture, frame);
        this.id = id;
        if(texture == 'stone1') this.setDisplaySize(24, 24);
        else this.setDisplaySize(30, 30);
        this.setStatic(true);
        this.setCollidesWith(0);

        scene.add.existing(this);
        scene.pickupArray.push(this);
        scene.lightArray.push(this);
        this.pickup = scene.sound.add('pickup');
    }

    update() {
        if(this.scene.matter.overlap(this.scene.player, this)) {
            this.pickup.play();
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
            this.setPosition(-939, -939);
        }
    }
}