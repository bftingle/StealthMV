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

    update() {
        switch(this.path[this.pathIndex][0]) {
            case 'up':
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
                break;
            case 'left':
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
                break;
            case 'down':
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
                break;
            case 'right':
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
                break;
        }

        this.range = Math.sqrt(Math.pow(this.x - this.scene.player.x, 2) + Math.pow(this.y - this.scene.player.y, 2));
        if(this.range > 200) this.run.setVolume(0);
        else this.run.setVolume((1 - (this.range / 200)) * 0.3);
    }
}