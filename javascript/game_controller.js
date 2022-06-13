const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_LEFT_ALT = 65;
const KEY_RIGHT_ALT = 68;
const KEY_SPACE = 32;

const gameState = {
    player: {
        x: 0,
        y: 0,
        leftPressed: false,
        rightPressed: false,
        spacePressed: false,
    },
};

const init = () => {
    const $container = document.getElementById('game-container');
    createPlayer($container);
}

const setPosition = ($el, x, y) => {
    $el.style.transform = `translate(${x}px, ${y}px)`;
}

const createPlayer = ($container) => {
    gameState.player.x = GAME_WIDTH / 2;
    gameState.player.y = GAME_HEIGHT - (GAME_HEIGHT / 10);

    const $player = document.createElement('img');
    $player.src = 'Assets/PNG/playerShip1_blue.png';
    $player.className = 'player';
    $container.appendChild($player);

    setPosition($player, gameState.player.x, gameState.player.y);
}

const updatePlayer = () => {
    if (gameState.player.leftPressed) {
        gameState.player.x -= 5;
    }
    if (gameState.player.rightPressed) {
        gameState.player.x += 5;
    }
    const $player = document.querySelector('.player');
    setPosition($player, gameState.player.x, gameState.player.y);
}

const update = () => {
    updatePlayer();
    window.requestAnimationFrame(update);
}

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

init();
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
requestAnimationFrame(update);