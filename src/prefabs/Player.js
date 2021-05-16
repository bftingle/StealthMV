class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene.matter.world, x, y, texture, frame);
        this.setIgnoreGravity(true);

        scene.add.existing(this);
        this.run = scene.sound.add('footsteps',{volume:0.3});
    }

    update() {
        if(keyW.isDown || keyUP.isDown){
        this.y -= 6;
        this.run.play();
        }
        if(keyA.isDown || keyLEFT.isDown) {
        this.x -= 6;
        this.run.play();
        }
        if(keyS.isDown || keyDOWN.isDown) {
        this.y += 6;
        this.run.play();
        }
        if(keyD.isDown || keyRIGHT.isDown) {
        this.x += 6;
        this.run.play();
        }
    }
}