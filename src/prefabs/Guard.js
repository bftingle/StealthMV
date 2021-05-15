class Guard extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, path) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);

        this.path = path;
        this.pathIndex = 0;

        this.light = scene.add.image(x, y - 72, 'testLight').setVisible(false);
        scene.lightArray.push(this.light);
    }

    update() {
        switch(this.path[this.pathIndex][0]) {
            case 'up':
                if(this.light.angle != 0) {
                    if(this.light.angle > 0)  this.light.angle -= 15;
                    else this.light.angle += 15;
                    this.light.x = Math.sin(this.light.rotation) * 72 + this.x;
                    this.light.y = Math.cos(this.light.rotation) * -72 + this.y;
                    break;
                }
                if(this.y <= this.path[this.pathIndex][1]) {
                    this.y = this.path[this.pathIndex][1];
                    if(this.path[this.pathIndex + 1] == null) this.pathIndex = 0;
                    else this.pathIndex++;
                    break;
                }
                this.y -= 4;
                this.light.y = this.y - 72;
                break;
            case 'left':
                if(this.light.angle != -90) {
                    if(this.light.angle > -90 && this.light.angle < 90)  this.light.angle -= 15;
                    else this.light.angle += 15;
                    this.light.x = Math.sin(this.light.rotation) * 72 + this.x;
                    this.light.y = Math.cos(this.light.rotation) * -72 + this.y;
                    break;
                }
                if(this.x <= this.path[this.pathIndex][1]) {
                    this.x = this.path[this.pathIndex][1];
                    if(this.path[this.pathIndex + 1] == null) this.pathIndex = 0;
                    else this.pathIndex++;
                    break;
                }
                this.x -= 4;
                this.light.x = this.x - 72;
                break;
            case 'down':
                if(this.light.angle != -180) {
                    if(this.light.angle < 0)  this.light.angle -= 15;
                    else this.light.angle += 15;
                    this.light.x = Math.sin(this.light.rotation) * 72 + this.x;
                    this.light.y = Math.cos(this.light.rotation) * -72 + this.y;
                    break;
                }
                if(this.y >= this.path[this.pathIndex][1]) {
                    this.y = this.path[this.pathIndex][1];
                    if(this.path[this.pathIndex + 1] == null) this.pathIndex = 0;
                    else this.pathIndex++;
                    break;
                }
                this.y += 4;
                this.light.y = this.y + 72;
                break;
            case 'right':
                if(this.light.angle != 90) {
                    if(this.light.angle > 90 || this.light.angle < -90)  this.light.angle -= 15;
                    else this.light.angle += 15;
                    this.light.x = Math.sin(this.light.rotation) * 72 + this.x;
                    this.light.y = Math.cos(this.light.rotation) * -72 + this.y;
                    break;
                }
                if(this.x >= this.path[this.pathIndex][1]) {
                    this.x = this.path[this.pathIndex][1];
                    if(this.path[this.pathIndex + 1] == null) this.pathIndex = 0;
                    else this.pathIndex++;
                    break;
                }
                this.x += 4;
                this.light.x = this.x + 72;
                break;
        }
    }
}