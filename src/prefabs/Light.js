class Light extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene.matter.world, x, y, texture, frame);
        this.setIgnoreGravity(true);
        this.setVisible(false);
        this.setDisplaySize(30, 30);
        this.setCollidesWith(0);

        scene.add.existing(this);
        scene.lightArray.push(this);
        scene.catchArray.push(this);
    }
}