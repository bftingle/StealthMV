class DevPlay extends Phaser.Scene {
    constructor() {
        super("devPlayScene");
    }

    preload() {
        this.load.image('testBackground', './assets/testBackground.png');
        this.load.image('shade', './assets/shade.png');
        this.load.image('testLight', './assets/testLight.png');
        this.load.image('guard', './assets/cop.png');
        this.load.image('wall', './assets/wall.png');
        this.load.image('player', './assets/player.png');
        this.load.audio('footsteps', './assets/footsteps.wav');
        this.load.audio('detected', './assets/detected.wav');
    }
    
    create(data) {
        this.testBackground = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'testBackground').setOrigin(0, 0);

        this.lightArray = [];
        this.wallArray = [];
        this.guardArray = [];
        
        this.roomX = data.roomX;
        this.roomY = data.roomY;
        this.map = new TowerMap();
        this.map.array[this.roomY][this.roomX](this);

        this.player = new Player(this, data.playerX, data.playerY, 'player', 0);

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
        this.guardArray.forEach(guard => guard.update());
        this.player.update();

        if(this.player.y < 0) this.scene.restart({roomX: this.roomX, roomY: this.roomY - 1, playerX: 700, playerY: 840});
        if(this.player.x < 0) this.scene.restart({roomX: this.roomX - 1, roomY: this.roomY, playerX: 1382, playerY: 432});
        if(this.player.y > 864) this.scene.restart({roomX: this.roomX, roomY: this.roomY + 1, playerX: 700, playerY: 24});
        if(this.player.x > 1400) this.scene.restart({roomX: this.roomX + 1, roomY: this.roomY, playerX: 18, playerY: 432});

        this.lightRT.clear();
        this.lightRT.draw(this.lightArray);
        this.lightRT.erase(this.wallArray);
    }
}