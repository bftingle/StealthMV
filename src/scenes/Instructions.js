class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionsScene");
    }

    preload() {
        this.load.image('instructions', './assets/instruct.png');
        this.load.image('menu_button', './assets/menu_button.png');
    }
    
    create() {
        this.add.sprite(700,430,"instructions");
        new Button(this, 700, 780, 'menu_button', 0, '', '36px', 'gotoMenu').setOrigin(0.5, 0.5).setInteractive({useHandCursor: true});

        this.input.on('gameobjectup', (pointer, gameObject, event) => {
            gameObject.push();
        });
    }
}