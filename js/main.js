// LEGEND OF ZELDA

// Constants
let ROOM_ROWS = 11;
let ROOM_COLS = 16;
let TILE_SIZE = 48;

// Set up Canvas and Context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = ROOM_COLS * TILE_SIZE;
cnv.height = ROOM_ROWS * TILE_SIZE;

// HTML Variables
let mapImgEl = document.getElementById("map");

// Start Draw Function once all images load...
window.addEventListener("load", draw);

// Draw Function (Main Program Loop)
function draw() {

    for (let row = 0; row < 11; row++) {
        for (let col = 0; col < 16; col++) {
            let tileNum = room19[row][col];
            let coords = tileClipCoords[tileNum];
            ctx.drawImage(mapImgEl, coords.x, coords.y, 16, 16, col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }

    // Call draw again to loop program
    requestAnimationFrame(draw);
}