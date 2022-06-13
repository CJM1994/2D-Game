const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_LEFT_ALT = 65;
const KEY_RIGHT_ALT = 68;
const KEY_SPACE = 32;

const PLAYER_RADIUS = 20;
const PLAYER_SPEED = GAME_WIDTH / 1.5; // PIXELS PER SECOND

const gameState = {
    lastFrameTime: Date.now(),
    player: {
        x: 0,
        y: 0,
        leftPressed: false,
        rightPressed: false,
        spacePressed: false,
    },
};

// INITIALIZE GAME STATE
const init = () => {
    const $container = document.getElementById('game-container');
    createPlayer($container);
}

// SET PLAYER POSITION
const setPosition = ($el, x, y) => {
    $el.style.transform = `translate(${x}px, ${y}px)`;
}

// KEEP PLAYER WITHIN BOUNDS
const clampPosition = (playerRadius, min, max) => {
    if (gameState.player.x >= max - playerRadius) {
        gameState.player.x = max - playerRadius;
    }
    if (gameState.player.x <= min + playerRadius) {
        gameState.player.x = min + playerRadius;
    }
    const $player = document.querySelector('.player');
    setPosition($player, gameState.player.x, gameState.player.y);
}

// CREATE PLAYER DOM ELEMENT
const createPlayer = ($container) => {
    gameState.player.x = GAME_WIDTH / 2;
    gameState.player.y = GAME_HEIGHT - (GAME_HEIGHT / 10);

    const $player = document.createElement('img');
    $player.src = 'Assets/PNG/playerShip1_blue.png';
    $player.className = 'player';
    $container.appendChild($player);

    setPosition($player, gameState.player.x, gameState.player.y);
}

// RESPOND TO PLAYER INPUT
const updatePlayer = (dt) => {
    if (gameState.player.leftPressed) {
        gameState.player.x -= PLAYER_SPEED * dt;
    }
    if (gameState.player.rightPressed) {
        gameState.player.x += PLAYER_SPEED * dt;
    }
    const $player = document.querySelector('.player');
    setPosition($player, gameState.player.x, gameState.player.y);
    clampPosition(PLAYER_RADIUS, 0, GAME_WIDTH);
}

// MAIN GAME LOOP
const update = () => {
    const dt = (Date.now() - gameState.lastFrameTime) / 1000;
    gameState.lastFrameTime = Date.now();
    updatePlayer(dt);
    window.requestAnimationFrame(update);
}

// KEY DOWN EVENT HANDLER
const onKeyDown = (event) => {
    switch (event.keyCode) {
        case KEY_LEFT:
            gameState.player.leftPressed = true;
            break;
        case KEY_RIGHT:
            gameState.player.rightPressed = true;
            break;
        case KEY_LEFT_ALT:
            gameState.player.leftPressed = true;
            break;
        case KEY_RIGHT_ALT:
            gameState.player.rightPressed = true;
            break;
    }
}

// KEY UP EVENT HANDLER
const onKeyUp = (event) => {
    switch (event.keyCode) {
        case KEY_LEFT:
            gameState.player.leftPressed = false;
            break;
        case KEY_RIGHT:
            gameState.player.rightPressed = false;
            break;
        case KEY_LEFT_ALT:
            gameState.player.leftPressed = false;
            break;
        case KEY_RIGHT_ALT:
            gameState.player.rightPressed = false;
            break;
}}

// EXECUTE SCRIPT
init();
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
requestAnimationFrame(update);