class Lasers extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene.matter.world, x, y, texture, frame);
        this.setIgnoreGravity(true);
        this.setDisplaySize(48, 30);
        this.setCollidesWith(0);

        scene.add.existing(this);
        scene.lightArray.push(this);
        scene.catchArray.push(this);

        this.off = false;
        this.baseX = x;
        this.baseY = y;
        scene.intervalArray.push(setInterval(() => {this.toggle()}, 1500));
    }

    toggle() {
        if(this.off) {
            this.off = false;
            this.setPosition(this.baseX, this.baseY);
        } else {
            this.off = true;
            this.setPosition(-999, -999);
        }
    }
}