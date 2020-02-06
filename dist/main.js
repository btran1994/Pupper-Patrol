/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/doggo.js":
/*!**********************!*\
  !*** ./src/doggo.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ANIM_LOOP = [1, 0, 1, 2]\nlet animLoopIndex = 0;\nlet canvasEl = document.getElementById(\"background\")\nconst ctx = canvasEl.getContext('2d');\nconst SCALE = 1 //upscale sprite\nconst WIDTH = 48  //width of each sprite animation\nconst HEIGHT = 48 //height of each sprite animation\nconst SCALEDWIDTH = WIDTH * SCALE  //canvas scale sprite\nconst SCALEDHEIGHT = HEIGHT * SCALE\nclass Doggo{\n    constructor(dogStuff) {\n        this.speed = dogStuff.speed;\n        this.positionX = dogStuff.positionX;\n        this.positionY = dogStuff.positionY;\n        this.dirDown = dogStuff.dirDown;\n        this.dirUp = dogStuff.dirUp;\n        this.dirLeft = dogStuff.dirLeft;\n        this.dirRight = dogStuff.dirRight;\n        this.sprite = dogStuff.sprite\n    }\n\n    drawGame() {\n        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);\n        drawFrame(ANIM_LOOP[animLoopIndex], this.direction, this.positionX, this.positionY)\n        window.requestAnimationFrame(drawGame);\n    }\n\n    drawFrame(frameX, frameY, canvasX, canvasY) {\n        ctx.drawImage(this.sprite, frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT, canvasX, canvasY, SCALEDWIDTH, SCALEDHEIGHT)\n    }\n\n    movement(changeX, changeY, moveDir) {\n    if (this.positionX + changeX > 90 && this.positionX + 90 + SCALEDWIDTH + changeX < canvasEl.width) {\n        this.positionX += changeX;\n    }\n    if (this.positionY + changeY > 80 && this.positionY + 15 + SCALEDHEIGHT + changeY < canvasEl.height) {\n        this.positionY += changeY;\n    }\n    this.direction = moveDir;\n\n    \n}\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Doggo);\n\n//# sourceURL=webpack:///./src/doggo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _doggo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doggo */ \"./src/doggo.js\");\nconsole.log(\"Webpack is working!\")\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\n\n    let canvasEl = document.getElementById(\"background\")\n    let objects = document.getElementById(\"objects\")\n    const obj = objects.getContext('2d')\n    const ctx = canvasEl.getContext('2d');\n    const image = new Image();\n    const background = new Image();\n    background.src = \"../assets/images/Overworld.png\";\n    image.onload = drawGame;\n    background.onload = drawMap;\n    image.src = \"../assets/images/backpackpets.png\";\n\n    // let index = row * map.cols + column;\n\n    let map = {\n        cols: 14,\n        rows: 11,\n        tsize: 48,\n        tiles: [\n            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,\n            1, 8, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 1,\n            1, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 1,\n            1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1,\n            1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1,\n            1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,\n            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,\n            1, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1,\n            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,\n            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,\n            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1\n            \n        ],\n        getTile: function (col, row) {\n            return this.tiles[row * map.cols + col]\n        }\n    };\n\n    drawMap()\n\n    let doggo = new _doggo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        speed:  5, //pixels moved per animation frame\n        positionX: 600, //x position of character\n        positionY: 300, //y position of character\n        dirDown: 0,\n        dirUp: 3,\n        dirLeft: 1,\n        dirRight: 2,\n        direction: 0,\n        sprite: image,\n        moving: false\n    }\n)\n\n    function drawMap() {\n        for (let c = 0; c < map.cols; c++) {\n            for (let r = 0; r < map.rows; r++) {\n                let tile = map.getTile(c, r);\n                if (tile === 1) { \n                    obj.drawImage(background, 81, 255, 30, 30, c * 100, r * 80 - 30, 100, 100)\n                }\n                if (tile === 2) {\n                    obj.drawImage(background, 209, 84, 30, 45, c * 100, r * 80, 60, 80)\n                }\n                if (tile === 3) {\n                    obj.drawImage(background, 100, 0, 75, 80, c * 100, r * 80 - 30, 200, 200)\n                }\n                if (tile === 4) {\n                    obj.drawImage(background, 544, 30, 16, 16, c * 100, r * 80 - 10, 40, 40)\n                }\n                if (tile === 5) {\n                    obj.drawImage(background, 69, 145, 40, 100, c * 100, r * 80, 100, 100)\n                }\n                if (tile === 6) {\n                    obj.drawImage(background, 112, 186, 16, 20, c * 100, r * 80 - 25, 40, 40)\n                }\n                if (tile === 7) {\n                    obj.drawImage(background, 563, 128, 28, 30, c * 100, r * 80 - 70, 40, 40)\n                }\n                if (tile === 8) {\n                    obj.drawImage(background, 290, 360, 76, 90, c * 100, r * 80, 100, 100)\n                }\n                if (tile === 9) {\n                    obj.drawImage(background, 448, 144, 50, 50, c * 100 + 60, r * 80, 100, 100)\n                }\n            }\n        }\n    }\n\n    const FRAME_TIME = 10;\n    let frameCount = 0;\n    const ANIM_LOOP = [1, 0, 1, 2]\n    let animLoopIndex = 0;\n\n    let keys = {};\n\n    window.addEventListener('keydown', downListen, false);\n    function downListen(e) {\n        keys[e.key] = true;\n    }\n\n    window.addEventListener('keyup', upListen, false);\n    function upListen(e) {\n        keys[e.key] = false;\n    }\n\n    function drawGame() {\n        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);\n        doggo.moving = false;\n\n        if (keys.w) {\n            doggo.movement(0, -doggo.speed, doggo.dirUp)\n            doggo.moving = true;\n        } else if (keys.s) {\n            doggo.movement(0, doggo.speed, doggo.dirDown)\n            doggo.moving = true;\n        }\n\n        if (keys.a) {\n            doggo.movement(-doggo.speed, 0, doggo.dirLeft)\n            doggo.moving = true;\n        } else if (keys.d) {\n            doggo.movement(doggo.speed, 0, doggo.dirRight)\n            doggo.moving = true;\n        }\n\n        if (doggo.moving) {\n            frameCount++;\n            if (frameCount >= FRAME_TIME) {\n                frameCount = 0;\n                animLoopIndex++;\n                if (animLoopIndex >= ANIM_LOOP.length) {\n                    animLoopIndex = 0;\n                }\n            }\n        }\n        if (!doggo.moving) {\n            animLoopIndex = 0;\n        }\n        doggo.drawFrame(ANIM_LOOP[animLoopIndex], doggo.direction, doggo.positionX, doggo.positionY)\n        window.requestAnimationFrame(drawGame);\n    }\n})\n\n   \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });