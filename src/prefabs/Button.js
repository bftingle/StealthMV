class Button extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, text, size, job) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);

        let buttonStyle = {
            fontFamily: 'Nova Square',
            fontSize: size,
            color: '#000000',
            align: 'right'
        }
        scene.add.text(x, y, text, buttonStyle).setOrigin(0.5);

        this.job = job;
        
        // menu click sound effects
        this.menuclick1 = scene.sound.add('menuclick1');
        this.menuclick2 = scene.sound.add('menuclick2');
    }

    push() {
        if(this.job == 'gotoPlay'){
            //if(this.scene.scene.isActive('menuScene')) this.scene.menuMusic.stop();
            //else if(this.scene.scene.isActive('gameOverScene')) this.scene.overMusic.stop();
            // this.scene.playMusic = this.scene.sound.add('play_music',{volume:0.25,loop:true});
            // this.scene.playMusic.play();
            this.scene.scene.start('playScene', {roomX: 2, roomY: 2, playerX: 700, playerY: 432}), this.menuclick1.play();
        }

        if(this.job == 'gotoDevPlay'){
            //if(this.scene.scene.isActive('menuScene')) this.scene.menuMusic.stop();
            //else if(this.scene.scene.isActive('gameOverScene')) this.scene.overMusic.stop();
            // this.scene.playMusic = this.scene.sound.add('play_music',{volume:0.25,loop:true});
            // this.scene.playMusic.play();
            this.scene.scene.start('devPlayScene', {roomX: 2, roomY: 2, playerX: 700, playerY: 432}), this.menuclick1.play();
        }

        if(this.job == 'gotoInstructions'){
            this.scene.scene.start('instructionsScene'), this.menuclick2.play();
            //this.scene.menuMusic.stop();
        }

        if(this.job == 'gotoCredits'){
            this.scene.scene.start('creditsScene'), this.menuclick2.play();
            //this.scene.menuMusic.stop();
        }

        if(this.job == 'gotoMenu'){ 
            this.scene.scene.start('menuScene'), this.menuclick1.play();
        }

        if(this.job == 'gotoCaught'){ 
            this.scene.scene.start('caughtScene'), this.menuclick1.play();
        }
    }
}