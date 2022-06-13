const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

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

init();