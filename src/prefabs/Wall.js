class Wall extends Phaser.Physics.Matter.Sprite {
    constructor(scene, left, top, right, bottom, texture, frame) {
        super(scene.matter.world, (left + right) / 2, (top + bottom) / 2, texture, frame);
        this.setDisplaySize(right - left, bottom - top);
        this.setStatic(true);

        scene.add.existing(this);
        scene.wallArray.push(this);
    }
}