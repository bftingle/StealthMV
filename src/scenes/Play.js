class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('testBackground', './assets/testBackground.png');
        this.load.image('shade', './assets/shade.png');
        this.load.image('testLight', './assets/testLight.png');
    }
    
    create() {
        this.testBackground = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'testBackground').setOrigin(0, 0);

        this.lightArray = [];
        
        this.light1 = new Phaser.GameObjects.Image(this, 64, 64, 'testLight').setVisible(false);
        this.lightArray.push(this.light1);
        this.light2 = new Phaser.GameObjects.Image(this, 512, 512, 'testLight').setVisible(false);
        this.lightArray.push(this.light2);

        this.lightRT = new Phaser.GameObjects.RenderTexture(this, 0, 0, 1400, 864).setVisible(false);

        this.shade = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'shade').setOrigin(0, 0);
        this.shade.mask = new Phaser.Display.Masks.BitmapMask(this, this.lightRT);
		this.shade.mask.invertAlpha = true;

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if(keyW.isDown) {
            this.light1.y -= 2;
        }
        if(keyA.isDown) {
            this.light1.x -= 2;
        }
        if(keyS.isDown) {
            this.light1.y += 2;
        }
        if(keyD.isDown) {
            this.light1.x += 2;
        }
        if(keyUP.isDown) {
            this.light2.y -= 2;
        }
        if(keyLEFT.isDown) {
            this.light2.x -= 2;
        }
        if(keyDOWN.isDown) {
            this.light2.y += 2;
        }
        if(keyRIGHT.isDown) {
            this.light2.x += 2;
        }

        this.lightRT.clear();
        this.lightRT.draw(this.lightArray);
    }
}