class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene.matter.world, x, y, texture, frame);
        this.setDisplaySize(9, 12);
        this.setIgnoreGravity(true);

        scene.add.existing(this);
    }

    preload() {
        // animation config
        this.anims.create({
            key: 'walk_up',
            frames: this.anims.generateFrameNumbers('playerwalk_up', { start: 0, end: 16, first: 0}),
            frameRate: 30
            });

        this.anims.create({
            key: 'walk_down',
            frames: this.anims.generateFrameNumbers('playerwalk_down', { start: 0, end: 17, first: 0}),
            frameRate: 30
            });

        this.anims.create({
            key: 'walk_right',
            frames: this.anims.generateFrameNumbers('playerwalk_right', { start: 0, end: 12, first: 0}),
            frameRate: 30
            });

        this.anims.create({
            key: 'walk_left',
            frames: this.anims.generateFrameNumbers('playerwalk_left', { start: 0, end: 12, first: 0}),
            frameRate: 30
            });
    }

    update() {
        if(keyW.isDown || keyUP.isDown){
        this.y -= 1;
        this.play('walk_up', true);
        }

        if(keyA.isDown || keyLEFT.isDown) {
            if(keyS.isDown || keyDOWN.isDown){
                this.play('walk_down', true);
                }
            else if(keyW.isDown || keyUP.isDown){
                this.play('walk_up', true);
            }
            else{
                this.play('walk_left', true);
            }
        this.x -= 1;
        }

        if(keyS.isDown || keyDOWN.isDown) {
        this.play('walk_down', true);
        this.y += 1;
        }

        if(keyD.isDown || keyRIGHT.isDown) {
            if(keyS.isDown || keyDOWN.isDown){
                this.play('walk_down', true);
                }
            else if(keyW.isDown || keyUP.isDown){
                this.play('walk_up', true);
                }
            else{
                this.play('walk_right', true);
            }
        this.x += 1;
        }
    }
}