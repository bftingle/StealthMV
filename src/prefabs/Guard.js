class Guard extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, path) {
        super(scene, x, y, texture, frame);
        this.setDisplaySize(9, 12);

        scene.add.existing(this);

        this.path = path;
        this.pathIndex = 0;

        this.light = new Light(scene, x, y - 18, 'testLight', 0);
        
        this.run = scene.sound.add('footsteps',{volume:0.3});
        this.range;
        scene.intervalArray.push(setInterval(() => {this.run.play()}, 500));
    }


    preload() {
        // animation config
        this.anims.create({
            key: 'copwalk_up',
            frames: this.anims.generateFrameNumbers('copwalk_up', { start: 0, end: 16, first: 0}),
            frameRate: 30
            });

        this.anims.create({
            key: 'copwalk_down',
            frames: this.anims.generateFrameNumbers('copwalk_down', { start: 0, end: 17, first: 0}),
            frameRate: 30
            });

        this.anims.create({
            key: 'copwalk_right',
            frames: this.anims.generateFrameNumbers('copwalk_right', { start: 0, end: 12, first: 0}),
            frameRate: 30
            });

        this.anims.create({
            key: 'copwalk_left',
            frames: this.anims.generateFrameNumbers('copwalk_left', { start: 0, end: 12, first: 0}),
            frameRate: 30
            });
    }


    update() {
        switch(this.path[this.pathIndex][0]) {
            case 'up':
                this.play('copwalk_up', true);
                if(this.light.angle != 0) {
                    if(this.light.angle > 0)  this.light.angle -= 5;
                    else this.light.angle += 5;
                    this.light.x = Math.sin(this.light.rotation) * 18 + this.x;
                    this.light.y = Math.cos(this.light.rotation) * -18 + this.y;
                    break;
                }
                if(this.y <= this.path[this.pathIndex][1]) {
                    this.y = this.path[this.pathIndex][1];
                    if(this.path[this.pathIndex + 1] == null) this.pathIndex = 0;
                    else this.pathIndex++;
                    break;
                }
                this.y -= 1;
                this.light.y = this.y - 18;
                this.on('animationcomplete', () => {
                    this.setTexture('cop_up', 0);
                });
                break;
            case 'left':
                this.play('copwalk_left', true);
                if(this.light.angle != -90) {
                    if(this.light.angle > -90 && this.light.angle < 90)  this.light.angle -= 5;
                    else this.light.angle += 5;
                    this.light.x = Math.sin(this.light.rotation) * 18 + this.x;
                    this.light.y = Math.cos(this.light.rotation) * -18 + this.y;
                    break;
                }
                if(this.x <= this.path[this.pathIndex][1]) {
                    this.x = this.path[this.pathIndex][1];
                    if(this.path[this.pathIndex + 1] == null) this.pathIndex = 0;
                    else this.pathIndex++;
                    break;
                }
                this.x -= 1;
                this.light.x = this.x - 18;
                this.on('animationcomplete', () => {
                    this.setTexture('cop_left', 0);
                });
                break;
            case 'down':
                this.play('copwalk_down', true);
                if(this.light.angle != -180) {
                    if(this.light.angle < 0)  this.light.angle -= 5;
                    else this.light.angle += 5;
                    this.light.x = Math.sin(this.light.rotation) * 18 + this.x;
                    this.light.y = Math.cos(this.light.rotation) * -18 + this.y;
                    break;
                }
                if(this.y >= this.path[this.pathIndex][1]) {
                    this.y = this.path[this.pathIndex][1];
                    if(this.path[this.pathIndex + 1] == null) this.pathIndex = 0;
                    else this.pathIndex++;
                    break;
                }
                this.y += 1;
                this.light.y = this.y + 18;
                this.on('animationcomplete', () => {
                    this.setTexture('cop_down', 0);
                });
                break;
            case 'right':
                this.play('copwalk_right', true);
                if(this.light.angle != 90) {
                    if(this.light.angle > 90 || this.light.angle < -90)  this.light.angle -= 5;
                    else this.light.angle += 5;
                    this.light.x = Math.sin(this.light.rotation) * 18 + this.x;
                    this.light.y = Math.cos(this.light.rotation) * -18 + this.y;
                    break;
                }
                if(this.x >= this.path[this.pathIndex][1]) {
                    this.x = this.path[this.pathIndex][1];
                    if(this.path[this.pathIndex + 1] == null) this.pathIndex = 0;
                    else this.pathIndex++;
                    break;
                }
                this.x += 1;
                this.light.x = this.x + 18;
                this.on('animationcomplete', () => {
                    this.setTexture('cop_right', 0);
                });
                break;
        }

        this.range = Math.sqrt(Math.pow(this.x - this.scene.player.x, 2) + Math.pow(this.y - this.scene.player.y, 2));
        if(this.range > 200) this.run.setVolume(0);
        else this.run.setVolume((1 - (this.range / 200)) * 0.3);
    }
}