class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('testBackground', './assets/testBackground.png');
        this.load.image('shade', './assets/shade.png');
        this.load.image('testLight', './assets/testLight.png');
        this.load.image('guard', './assets/cop.png');
        this.load.image('wall', './assets/wall.png');
        this.load.image('player', './assets/player.png');
    }
    
    create() {
        this.testBackground = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'testBackground').setOrigin(0, 0);

        this.lightArray = [];
        this.wallArray = [];
        
        this.guard1 = new Guard(this, 350, 216, 'guard', 0, [['down', 648], ['right', 1050], ['up', 216], ['left', 350]]);
        this.guard2 = new Guard(this, 1050, 648, 'guard', 0, [['up', 216], ['left', 350], ['down', 648], ['right', 1050]]);

        new Wall(this, 0, 0, 1400, 166, 'wall', 0);
        new Wall(this, 0, 698, 1400, 864, 'wall', 0);
        new Wall(this, 0, 0, 300, 382, 'wall', 0);
        new Wall(this, 0, 482, 300, 864, 'wall', 0);
        new Wall(this, 1100, 0, 1400, 382, 'wall', 0);
        new Wall(this, 1100, 482, 1400, 864, 'wall', 0);
        new Wall(this, 400, 266, 650, 598, 'wall', 0);
        new Wall(this, 750, 266, 1000, 598, 'wall', 0);
        new Wall(this, 400, 266, 1000, 382, 'wall', 0);

        this.player = new Player(this, 700, 432, 'player', 0);

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
        this.guard1.update();
        this.guard2.update();
        this.player.update();

        this.lightRT.clear();
        this.lightRT.draw(this.lightArray);
        this.lightRT.erase(this.wallArray);
    }
}