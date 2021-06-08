class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('intro', './assets/intro.png');
        this.load.image('credits', './assets/credits.png');
        this.load.image('rules', './assets/rules.png');
        this.load.image('play', './assets/play.png');
        this.load.image('button', './assets/button2.png');
        this.load.audio('menuclick1', './assets/menuclick1.wav');
        this.load.audio('menuclick2', './assets/menuclick2.wav');
        this.load.audio('play_music', './assets/Gameplay.wav');
    }
    
    create() {
        this.add.sprite(700,430,"intro");
        new Button(this, 200, 432, 'credits', 0, '', '36px', 'gotoCredits').setOrigin(0.5, 0.5).setInteractive({useHandCursor: true});
        new Button(this, 680, 432, 'play', 0, '', '36px', 'gotoPlay').setOrigin(0.5, 0.5).setInteractive({useHandCursor: true});
        //new Button(this, 1200, 432, 'rules', 0, '', '20px', 'gotoDevPlay').setOrigin(0.5, 0.5).setInteractive({useHandCursor: true});
        new Button(this, 1200, 432, 'rules', 0, '', '20px', 'gotoInstructions').setOrigin(0.5, 0.5).setInteractive({useHandCursor: true});
        

        this.input.on('gameobjectup', (pointer, gameObject, event) => {
            gameObject.push();
        });
    }
}