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
        this.load.image('lasers', './assets/lasers.png');
        this.load.audio('footsteps', './assets/footsteps.wav');
        this.load.audio('detected', './assets/detected.wav');
        this.load.audio('pickup', './assets/pickup.wav');

        this.load.image('border1', './assets/border.png');
        this.load.image('border2', './assets/border2.png');
        this.load.image('border3', './assets/border3.png');
        this.load.image('border4', './assets/border4.png');
        this.load.image('border_vert', './assets/border_vert.png');
        this.load.image('border_vert2', './assets/border_vert2.png');
        this.load.image('camera', './assets/camera.png');
        this.load.image('stone1', './assets/stone1.png');
        this.load.image('stone2', './assets/stone2.png');
        this.load.image('greencard', './assets/greencard.png');
        this.load.image('redcard', './assets/redcard.png');
        this.load.image('bluecard', './assets/bluecard.png');
        this.load.image('wall1', './assets/wall1.png');
        this.load.image('wall2', './assets/wall2.png');
        this.load.image('wall_panel', './assets/wall_panel.png');
        this.load.image('wall_panel2', './assets/wall_panel2.png');
        this.load.image('wall_panel3', './assets/wall_panel3.png');
        this.load.image('wall_panel4', './assets/wall_panel4.png');
        this.load.image('wall_panel5', './assets/wall_panel5.png');
		this.load.image('inventory', './assets/inventory.png');
    }
    
    create(data) {
        this.testBackground = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'testBackground').setOrigin(0, 0);

        this.lightArray = [];
        this.catchArray = [];
        this.wallArray = [];
        this.guardArray = [];
        this.intervalArray = [];
        this.pickupArray = [];
        
        this.roomX = data.roomX;
        this.roomY = data.roomY;
        this.map = new TowerMap();
        this.map.array[this.roomY][this.roomX](this);

        this.player = new Player(this, data.playerX, data.playerY, 'player', 0);

        this.lightRT = new Phaser.GameObjects.RenderTexture(this, 0, 0, 1400, 864).setVisible(false);

        this.shade = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'shade').setOrigin(0, 0);
        this.shade.mask = new Phaser.Display.Masks.BitmapMask(this, this.lightRT);
		this.shade.mask.invertAlpha = true;

        this.inventory = this.add.image(700, 432, 'inventory').setVisible(false).setScrollFactor(0, 0);
        this.greenCard = this.add.image(648, 396, 'greencard').setVisible(false).setScrollFactor(0, 0).setDisplaySize(36, 36);
        this.blueCard = this.add.image(680, 396, 'bluecard').setVisible(false).setScrollFactor(0, 0).setDisplaySize(36, 36);
        this.redCard = this.add.image(712, 396, 'redcard').setVisible(false).setScrollFactor(0, 0).setDisplaySize(36, 36);
        this.stone1_3 = this.add.image(744, 396, 'stone1').setVisible(false).setScrollFactor(0, 0).setDisplaySize(24, 24);
        this.stone1_4 = this.add.image(648, 432, 'stone2').setVisible(false).setScrollFactor(0, 0).setDisplaySize(30, 30);
        this.stone1_5 = this.add.image(680, 432, 'stone1').setVisible(false).setScrollFactor(0, 0).setDisplaySize(24, 24);
        this.stone2_3 = this.add.image(712, 432, 'stone2').setVisible(false).setScrollFactor(0, 0).setDisplaySize(30, 30);
        this.stone3_2 = this.add.image(744, 432, 'stone1').setVisible(false).setScrollFactor(0, 0).setDisplaySize(24, 24);
        this.stone3_4 = this.add.image(648, 468, 'stone2').setVisible(false).setScrollFactor(0, 0).setDisplaySize(30, 30);
        this.stone4_3 = this.add.image(680, 468, 'stone1').setVisible(false).setScrollFactor(0, 0).setDisplaySize(24, 24);
        this.stone4_5 = this.add.image(712, 468, 'stone2').setVisible(false).setScrollFactor(0, 0).setDisplaySize(30, 30);
        this.stone5_2 = this.add.image(744, 468, 'stone1').setVisible(false).setScrollFactor(0, 0).setDisplaySize(24, 24);

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyTAB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB);
    }

    update() {
        this.guardArray.forEach(guard => guard.update());
        this.player.update();
        this.pickupArray.forEach(pickup => pickup.update());

        if(this.player.y < 0) this.scene.restart({roomX: this.roomX, roomY: this.roomY - 1, playerX: 700, playerY: 840});
        if(this.player.x < 0) this.scene.restart({roomX: this.roomX - 1, roomY: this.roomY, playerX: 1382, playerY: 432});
        if(this.player.y > 864) this.scene.restart({roomX: this.roomX, roomY: this.roomY + 1, playerX: 700, playerY: 24});
        if(this.player.x > 1400) this.scene.restart({roomX: this.roomX + 1, roomY: this.roomY, playerX: 18, playerY: 432});

        this.lightRT.clear();
        this.lightRT.draw(this.lightArray);
        this.lightRT.erase(this.wallArray);

        if(Phaser.Input.Keyboard.JustDown(keyTAB)) {
            this.inventory.setVisible(true);
            if(this.game.greenCard) this.greenCard.setVisible(true);
            if(this.game.blueCard) this.blueCard.setVisible(true);
            if(this.game.redCard) this.redCard.setVisible(true);
            if(this.game.stone1_3) this.stone1_3.setVisible(true);
            if(this.game.stone1_4) this.stone1_4.setVisible(true);
            if(this.game.stone1_5) this.stone1_5.setVisible(true);
            if(this.game.stone2_3) this.stone2_3.setVisible(true);
            if(this.game.stone3_2) this.stone3_2.setVisible(true);
            if(this.game.stone3_4) this.stone3_4.setVisible(true);
            if(this.game.stone4_3) this.stone4_3.setVisible(true);
            if(this.game.stone4_5) this.stone4_5.setVisible(true);
            if(this.game.stone5_2) this.stone5_2.setVisible(true);
        }
        if(Phaser.Input.Keyboard.JustUp(keyTAB)) {
            this.inventory.setVisible(false);
            this.greenCard.setVisible(false);
            this.blueCard.setVisible(false);
            this.redCard.setVisible(false);
            this.stone1_3.setVisible(false);
            this.stone1_4.setVisible(false);
            this.stone1_5.setVisible(false);
            this.stone2_3.setVisible(false);
            this.stone3_2.setVisible(false);
            this.stone3_4.setVisible(false);
            this.stone4_3.setVisible(false);
            this.stone4_5.setVisible(false);
            this.stone5_2.setVisible(false);
        }
    }
}