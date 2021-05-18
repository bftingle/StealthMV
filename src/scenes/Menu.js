class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('button', './assets/button2.png');
        this.load.audio('menuclick1', './assets/menuclick1.wav');
        this.load.audio('menuclick2', './assets/menuclick2.wav');
        this.load.audio('play_music', './assets/Gameplay.wav');
    }
    
    create() {
        new Button(this, 700, 432, 'button', 0, 'Play!', '36px', 'gotoPlay').setOrigin(0.5, 0.5).setInteractive({useHandCursor: true});

        this.input.on('gameobjectup', (pointer, gameObject, event) => {
            gameObject.push();
        });
    }
}