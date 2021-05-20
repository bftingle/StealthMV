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
let keyW, keyA, keyS, keyD, keyLEFT, keyRIGHT, keyUP, keyDOWN;