/**
 * 4-Matrix-Exercise.js - code for workbook 4 page 4
 * provides a non-working example for students to edit
 *
 * written by Michael Gleicher, January 2019
 *
 */

// see other files for explanation of these comments
// @ts-check
/* jshint -W069, esversion:6 */

/**
 * If you want to read up on JavaScript classes, check out your favorite book or...
 * the chapter in the Exploring JS book: http://exploringjs.com/es6/ch_classes.html
 * 
 */
class Boid {

    /**
     * @param {number} x    - initial X position
     * @param {number} y    - initial Y position
     * @param {number} vx   - initial X velocity
     * @param {number} vy   - initial Y velocity
     * @param {string} color - color of the object
     */
    constructor(x, y, vx = 1, vy = 0, color = "#FF0000") {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
    }
    /**
     * Draw the Boid
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context) {
       
        context.save();
        // context.save();
        context.translate(this.x, this.y);

        context.rotate(Math.atan2(this.vy, this.vx));

        let xd = -250;
        let yd = -150;
        context.save();
        context.scale(0.2, 0.2);
        context.fillStyle = this.color;
        context.strokeStyle = "black";
        context.lineWidth = 3;

        context.beginPath();
        context.moveTo(xd + 100, yd + 200);
        context.lineTo(xd + 100, yd + 280);
        context.lineTo(xd + 110, yd + 280);
        context.lineTo(xd + 110, yd + 290);
        context.lineTo(xd + 120, yd + 290);
        context.lineTo(xd + 120, yd + 300);
        context.lineTo(xd + 130, yd + 300);
        context.lineTo(xd + 130, yd + 310);
        context.lineTo(xd + 140, yd + 310);
        context.lineTo(xd + 140, yd + 370);
        context.lineTo(xd + 180, yd + 370);
        context.lineTo(xd + 180, yd + 355);
        context.lineTo(xd + 155, yd + 355);
        context.lineTo(xd + 155, yd + 340);
        context.lineTo(xd + 155, yd + 340);
        context.lineTo(xd + 170, yd + 340);
        context.lineTo(xd + 170, yd + 330);
        context.lineTo(xd + 190, yd + 330);
        context.lineTo(xd + 190, yd + 320);
        context.lineTo(xd + 210, yd + 320);
        context.lineTo(xd + 210, yd + 310);
        context.lineTo(xd + 220, yd + 310);
        context.lineTo(xd + 220, yd + 320);
        context.lineTo(xd + 230, yd + 320);
        context.lineTo(xd + 230, yd + 370);
        context.lineTo(xd + 260, yd + 370);
        context.lineTo(xd + 260, yd + 360);
        context.lineTo(xd + 245, yd + 360);
        context.lineTo(xd + 245, yd + 300);
        context.lineTo(xd + 255, yd + 300);
        context.lineTo(xd + 255, yd + 290);
        context.lineTo(xd + 265, yd + 290);
        context.lineTo(xd + 265, yd + 260);
        context.lineTo(xd + 275, yd + 260);
        context.lineTo(xd + 275, yd + 230);
        context.lineTo(xd + 295, yd + 230);
        context.lineTo(xd + 295, yd + 245);
        context.lineTo(xd + 305, yd + 245);
        context.lineTo(xd + 305, yd + 220);
        context.lineTo(xd + 275, yd + 220);
        context.lineTo(xd + 275, yd + 205);
        context.lineTo(xd + 265, yd + 205);
        context.lineTo(xd + 265, yd + 190);
        context.lineTo(xd + 315, yd + 190);
        context.lineTo(xd + 315, yd + 180);
        context.lineTo(xd + 265, yd + 180);
        context.lineTo(xd + 265, yd + 170);
        context.lineTo(xd + 325, yd + 170);
        context.lineTo(xd + 325, yd + 130);
        context.lineTo(xd + 315, yd + 130);
        context.lineTo(xd + 315, yd + 120);
        context.lineTo(xd + 235, yd + 120);
        context.lineTo(xd + 235, yd + 135);
        context.lineTo(xd + 220, yd + 135);
        context.lineTo(xd + 220, yd + 210);
        context.lineTo(xd + 205, yd + 210);
        context.lineTo(xd + 205, yd + 220);
        context.lineTo(xd + 195, yd + 220);
        context.lineTo(xd + 195, yd + 230);
        context.lineTo(xd + 185, yd + 230);
        context.lineTo(xd + 185, yd + 240);
        context.lineTo(xd + 135, yd + 240);
        context.lineTo(xd + 135, yd + 230);
        context.lineTo(xd + 125, yd + 230);
        context.lineTo(xd + 125, yd + 220);
        context.lineTo(xd + 110, yd + 220);
        context.lineTo(xd + 110, yd + 200);
        context.closePath();

        context.fill();
        context.stroke();


        context.fillStyle = "black";
        context.strokeStyle = "#cf7d30";
        context.lineWidth = 2;
    
        context.beginPath();
        context.moveTo(xd + 250, yd + 135);
        context.lineTo(xd + 250, yd + 150);
        context.lineTo(xd + 265, yd + 150);
        context.lineTo(xd + 265, yd + 135);
        context.closePath();
    
        context.fill();
        context.stroke();




        context.fillStyle = "yellow";

        context.strokeStyle = "black";
        context.lineWidth = 2;


        context.beginPath();
        context.lineTo(xd + 150, yd + 400);
        context.arc(xd + 600, yd + 275, 20, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

        // testing squares
        context.restore();
        // context.fillRect(-16, -16, 4, 16);
        // context.fillStyle = "black";
        // context.fillRect(-8, -10, 20, 3);

        context.restore();
    }
    /**
     * Perform the "steering" behavior -
     * This function should update the velocity based on the other
     * members of the flock.
     * It is passed the entire flock (an array of Boids) - that includes
     * "this"!
     * Note: dealing with the boundaries does not need to be handled here
     * (in fact it can't be, since there is no awareness of the canvas)
     * *
     * And remember, (vx,vy) should always be a unit vector!
     * @param {Array<Boid>} flock 
     */
    steer(flock) {
		/*
		// Note - this sample behavior is just to help you understand
		// what a steering function might  do
		// all this one does is have things go in circles, rather than
		// straight lines
		// Something this simple would not count for the bonus points:
		// a "real" steering behavior must consider other boids,
		// or at least obstacles.
		
        // a simple steering behavior: 
        // create a rotation matrix that turns by a small amount
        // 2 degrees per time step
        */
        const angle = 1/8 * Math.PI / 180;
        const s = Math.sin(angle);
        const c = Math.cos(angle);

        let ovx = this.vx;
        let ovy = this.vy;

        this.vx = ovx * c + ovy * s;
        this.vy = -ovx * s + ovy * c;

    }
}

