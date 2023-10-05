/*jshint esversion: 6 */
// @ts-check

// these four lines fake out TypeScript into thinking that THREE
// has the same type as the T.js module, so things work for type checking
// type inferencing figures out that THREE has the same type as T
// and then I have to use T (not THREE) to avoid the "UMD Module" warning
/**  @type typeof import("./THREE/threets/index"); */
let T;
// @ts-ignore
T = THREE;

window.onload = function () {

    /** @type{THREE.Scene} */
    let scene = new THREE.Scene();
    /** @type{number} */
    let wid = 700; // window.innerWidth;
    /** @type{number} */
    let ht = 500; // window.innerHeight;
    /** @type{THREE.PerspectiveCamera} */
    let main_camera = new THREE.PerspectiveCamera(40, wid / ht, 1, 100);
    main_camera.position.set(17, 5, 10);
    main_camera.rotation.set(2, 2, -5);
    let active_camera = main_camera;
    /** @type{THREE.WebGLRenderer} */
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(wid, ht);
    renderer.shadowMap.enabled = true;

    let controls = new T.OrbitControls(main_camera, renderer.domElement);

    document.getElementById("museum_area").appendChild(renderer.domElement);
    setupButtons();
    setupBasicScene();

    // Here, we add a basic, simple first object to the museum.
    /**@type{THREE.Material} */
    let material = new THREE.MeshPhongMaterial({ color: "#00aa00", shininess: 15, specular: "#00ff00" });
    /**@type{THREE.Geometry} */
    let geometry = new THREE.CubeGeometry(0.5, 0.5, 0.5);

    // first object

    snowman(scene, renderer, main_camera);

    /**@type{THREE.Mesh} */
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(2, 1.35, 2);
    cube.rotation.set(Math.PI / 4, 0, Math.PI / 4);
    cube.castShadow = true;
    scene.add(cube);

    let objAstronaut;
    let objTeapot;
    for (let i = 0; i < 15; i++) {
        let r1 = Math.random() * (8 + 1) - 4;
        let r2 = Math.random() * (8 + 1) - 4;
        let r3 = Math.random() * (8 + 1) - 4;
        // dinosaur(scene, -2.15, 1.95, 2, 1, renderer, main_camera);
        dinosaur(scene, r1, 0, r2, 1, renderer, main_camera);
    }

    let loaderAst = new T.OBJLoader();
    loaderAst.load('OBJ/astronaut.obj', function (astronaut) {

        objAstronaut = astronaut;

        astronaut.position.set(2, 3.25, -2);

        astronaut.scale.set(0.5, 0.5, 0.5);
        spotlight_2.target = astronaut;

        scene.add(astronaut);

        renderer.render(scene, main_camera);
    });

    let loaderTeapot = new T.OBJLoader();
    loaderTeapot.load('OBJ/teapot.obj', function (teapot) {
        objTeapot = teapot;
        teapot.position.set(-1.85, 1.4, -2);
        teapot.scale.set(0.05, 0.05, 0.05);
        spotlight_3.target = teapot;
        scene.add(teapot);
        renderer.render(scene, main_camera);
    });

    /**@type{THREE.SpotLight} */
    let spotlight_1 = new THREE.SpotLight("green", 0.5);
    spotlight_1.angle = Math.PI / 16;
    spotlight_1.position.set(2, 5, 2);
    spotlight_1.target = cube;
    spotlight_1.castShadow = true;
    scene.add(spotlight_1);

    let spotlight_2 = new THREE.SpotLight("yellow", 0.5);
    spotlight_2.angle = Math.PI / 16;
    spotlight_2.position.set(2, 5, -2);
    spotlight_2.castShadow = true;
    scene.add(spotlight_2);


    let spotlight_3 = new THREE.SpotLight("orange", 0.5);
    spotlight_3.angle = Math.PI / 16;
    spotlight_3.position.set(-2, 5, -2);
    spotlight_3.castShadow = true;
    scene.add(spotlight_3);


    let spotlight_4 = new THREE.SpotLight("white", 0.5);
    spotlight_4.angle = Math.PI / 16;
    spotlight_4.position.set(-2, 5, 2);
    spotlight_4.target.position.set(-2, 0, 2);
    spotlight_4.castShadow = true;
    scene.add(spotlight_4.target);
    scene.add(spotlight_4);

    let camera_1 = new THREE.PerspectiveCamera(60, wid / ht, 1, 120);
    camera_1.position.set(0, 2.5, 0);
    camera_1.lookAt(2, 1, 2);

    let camera_2 = new THREE.PerspectiveCamera(60, wid / ht, 1, 100);
    camera_2.position.set(1, 2.5, 3);
    camera_2.lookAt(2, 3.2, -2);
    let camera_3 = new THREE.PerspectiveCamera(60, wid / ht, 1, 100);
    camera_3.position.set(8, 5, 3);
    camera_3.lookAt(-2, 5, 2);
    let camera_4 = new THREE.PerspectiveCamera(60, wid / ht, 1, 100);
    camera_4.position.set(0, 2.5, 0);
    camera_4.lookAt(-2, 1.3, -2);

    // finally, draw the scene. Also, add animation.
    renderer.render(scene, main_camera);


    function animate() {
        if (objAstronaut) {
            objAstronaut.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), 0.04);
        }
        if (objTeapot) {
            objTeapot.rotateOnWorldAxis(new THREE.Vector3(0, -1, 0), 0.04);
        }

        cube.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), 0.005);
        renderer.render(scene, active_camera);
        requestAnimationFrame(animate);
    }
    animate();

    // Simple wrapper function for code to set up the basic scene
    // Specifically, sets up the stuff students don't need to use directly.
    function setupBasicScene() {
        // make a ground plane.
        let geometry1 = new THREE.CubeGeometry(12, 0.1, 12);
        let material1 = new THREE.MeshStandardMaterial({ color: "#dddddd", metalness: 0.2, roughness: 0.8 });
        /**@type{THREE.Mesh} */
        let ground = new THREE.Mesh(geometry1, material1);
        ground.position.set(0, -1, 0);
        scene.add(ground);

        let locs = [-2, 2];
        /**@type{THREE.Geometry} */
        let geometry2 = new THREE.CylinderGeometry(0.5, 0.75, 2, 16, 8);
        /**@type{THREE.Material} */
        let material2 = new THREE.MeshPhongMaterial({ color: "#888888", shininess: 50 });
        locs.forEach(function (x_loc) {
            locs.forEach(function (z_loc) {
                /**@type{THREE.Mesh} */
                let object = new THREE.Mesh(geometry2, material2);
                object.position.x = x_loc;
                object.position.z = z_loc;
                object.position.y = 0;
                object.receiveShadow = true;
                scene.add(object);
            });
        });

        /**@type{THREE.AmbientLight} */
        let amb_light = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(amb_light);
    }

    function setupButtons() {
        document.getElementById("main_cam").onclick = function () {
            active_camera = main_camera;
            renderer.render(scene, active_camera);
        };
        document.getElementById("cam_1").onclick = function () {
            active_camera = camera_1;
            renderer.render(scene, active_camera);
        };
        document.getElementById("cam_2").onclick = function () {
            active_camera = camera_2;
            renderer.render(scene, active_camera);
        };
        document.getElementById("cam_3").onclick = function () {
            active_camera = camera_3;
            renderer.render(scene, active_camera);
        };
        document.getElementById("cam_4").onclick = function () {
            active_camera = camera_4;
            renderer.render(scene, active_camera);
        };
    }

    let light = new T.SpotLight("white", 0.6, 0, Math.PI / 15, 0); // ,0,Math.PI/9);
    light.position.set(0, 20, 0);
    scene.add(light);
    let sh = new T.SpotLightHelper(light);
    // scene.add(sh);

    let spot = new T.SpotLight("blue");
    spot.angle = Math.PI / 20;       // narrow (5 degrees)
    spot.position.set(0, 10, 0);
    spot.target.position.set(1.5, 0, 1.5);
    scene.add(spot);
    scene.add(spot.target);

    let spot1 = new T.SpotLight("red");
    spot.angle = Math.PI / 20;       // narrow (5 degrees)
    spot.position.set(0, 10, 0);
    spot.target.position.set(1.5, 0, 1.5);
    scene.add(spot1);
    scene.add(spot1.target);

    function draw() {
        // make things go around the circle - once around every 2 second
        let theta = Math.PI * 4 * (performance.now() % 2000) / 4000;
        // let r = 9*2*((Math.random()*1000)%5 +1)-1;
        // let x = 2.7 * Math.cos(r*Math.PI/36);
        // let z = 2.7 * Math.sin(r*Math.PI/36);

        let x = 2.5 * Math.cos(theta);
        let z = 2.5 * Math.sin(theta);

        spot.target.position.set(z, 0, x);
        spot1.target.position.set(x, 0, z);

        // renderer.setClearColor("lightblue");
        // renderer.render(scene,camera);
        window.requestAnimationFrame(draw);
    }
    draw();

};


function dinosaur(scene1, x1, y1, z1, s1, renderer1, camera1) {

    let renderer = renderer1;
    let camera = camera1;
    let x = x1;
    let y = y1;
    let z = z1;
    let s = s1;
    let scene = scene1;
    // head
    let head = new T.BoxGeometry(0.6 * s, 0.3 * s, 0.3 * s);
    let head1 = new T.Mesh(head, new T.MeshStandardMaterial({ color: "lightgreen" }));
    head1.position.set(-0.05 + x, y, z);
    head1.rotateZ(50);
    scene.add(head1);



    //neck
    let neck = new T.BoxGeometry(0.3 * s, 0.4 * s, 0.3 * s);
    let neck1 = new T.Mesh(neck, new T.MeshStandardMaterial({ color: "lightgreen" }));
    neck1.position.set(0.1 + x, -0.3 + y, z);
    neck1.rotateZ(60);
    scene.add(neck1);


    //body
    let body = new T.BoxGeometry(0.5 * s, 0.3 * s, 0.3 * s);
    let body1 = new T.Mesh(body, new T.MeshStandardMaterial({ color: "lightgreen" }));
    body1.position.set(0.3 + x, -0.45 + y, z);
    scene.add(body1);

    // tail
    let tail = new T.BoxGeometry(0.35 * s, 0.2 * s, 0.2 * s);
    let tail1 = new T.Mesh(tail, new T.MeshStandardMaterial({ color: "lightgreen" }));
    tail1.position.set(0.6 + x, -0.4 + y, z);
    tail1.rotateZ(10);

    scene.add(tail1);

    // small tail 
    let smtail = new T.BoxGeometry(0.25 * s, 0.1 * s, 0.1 * s);
    let smtail1 = new T.Mesh(smtail, new T.MeshStandardMaterial({ color: "lightgreen" }));
    smtail1.position.set(0.8 + x, -0.3 + y, z);
    smtail1.rotateZ(10);

    scene.add(smtail1);

    // right leg

    let legR = new T.BoxGeometry(0.2 * s, 0.35 * s, 0.1 * s);
    let legR1 = new T.Mesh(legR, new T.MeshStandardMaterial({ color: "lightgreen" }));
    legR1.position.set(0.3 + x, -0.68 + y, -0.15 + z);
    // legR1.rotateZ(10);

    scene.add(legR1);

    // left leg

    let legL = new T.BoxGeometry(0.2 * s, 0.35 * s, 0.1 * s);
    let legL1 = new T.Mesh(legL, new T.MeshStandardMaterial({ color: "lightgreen" }));
    legL1.position.set(0.3 + x, -0.68 + y, 0.15 + z);
    legR1.rotateZ(0);

    scene.add(legL1);

    // right hand

    let handR = new T.BoxGeometry(0.2 * s, 0.05 * s, 0.07 * s);
    let handR1 = new T.Mesh(handR, new T.MeshStandardMaterial({ color: "lightgreen" }));
    handR1.position.set(-0.08 + x, -0.46 + y, -0.15 + z);
    handR1.rotateZ(15);
    scene.add(handR1);

    // left hand

    let handL = new T.BoxGeometry(0.2 * s, 0.05 * s, 0.07 * s);
    let handL1 = new T.Mesh(handL, new T.MeshStandardMaterial({ color: "lightgreen" }));
    handL1.position.set(-0.08 + x, -0.46 + y, 0.15 + z);
    handL1.rotateZ(-13);
    scene.add(handL1);

    // right feet

    let feetR = new T.BoxGeometry(0.18 * s, 0.05 * s, 0.07 * s);
    let feetR1 = new T.Mesh(feetR, new T.MeshStandardMaterial({ color: "lightgreen" }));
    feetR1.position.set(0.15 + x, y - 0.88, -0.15 + z);
    feetR1.rotateZ(13);
    scene.add(feetR1);

    // left feet

    let feetL = new T.BoxGeometry(0.18 * s, 0.05 * s, 0.07 * s);
    let feetL1 = new T.Mesh(feetL, new T.MeshStandardMaterial({ color: "lightgreen" }));
    feetL1.position.set(0.15 + x, y - 0.88, 0.15 + z);
    feetL1.rotateZ(13);
    scene.add(feetL1);

    // eye black

    let eyeb = new T.BoxGeometry(0.025 * s, 0.025 * s, 0.38 * s);
    let eyeb1 = new T.Mesh(eyeb, new T.MeshStandardMaterial({ color: "red" }));
    eyeb1.rotateZ(13);
    eyeb1.position.set(0.08 + x, y, z);
    scene.add(eyeb1);

    // eye white

    let eye = new T.BoxGeometry(0.08 * s, 0.08 * s, 0.35 * s);
    let eye1 = new T.Mesh(eye, new T.MeshStandardMaterial({ color: "white" }));
    eye1.position.set(0.08 + x, y, z);
    eye1.rotateZ(13);

    scene.add(eye1);

    // mouth

    let mouth = new T.BoxGeometry(0.15 * s, 0.1 * s, 0.3 * s);
    let mouth1 = new T.Mesh(mouth, new T.MeshStandardMaterial({ color: "white" }));
    mouth1.position.set(-0.3 + x, y, z);
    scene.add(mouth1);

    let group = new T.Group();
    group.add(head1);
    group.add(neck1);
    group.add(body1);
    group.add(tail1);
    group.add(smtail1);
    group.add(legR1);
    group.add(legL1);
    group.add(handR1);
    group.add(handL1);
    group.add(feetR1);
    group.add(feetL1);
    group.add(mouth1);
    group.add(eyeb1);
    group.add(eye1);
    group.add(mouth1);
    scene.add(group);

    function draw() {
        renderer.setClearColor("lightblue");
        let theta = Math.PI * 2 * (performance.now() % 2000) / 2000;
        let x = 0.01 * Math.cos(theta);
        let z = 0.01 * Math.sin(theta);
        let r1 = Math.random() * (8 + 1) - 4;
        let r2 = Math.random() * (8 + 1) - 4;
        let r3 = Math.random() * (8 + 1) - 4;
        group.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -0.01);
        // group.position.set(r1, 0, r2);
        renderer.render(scene, camera);
        window.requestAnimationFrame(draw);
    }
    draw();
}


