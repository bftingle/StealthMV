class Caught extends Phaser.Scene {
    constructor() {
        super("caughtScene");
    }

    preload() {
        this.load.image('gameover', './assets/game_over.png');
        this.load.image('credits', './assets/credits.png');
        this.load.image('menu_button', './assets/menu_button.png');
    }
    
    create() {
        //console.log('hello');
        this.game.sound.stopAll();
        this.add.sprite(700,430,'gameover');
        new Button(this, 200, 432, 'credits', 0, '', '36px', 'gotoCredits').setOrigin(0.5, 0.5).setInteractive({useHandCursor: true});
        new Button(this, 1200, 432, 'menu_button', 0, '', '20px', 'gotoMenu').setOrigin(0.5, 0.5).setInteractive({useHandCursor: true});
        

        this.input.on('gameobjectup', (pointer, gameObject, event) => {
            gameObject.push();
        });
    }
}