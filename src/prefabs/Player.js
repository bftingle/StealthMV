class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene.matter.world, x, y, texture, frame);
        this.setDisplaySize(9, 12);
        this.setIgnoreGravity(true);

        scene.add.existing(this);
    }

    update() {
        if(keyW.isDown || keyUP.isDown){
        this.y -= 1;
        }
        if(keyA.isDown || keyLEFT.isDown) {
        this.x -= 1;
        }
        if(keyS.isDown || keyDOWN.isDown) {
        this.y += 1;
        }
        if(keyD.isDown || keyRIGHT.isDown) {
        this.x += 1;
        }
    }
}