function snowman(scene1, renderer1, camera1) {

    let renderer = renderer1;
    let camera = camera1;
    let scene = scene1;
    let material = new T.MeshBasicMaterial({ color: "rgb(100%, 100%, 100%)" });

    //   snow upper body

    let upBody = new T.SphereGeometry(0.9, 32, 32);
    let upBody1 = new T.Mesh(upBody, material);
    upBody1.position.set(0, 4, 0);
    scene.add(upBody1);

    // snow mid body

    let midBody = new T.SphereGeometry(1.5, 32, 32);
    let midBody1 = new T.Mesh(midBody, material);
    midBody1.position.set(0 - 2.15, 1.95, 2);
    scene.add(midBody1);

    // snow man head
    let sphereHead = new T.SphereGeometry(1, 32, 32);
    let sphereHead1 = new T.Mesh(sphereHead, material);
    sphereHead1.position.set(0, 2.3, 0);
    scene.add(sphereHead1);

    // nose
    let noseGeometry = new T.ConeGeometry(0.125, 0.5, 32);
    let noseMaterial = new T.MeshBasicMaterial({ color: "brown" });
    let nose = new T.Mesh(noseGeometry, noseMaterial);
    nose.rotateZ(-Math.PI / 2);
    nose.position.set(1, 4, 0.1);
    scene.add(nose);

    // eyes left
    let eyeElement = new T.MeshBasicMaterial({ color: "rgb(0%, 0%, 0%)" });
    let eyeL = new T.SphereGeometry(0.1, 32, 32);
    let eyeL1 = new T.Mesh(eyeL, eyeElement);
    eyeL1.position.set(0.8, 4.3, 0.43);
    scene.add(eyeL1);


    // eyes right
    let eyeR = new T.SphereGeometry(0.1, 32, 32);
    let eyeR1 = new T.Mesh(eyeR, eyeElement);
    eyeR1.position.set(0.8, 4.3, -0.3);
    scene.add(eyeR1);


    // mouth
    let mouth = new T.BoxGeometry(0.08, 0.2, 0.7);

    let mouth1 = new T.Mesh(mouth, new T.MeshStandardMaterial({ color: "purple" }));
    mouth1.position.set(0.75, 3.5, 0);
    scene.add(mouth1);


    // hat

    let hatMaterial = new T.MeshBasicMaterial({ color: "rgb(100%, 30%, 30%)" });

    let hat = new T.CylinderGeometry(1, 1, 1, 32);
    let hat1 = new T.Mesh(hat, hatMaterial);
    hat1.position.set(0, 5.15, 0);
    scene.add(hat1);


    let group = new T.Group();
    group.add(hat1);
    group.add(eyeR1);
    group.add(eyeL1);
    group.add(nose);
    group.add(mouth1);
    group.add(sphereHead1);
    // group.add(midBody1);
    group.add(upBody1);
    scene.add(group);
    function draw() {
        renderer.setClearColor("lightblue");

        let theta = Math.PI * 2 * (performance.now() % 2000) / 2000;
        let x = 0.2 * Math.cos(theta);
        let z = 0.3 * Math.sin(theta);
        group.position.set(z - 2.15, 1.95, x + 2);
        renderer.render(scene, camera);
        window.requestAnimationFrame(draw);
    }
    draw();
}

