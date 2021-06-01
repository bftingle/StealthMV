///////////////////////////////////////////////////////////////////////////////////////
// Collaborators: Ben Tingley, Alexander Nguyen, Swetha Thiru
//
// Game Title: TBD
//
// Date Completed: TBD
//
// 
///////////////////////////////////////////////////////////////////////////////////////

let config = {
    type: Phaser.WEBGL,
    width: 1400,
    height: 864,
    scene: [ Loading, Menu, Instructions, Credits, Play, DevPlay, Caught ],
    fps: {
        target: 60,
        forceSetTimeOut: true
    },
    physics: {
        default: 'matter'
    }
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyW, keyA, keyS, keyD, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyTAB;

game.map = new TowerMap();
game.greenCard = false;
game.blueCard = false;
game.redCard = false;
game.stone1_3 = false;
game.stone1_4 = false;
game.stone1_5 = false;
game.stone2_3 = false;
game.stone3_2 = false;
game.stone3_4 = false;
game.stone4_3 = false;
game.stone4_5 = false;
game.stone5_2 = false;