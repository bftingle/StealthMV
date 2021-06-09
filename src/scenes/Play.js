class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('testBackground', './assets/testBackground.png');
        this.load.image('shade', './assets/shade2.png');
        this.load.image('testLight', './assets/testLight.png');
        this.load.image('guard', './assets/cop.png');
        this.load.image('wall', './assets/wall.png');
        this.load.image('player', './assets/player.png');
        this.load.image('lasers', './assets/lasers.png');
        this.load.audio('footsteps', './assets/footsteps.wav');
        this.load.audio('detected', './assets/detected.wav');
        this.load.audio('pickup', './assets/pickup.wav');

        this.load.spritesheet('playerwalk_up', './assets/walk_up.png', {frameWidth: 90, frameHeight: 141, startFrame: 0, endFrame: 15});
        this.load.spritesheet('playerwalk_down', './assets/walk_down.png', {frameWidth: 90, frameHeight: 141, startFrame: 0, endFrame: 16});
        this.load.spritesheet('playerwalk_left', './assets/walk_left.png', {frameWidth: 90, frameHeight: 142, startFrame: 0, endFrame: 11});
        this.load.spritesheet('playerwalk_right', './assets/walk_right.png', {frameWidth: 90, frameHeight: 142, startFrame: 0, endFrame: 11});

        this.load.spritesheet('copwalk_up', './assets/cop_walk_up.png', {frameWidth: 90, frameHeight: 141, startFrame: 0, endFrame: 15});
        this.load.spritesheet('copwalk_down', './assets/cop_walk_down.png', {frameWidth: 90, frameHeight: 140, startFrame: 0, endFrame: 11});
        this.load.spritesheet('copwalk_left', './assets/cop_walk_left.png', {frameWidth: 90, frameHeight: 141, startFrame: 0, endFrame: 11});
        this.load.spritesheet('copwalk_right', './assets/cop_walk_right.png', {frameWidth: 90, frameHeight: 139, startFrame: 0, endFrame: 11});

        this.load.image('player_up', './assets/player_up.png');
        this.load.image('player_down', './assets/player.png');
        this.load.image('player_left', './assets/player_left.png');
        this.load.image('player_right', './assets/player_right.png');

        this.load.image('cop_up', './assets/cop_up.png');
        this.load.image('cop_down', './assets/cop.png');
        this.load.image('cop_left', './assets/cop_left.png');
        this.load.image('cop_right', './assets/cop_right.png');

        this.load.image('final_hole', './assets/final_hole.png');
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
        this.load.image('wall1_vert', './assets/wall1_vert.png');
        this.load.image('wall2_vert', './assets/wall2_vert.png');
        this.load.image('wall2', './assets/wall2.png');
        this.load.image('wall_panel', './assets/wall_panel.png');
        this.load.image('wall_panel2', './assets/wall_panel2.png');
        this.load.image('wall_panel3', './assets/wall_panel3.png');
        this.load.image('wall_panel4', './assets/wall_panel4.png');
        this.load.image('wall_panel5', './assets/wall_panel5.png');
		this.load.image('inventory', './assets/inventory.png');
    }
    
    create(data) {
        this.playMusic = this.sound.add('play_music',{volume:0.25,loop:true});

        if (!this.playingmusic){
            this.playMusic.play();
            this.playingmusic = true;
        }

        this.testBackground = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'testBackground').setOrigin(0, 0);

        this.lightArray = [];
        this.catchArray = [];
        this.wallArray = [];
        this.guardArray = [];
        this.intervalArray = [];
        this.pickupArray = [];
        
        this.roomX = data.roomX;
        this.roomY = data.roomY;
        this.game.map.array[this.roomY][this.roomX](this);

        this.player = new Player(this, data.playerX, data.playerY, 'player', 0);

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(4);

        this.lightRT = new Phaser.GameObjects.RenderTexture(this, 0, 0, 1400, 864).setVisible(false);

        this.shade = this.add.image(700, 432, 'shade').setDisplaySize(this.cameras.main.displayWidth, this.cameras.main.displayHeight);
        this.shade.setScrollFactor(0, 0);
        this.shade.mask = new Phaser.Display.Masks.BitmapMask(this, this.lightRT);
		this.shade.mask.invertAlpha = true;

        this.gameOver = false;
        this.detection = 0;

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

        // animation config
        this.anims.create({
            key: 'walk_up',
            frames: this.anims.generateFrameNumbers('playerwalk_up', { start: 0, end: 15, first: 0}),
            frameRate: 45
            });

        this.anims.create({
            key: 'walk_down',
            frames: this.anims.generateFrameNumbers('playerwalk_down', { start: 0, end: 16, first: 0}),
            frameRate: 45
            });

        this.anims.create({
            key: 'walk_right',
            frames: this.anims.generateFrameNumbers('playerwalk_right', { start: 0, end: 11, first: 0}),
            frameRate: 30
            });

        this.anims.create({
            key: 'walk_left',
            frames: this.anims.generateFrameNumbers('playerwalk_left', { start: 0, end: 11, first: 0}),
            frameRate: 30
            });



        this.anims.create({
            key: 'copwalk_up',
            frames: this.anims.generateFrameNumbers('copwalk_up', { start: 0, end: 15, first: 0}),
            frameRate: 20
            });
    
        this.anims.create({
            key: 'copwalk_down',
            frames: this.anims.generateFrameNumbers('copwalk_down', { start: 0, end: 11, first: 0}),
            frameRate: 20
            });
    
        this.anims.create({
            key: 'copwalk_right',
            frames: this.anims.generateFrameNumbers('copwalk_right', { start: 0, end: 11, first: 0}),
            frameRate: 20
            });
    
        this.anims.create({
            key: 'copwalk_left',
            frames: this.anims.generateFrameNumbers('copwalk_left', { start: 0, end: 11, first: 0}),
            frameRate: 20
            });
    }

    update() {
        if(!this.gameOver) {
            this.guardArray.forEach(guard => guard.update());
            this.player.update();
            this.pickupArray.forEach(pickup => pickup.update());
        }

        if(this.player.y < 0) {
            this.intervalArray.forEach(interval => clearInterval(interval));
            this.scene.restart({roomX: this.roomX, roomY: this.roomY - 1, playerX: 700, playerY: 840});
        }
        if(this.player.x < 0) {
            this.intervalArray.forEach(interval => clearInterval(interval));
            this.scene.restart({roomX: this.roomX - 1, roomY: this.roomY, playerX: 1382, playerY: 432});
        }
        if(this.player.y > 864) {
            this.intervalArray.forEach(interval => clearInterval(interval));
            this.scene.restart({roomX: this.roomX, roomY: this.roomY + 1, playerX: 700, playerY: 24});
        }
        if(this.player.x > 1400) {
            this.intervalArray.forEach(interval => clearInterval(interval));
            this.scene.restart({roomX: this.roomX + 1, roomY: this.roomY, playerX: 18, playerY: 432});
        }

        this.lightRT.clear();
        this.lightRT.draw(this.lightArray);
        this.lightRT.erase(this.wallArray);

        if(this.matter.overlap(this.player, this.catchArray)) {
            this.detection++;
            if(this.detection >= 15 && !this.gameOver) {
                this.gameOver = true;
                this.sound.play('detected');
                this.playMusic.stop();
                this.playingmusic = false;
                this.intervalArray.forEach(interval => clearInterval(interval));
                this.time.delayedCall(2000, () => {this.scene.start('caughtScene');}, null, this);
            }
        }

        // if(this.checkCollision(this.testLight, this.player)) {
        //     this.sound.play('detected');
        //     //this.hole.isCollidable = false;
        //     //this.playMusic.stop();
        //     //this.scene.start('gameOverScene', {roadX: this.road.tilePositionX, score: this.score});
        // }

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

    // checkCollision(obj1, obj2) {
    //     if(obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.height + obj1.y > obj2.y) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}