class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene.matter.world, x, y, texture, frame);
        this.setIgnoreGravity(true);

        scene.add.existing(this);
    }

    update() {
        if(keyW.isDown || keyUP.isDown){
        this.y -= 6;
        }
        if(keyA.isDown || keyLEFT.isDown) {
        this.x -= 6;
        }
        if(keyS.isDown || keyDOWN.isDown) {
        this.y += 6;
        }
        if(keyD.isDown || keyRIGHT.isDown) {
        this.x += 6;
        }
    }
}