class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    preload() {
        this.load.image('creds', './assets/creds.png');
        this.load.image('menu_button', './assets/menu_button.png');
    }
    
    create() {
        this.add.sprite(700,430,"creds");
        new Button(this, 700, 730, 'menu_button', 0, '', '36px', 'gotoMenu').setOrigin(0.5, 0.5).setInteractive({useHandCursor: true});

        this.input.on('gameobjectup', (pointer, gameObject, event) => {
            gameObject.push();
        });
    }
}