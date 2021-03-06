const ImageFiles = [
    'playerpic'
]

const GameSettings = {
    keypress: {
        left: 37,
        right: 39,
        up: 38,
        down: 40,
        space: 32
    },

    playAreaWidth: 720,
    playAreaHeigth: 576,
    playAreaDiv: '#playArea',

    playerDivName: 'playerSprite',

    playerStart: {
        x: 360,
        y: 440,
    },

    playerStartLives: 3,
    playerState: {
        ok: 0,
        dead: 1,
        hitFlashing: 2
    },
    playerMoveStep: 8
};

let GameManager = {
    assets: {},
    player: undefined,
    lastUpdate: Date.now(),
    elapsedTime: 0
};
