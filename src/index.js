console.log("Webpack is working!")
import Doggo from "./doggo"

document.addEventListener("DOMContentLoaded", function () {


    let canvasEl = document.getElementById("background")
    let objects = document.getElementById("objects")
    const obj = objects.getContext('2d')
    const ctx = canvasEl.getContext('2d');
    const image = new Image();
    const background = new Image();
    background.src = "../assets/images/Overworld.png";
    image.onload = drawGame;
    background.onload = drawMap;
    image.src = "../assets/images/backpackpets.png";

    // let index = row * map.cols + column;

    let map = {
        cols: 14,
        rows: 11,
        tsize: 48,
        tiles: [
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            1, 8, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1,
            1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            
        ],
        getTile: function (col, row) {
            return this.tiles[row * map.cols + col]
        }
    };

    drawMap()

    let doggo = new Doggo({
        speed:  5, //pixels moved per animation frame
        positionX: 600, //x position of character
        positionY: 300, //y position of character
        dirDown: 0,
        dirUp: 3,
        dirLeft: 1,
        dirRight: 2,
        direction: 0,
        sprite: image
    }
)

    function drawMap() {
        for (let c = 0; c < map.cols; c++) {
            for (let r = 0; r < map.rows; r++) {
                let tile = map.getTile(c, r);
                if (tile === 1) { 
                    obj.drawImage(background, 81, 255, 30, 30, c * 100, r * 80 - 30, 100, 100)
                }
                if (tile === 2) {
                    obj.drawImage(background, 209, 84, 30, 45, c * 100, r * 80, 60, 80)
                }
                if (tile === 3) {
                    obj.drawImage(background, 100, 0, 75, 80, c * 100, r * 80 - 30, 200, 200)
                }
                if (tile === 4) {
                    obj.drawImage(background, 544, 30, 16, 16, c * 100, r * 80 - 10, 40, 40)
                }
                if (tile === 5) {
                    obj.drawImage(background, 69, 145, 40, 100, c * 100, r * 80, 100, 100)
                }
                if (tile === 6) {
                    obj.drawImage(background, 112, 186, 16, 20, c * 100, r * 80 - 25, 40, 40)
                }
                if (tile === 7) {
                    obj.drawImage(background, 563, 128, 28, 30, c * 100, r * 80 - 70, 40, 40)
                }
                if (tile === 8) {
                    obj.drawImage(background, 290, 360, 76, 90, c * 100, r * 80, 100, 100)
                }
                if (tile === 9) {
                    obj.drawImage(background, 448, 144, 50, 50, c * 100 + 60, r * 80, 100, 100)
                }
            }
        }
    }

    const FRAME_TIME = 10;
    let frameCount = 0;
    const ANIM_LOOP = [1, 0, 1, 2]
    let animLoopIndex = 0;

    let keys = {};

    window.addEventListener('keydown', downListen, false);
    function downListen(e) {
        keys[e.key] = true;
    }

    window.addEventListener('keyup', upListen, false);
    function upListen(e) {
        keys[e.key] = false;
    }

    function drawGame() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

        let moving = false;

        if (keys.w) {
            doggo.movement(0, -doggo.speed, doggo.dirUp)
            moving = true;
        } else if (keys.s) {
            doggo.movement(0, doggo.speed, doggo.dirDown)
            moving = true;
        }

        if (keys.a) {
            doggo.movement(-doggo.speed, 0, doggo.dirLeft)
            moving = true;
        } else if (keys.d) {
            doggo.movement(doggo.speed, 0, doggo.dirRight)
            moving = true;
        }

        if (moving) {
            frameCount++;
            if (frameCount >= FRAME_TIME) {
                frameCount = 0;
                animLoopIndex++;
                if (animLoopIndex >= ANIM_LOOP.length) {
                    animLoopIndex = 0;
                }
            }
        }
        if (!moving) {
            animLoopIndex = 0;
        }
        doggo.drawFrame(ANIM_LOOP[animLoopIndex], doggo.direction, doggo.positionX, doggo.positionY)
        window.requestAnimationFrame(drawGame);
    }
})

   