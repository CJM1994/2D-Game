const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const KEY_LEFT = 37;
const KEY_DOWN = 38;
const KEY_RIGHT = 39;
const KEY_UP = 40;

const gameState = {
    player: {
        x: 0,
        y: 0,
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

const onKeyDown = (event) => {
    const $player = document.querySelector('.player');
    console.log(event.keyCode);

    switch (event.keyCode) {
        case KEY_LEFT:
            gameState.player.x -= 5;
            setPosition($player, gameState.player.x, gameState.player.y);
            break;
        case KEY_UP:
            gameState.player.y += 5;
            setPosition($player, gameState.player.x, gameState.player.y);
            break;
        case KEY_RIGHT:
            gameState.player.x += 5;
            setPosition($player, gameState.player.x, gameState.player.y);
            break;
        case KEY_DOWN:
            gameState.player.y -= 5;
            setPosition($player, gameState.player.x, gameState.player.y);
            break;
    }
}

init();
document.addEventListener('keydown', onKeyDown);