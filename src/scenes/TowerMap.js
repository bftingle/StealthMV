class TowerMap {
    constructor() {
        this.array = [
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.start  , this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default]
        ]
    }

    default(scene) {
        new Wall(scene, 0, 0, 650, 50, 'wall', 0);
        new Wall(scene, 750, 0, 1400, 50, 'wall', 0);
        new Wall(scene, 0, 0, 50, 382, 'wall', 0);
        new Wall(scene, 0, 482, 50, 864, 'wall', 0);
        new Wall(scene, 0, 815, 650, 864, 'wall', 0);
        new Wall(scene, 750, 815, 1400, 864, 'wall', 0);
        new Wall(scene, 1350, 0, 1400, 382, 'wall', 0);
        new Wall(scene, 1350, 482, 1400, 864, 'wall', 0);

        scene.guard1 = new Guard(scene, 350, 216, 'guard', 0, [['down', 648], ['right', 1050], ['up', 216], ['left', 350]]);
        scene.guard2 = new Guard(scene, 1050, 648, 'guard', 0, [['up', 216], ['left', 350], ['down', 648], ['right', 1050]]);
    }

    start(scene) {
        new Wall(scene, 0, 0, 1400, 166, 'wall', 0);
        new Wall(scene, 0, 698, 1400, 864, 'wall', 0);
        new Wall(scene, 0, 0, 300, 382, 'wall', 0);
        new Wall(scene, 0, 482, 300, 864, 'wall', 0);
        new Wall(scene, 1100, 0, 1400, 382, 'wall', 0);
        new Wall(scene, 1100, 482, 1400, 864, 'wall', 0);
        new Wall(scene, 400, 266, 650, 598, 'wall', 0);
        new Wall(scene, 750, 266, 1000, 598, 'wall', 0);
        new Wall(scene, 400, 266, 1000, 382, 'wall', 0);

        scene.guard1 = new Guard(scene, 350, 216, 'guard', 0, [['down', 648], ['right', 1050], ['up', 216], ['left', 350]]);
        scene.guard2 = new Guard(scene, 1050, 648, 'guard', 0, [['up', 216], ['left', 350], ['down', 648], ['right', 1050]]);
    }
}