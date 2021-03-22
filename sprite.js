const keys = [];

const player = {
    x: 0,
    y: 0, 
    width: 120,
    height: 104,
    frameX: 0,
    frameY: 0, 
    speed: 9,
    moving: false
}

const playerSprite = new Image(); 
playerSprite.src = "link.png";
const background = new Image();
background.src = "map.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    handlePlayerFrame();
    requestAnimationFrame(animate);
}
animate();
    
window.addEventListener("keydown", function(e) {  
    keys[e.keycode] = true 
    player.moving = false;
}); 

window.addEventListener("keyup", function(e) {
    delete keys[e.keycode];
    player.moving = false; 
}); 

function movePlayer() {
    if (keys[38] && player.y > 100) {
        player.y -= player.speed;
        player.frameY = 3;
    }
    if (keys[37] && player.x > 0) { 
        player.x -= player.speed;
        player.frameY = 1;
    }
    if (keys[40] && player.y < canvas.height - player.height) {
        player.y += player.speed;
        player.frameY = 0;
    } 
    if (keys[39] && player.x < canvas.width - player.width) {
        player.x += player.speed; 
        player.frameY = 2; 
    } 
}

function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving) player.frameX++ 
    else player.frameX = 0; 
}

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000/fps;
    then = Date.now(); 
    startTime = then;
    animate(); 
}


function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elasped = now - then;
    //if (elasped > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
        movePlayer();
        handlePlayerFrame();
        requestAnimationFrame(animate);
    }
startAnimating(10); 