window.onload = function () {
    /** @type Array<Boid> */
    let theBoids = [];

    let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("flock"));
    let context = canvas.getContext("2d");

    let speedSlider =/** @type {HTMLInputElement} */ (document.getElementById("speed"));

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#F5DEB3";
        context.fillRect(0, 0, canvas.width, canvas.height);
        theBoids.forEach(boid => boid.draw(context));
    }

    /**
     * Handle the buttons
     */
    document.getElementById("add").onclick = function () {
        for (let i = 0; i < 10; i++) {
            theBoids.push(new Boid(Math.random() * 600, Math.random() * 600, Math.random() * 2 - 1, Math.random() * 2 - 1, getRandomColor()));
        }
    };
    document.getElementById("clear").onclick = function () {
        theBoids = [];
    };

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /**
     * The Actual Execution
     */
    function loop() {
        // change directions
        theBoids.forEach(boid => boid.steer(theBoids));
        // move forward
        let speed = Number(speedSlider.value);
        theBoids.forEach(function (boid) {
            boid.x += boid.vx * speed;
            boid.y += boid.vy * speed;
            if (boid.y < 0 || boid.y > canvas.height) {
                boid.vy = -boid.vy;
                boid.color = getRandomColor();
            }
            if (boid.x < 0 || boid.x > canvas.width) {
                boid.vx = -boid.vx;
                boid.color = getRandomColor();
            }
        });

        draw();
        window.requestAnimationFrame(loop);
    }
    loop();
};