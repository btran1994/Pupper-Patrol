const FRAME_TIME = 10;
let frameCount = 0;
const ANIM_LOOP = [1, 0, 1, 2]
let animLoopIndex = 0;
let canvasEl = document.getElementById("background")
const ctx = canvasEl.getContext('2d');
const SCALE = 1 //upscale sprite
const WIDTH = 48  //width of each sprite animation
const HEIGHT = 48 //height of each sprite animation
const SCALEDWIDTH = WIDTH * SCALE  //canvas scale sprite
const SCALEDHEIGHT = HEIGHT * SCALE
let keys = {};
class Doggo{
    constructor(dogStuff) {
        this.speed = dogStuff.speed;
        this.positionX = dogStuff.positionX;
        this.positionY = dogStuff.positionY;
        this.dirDown = dogStuff.dirDown;
        this.dirUp = dogStuff.dirUp;
        this.dirLeft = dogStuff.dirLeft;
        this.dirRight = dogStuff.dirRight;
        this.sprite = dogStuff.sprite
    }

    drawGame() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        drawFrame(ANIM_LOOP[animLoopIndex], this.direction, this.positionX, this.positionY)
        window.requestAnimationFrame(drawGame);
    }

    drawFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(this.sprite, frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT, canvasX, canvasY, SCALEDWIDTH, SCALEDHEIGHT)
    }

    movement(changeX, changeY, moveDir) {
    if (this.positionX + changeX > 90 && this.positionX + 90 + SCALEDWIDTH + changeX < canvasEl.width) {
        this.positionX += changeX;
    }
    if (this.positionY + changeY > 80 && this.positionY + 15 + SCALEDHEIGHT + changeY < canvasEl.height) {
        this.positionY += changeY;
    }
    this.direction = moveDir;

    let moving = false;

    if (keys.w) {
        movement(0, -this.speed, this.DIR_UP)
        moving = true;
    } else if (keys.s) {
        movement(0, this.speed, this.DIR_DOWN)
        moving = true;
    }

    if (keys.a) {
        movement(-this.speed, 0, this.DIR_LEFT)
        moving = true;
    } else if (keys.d) {
        movement(this.speed, 0, this.DIR_RIGHT)
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
}
}


export default Doggo;