class TowerMap {
    constructor() {
        this.array = [
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default],
            [this.default, this.default, this.default, this.default, this.default, this.default, this.default]
        ]
    }

    default(scene) {
        scene.wallArray.push(new Wall(scene, 0, 0, 685, 30, 'wall', 0));    //Outer Walls
        scene.wallArray.push(new Wall(scene, 715, 0, 1400, 30, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 0, 0, 30, 417, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 0, 447, 30, 864, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 0, 834, 685, 864, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 715, 834, 1400, 864, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 1370, 0, 1400, 417, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 1370, 447, 1400, 864, 'wall', 0));

        scene.wallArray.push(new Wall(scene, 60, 60, 248, 159, 'wall', 0));    //1st Row
        scene.wallArray.push(new Wall(scene, 278, 60, 466, 159, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 496, 60, 684, 159, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 714, 60, 902, 159, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 932, 60, 1120, 159, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 1150, 60, 1340, 159, 'wall', 0));

        scene.wallArray.push(new Wall(scene, 60, 189, 248, 288, 'wall', 0));    //2nd Row
        scene.wallArray.push(new Wall(scene, 278, 189, 466, 288, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 496, 189, 684, 288, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 714, 189, 902, 288, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 932, 189, 1120, 288, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 1150, 189, 1340, 288, 'wall', 0));

        scene.wallArray.push(new Wall(scene, 60, 318, 248, 417, 'wall', 0));    //3rd Row
        scene.wallArray.push(new Wall(scene, 278, 318, 466, 417, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 496, 318, 684, 417, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 714, 318, 902, 417, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 932, 318, 1120, 417, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 1150, 318, 1340, 417, 'wall', 0));

        scene.wallArray.push(new Wall(scene, 60, 447, 248, 546, 'wall', 0));    //4th Row
        scene.wallArray.push(new Wall(scene, 278, 447, 466, 546, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 496, 447, 684, 546, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 714, 447, 902, 546, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 932, 447, 1120, 546, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 1150, 447, 1340, 546, 'wall', 0));

        scene.wallArray.push(new Wall(scene, 60, 576, 248, 675, 'wall', 0));    //5th Row
        scene.wallArray.push(new Wall(scene, 278, 576, 466, 675, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 496, 576, 684, 675, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 714, 576, 902, 675, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 932, 576, 1120, 675, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 1150, 576, 1340, 675, 'wall', 0));

        scene.wallArray.push(new Wall(scene, 60, 705, 248, 804, 'wall', 0));    //6th Row
        scene.wallArray.push(new Wall(scene, 278, 705, 466, 804, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 496, 705, 684, 804, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 714, 705, 902, 804, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 932, 705, 1120, 804, 'wall', 0));
        scene.wallArray.push(new Wall(scene, 1150, 705, 1340, 804, 'wall', 0));

        scene.guardArray.push(new Guard(scene, 481, 303, 'guard', 0, [['up', 45], ['left', 45], ['down', 303], ['right', 481]]));
        scene.guardArray.push(new Guard(scene, 1355, 303, 'guard', 0, [['up', 45], ['left', 917], ['down', 303], ['right', 1355]]));
        scene.guardArray.push(new Guard(scene, 917, 561, 'guard', 0, [['up', 303], ['left', 481], ['down', 561], ['right', 917]]));
        scene.guardArray.push(new Guard(scene, 481, 819, 'guard', 0, [['up', 561], ['left', 45], ['down', 819], ['right', 481]]));
        scene.guardArray.push(new Guard(scene, 1355, 819, 'guard', 0, [['up', 561], ['left', 917], ['down', 819], ['right', 1355]]));
    }

    start(scene) {
        
    }
}