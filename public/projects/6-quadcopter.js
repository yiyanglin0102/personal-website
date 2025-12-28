// empty shell for students to do their quadcopter
// exercise

// see other files for explanation of these comments
// @ts-check
/* jshint -W069, esversion:6 */

window.onload = function () {

    let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("p6"));
    let context = canvas.getContext('2d');
    context.scale(0.5, 0.5);
    context.translate(600, 600);
    function quadCopter() {
        context.save();
        context.scale(1, -1);
        context.translate(0, -canvas.height);
        context.translate(250, 250);
        context.fillStyle = "black";
        context.strokeStyle = "black";
        context.beginPath();
        context.ellipse(0, 0, 100, 70, Math.PI, 0, 2 * Math.PI);
        context.fillRect(-100, -50, 100, 100);
        context.stroke();
        context.fill();
        context.save();
        context.restore();
        context.restore();
    }

    function stick() {
        context.save();
        context.fillStyle = "grey";
        context.beginPath();
        context.moveTo(7.5, 100);
        context.lineTo(7.5, 10);
        context.lineTo(17.5, 5);
        context.lineTo(2.5, -5);
        context.lineTo(-12.5, 5);
        context.lineTo(-2.5, 10);
        context.lineTo(-2.5, 100);
        context.stroke();
        context.fill();
        context.restore();
    }

    function propeller(angle) {

        stick();
        context.save();
        context.rotate(angle);

        for (let blades = 0; blades < 4; blades++) {
            context.fillStyle = "black";
            context.fillRect(0, 0, 10, 100);
            context.rotate(Math.PI / 2);
        }
        context.restore();
    }

    function drawScene() {

        context.save();
        context.rotate(Math.PI / 100);

        let a = performance.now() / 200;
        context.save();
        context.clearRect(0, 0, canvas.width, canvas.height);
        quadCopter();
        context.save();
        context.scale(1, -1);
        context.translate(0, -canvas.height);
        context.translate(100, 250);
        context.rotate(3 * Math.PI / 2);
        propeller(a * 2);
        context.restore();


        context.save();
        context.scale(1, -1);
        context.translate(0, -canvas.height);
        context.translate(250, 100);
        context.rotate(0 * Math.PI / 2);
        propeller(a * 5);
        context.restore();


        context.save();
        context.scale(1, -1);
        context.translate(0, -canvas.height);
        context.translate(400, 250);
        context.rotate(Math.PI / 2);
        propeller(a * 10);
        context.restore();


        context.save();
        context.scale(1, -1);
        context.translate(0, -canvas.height);
        context.translate(250, 400);
        context.rotate(2 * Math.PI / 2);
        propeller(a * 3);
        context.restore();
        context.restore();

        window.requestAnimationFrame(drawScene);
    }
    drawScene();



};