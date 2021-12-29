let camera, scene, renderer, cube,cylinder;
function init() {	
	scene = new THREE.Scene();
    scene.background = new THREE.Color('white');
	camera = new THREE.PerspectiveCamera(
		85,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
    );
     scene.add(camera);

	// Init renderer

	renderer = new THREE.WebGLRenderer({ antialias: true });

	// Set size (whole window)

	renderer.setSize(window.innerWidth, window.innerHeight);

	// Render to canvas element

    document.body.appendChild(renderer.domElement);

    //Station
    //Center Building Walls

    const geometryStationWallCenter = new THREE.BoxGeometry(25,13,15);
    const materialStationWallCenter = new THREE.MeshLambertMaterial({ color: 'brown' });
    centerBuildingWall = new THREE.Mesh(geometryStationWallCenter, materialStationWallCenter);
    centerBuildingWall.position.x=0;
    centerBuildingWall.position.y=-8;
    centerBuildingWall.position.z=-11.5;
    scene.add(centerBuildingWall);

    // Center Building Shade (Dormer)

    const geometryStationShade = new THREE.BoxGeometry(17,1,17);
    const materialStationShade = new THREE.MeshLambertMaterial({ color: 'yellow' });
	centerBuildingShade = new THREE.Mesh(geometryStationShade, materialStationShade);
    centerBuildingShade.position.x=0;
    centerBuildingShade.position.y=-3;
    centerBuildingShade.position.z=-6.5;
    scene.add(centerBuildingShade);

    // Center Building Left Pillar

    const geometryCenterBuildingLeftPillar = new THREE.CylinderGeometry( 0.5, 0.5, 9, 50 );
    const materialCenterBuildingLeftPillar = new THREE.MeshLambertMaterial({ color: 'yellow' });
	centerBuildingLeftPillar = new THREE.Mesh(geometryCenterBuildingLeftPillar, materialCenterBuildingLeftPillar);
    centerBuildingLeftPillar.position.x=-9;
    centerBuildingLeftPillar.position.y=-9;
    centerBuildingLeftPillar.position.z=-3.5;
    scene.add(centerBuildingLeftPillar);

    // Center Building Right Pillar

    const geometryCenterBuildingRightPillar = new THREE.CylinderGeometry( 0.5, 0.5, 9, 50 );
    const materialCenterBuildingRightPillar = new THREE.MeshLambertMaterial({ color: 'yellow' });
    centerBuildingRightPillar = new THREE.Mesh(geometryCenterBuildingRightPillar, materialCenterBuildingRightPillar);
    centerBuildingRightPillar.position.x=9;
    centerBuildingRightPillar.position.y=-9;
    centerBuildingRightPillar.position.z=-3.5;
    scene.add(centerBuildingRightPillar)

    // Left Building Walls

    const geometryStationWallLeft = new THREE.BoxGeometry(15,9,10);
    const materialStationWallLeft = new THREE.MeshLambertMaterial({ color: 'brown' });
	leftBuildingWall = new THREE.Mesh(geometryStationWallLeft, materialStationWallLeft);
    leftBuildingWall.position.x=-11.5;
    leftBuildingWall.position.y=-8;
    leftBuildingWall.position.z=-9.5;
    scene.add(leftBuildingWall);

    // Left Building Window

    const geometryStationWindowLeft = new THREE.PlaneGeometry( 2.5, 4, 2.5 );
    const materialStationWindowLeft = new THREE.MeshLambertMaterial( {color: 0xffff00} );
    leftBuildingWindow = new THREE.Mesh( geometryStationWindowLeft, materialStationWindowLeft );
    leftBuildingWindow.position.x=-14.5;
    leftBuildingWindow.position.y=-9;
    leftBuildingWindow.position.z=-3.5;
    scene.add(leftBuildingWindow);

    // Right Building Walls

    const geometryStationWallRight = new THREE.BoxGeometry(15,9,10);
    const materialStationWallRight = new THREE.MeshLambertMaterial({ color: 'brown' });
    rightBuildingWall = new THREE.Mesh(geometryStationWallRight, materialStationWallRight);
    rightBuildingWall.position.x=11.5;
    rightBuildingWall.position.y=-8;
    rightBuildingWall.position.z=-9.5;
    scene.add(rightBuildingWall);

    // Right Building Window

    const geometryStationWindowRight = new THREE.PlaneGeometry( 2.5, 4, 2.5 );
    const materialStationWindowRight = new THREE.MeshLambertMaterial( {color: 0xffff00} );
    RightBuildingWindow = new THREE.Mesh(geometryStationWindowRight, materialStationWindowRight);
    RightBuildingWindow.position.x=14.5;
    RightBuildingWindow.position.y=-9;
    RightBuildingWindow.position.z=-3.5;
    scene.add(RightBuildingWindow);

	// Engine front cabin

    const geometryEngineFront = new THREE.BoxGeometry(10,5,5);
    const materialEngineFront = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    engineFrontCabin = new THREE.Mesh(geometryEngineFront, materialEngineFront);
    engineFrontCabin.position.x=60;
    engineFrontCabin.position.y=-17;
    scene.add(engineFrontCabin);
  
    // Engine rear cabin

	const geometryEngineRear = new THREE.BoxGeometry(5,9,5);
    const materialEngineRear = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
	engineRearCabin = new THREE.Mesh(geometryEngineRear, materialEngineRear);
    engineRearCabin.position.x=67;
    engineRearCabin.position.y=-15;
    scene.add(engineRearCabin);

    // Engine Window(s)

     var geometryEngineWindow = new THREE.BoxGeometry(1.5,1.5,1.5);
     var materialEngineWindow = new THREE.MeshLambertMaterial( {color: 0x000000} );
     engineWindow1 = new THREE.Mesh(geometryEngineWindow, materialEngineWindow);
     engineWindow1.position.x=61;
     engineWindow1.position.y=-16;
     engineWindow1.position.z=2;
     scene.add(engineWindow1);

     engineWindow2 = new THREE.Mesh(geometryEngineWindow, materialEngineWindow);
     engineWindow2.position.x=63;
     engineWindow2.position.y=-16;
     engineWindow2.position.z=2;
     scene.add(engineWindow2);

    // Chimney

    var geometryChimney = new THREE.CylinderGeometry( 1,1,4, 6 );
    const materialChimney = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
    chimney = new THREE.Mesh( geometryChimney, materialChimney);
    chimney.position.x=67;
    chimney.position.y=-8;
    scene.add(chimney);

    //  Boggy # 1

    var geometryBoggy1 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy1 = new THREE.MeshLambertMaterial({ color: 0x6a329f });
	boggy1 = new THREE.Mesh(geometryBoggy1, materialBoggy1);
    boggy1.position.x=72;
    boggy1.position.y=-17.5;
    scene.add(boggy1);

    //  Boggy # 2

    var geometryBoggy2 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy2 = new THREE.MeshLambertMaterial({ color: 0xf3294b });
	boggy2 = new THREE.Mesh(geometryBoggy2, materialBoggy2);
    boggy2.position.x=77;
    boggy2.position.y=-17.5;
    scene.add(boggy2);

    //  Boggy # 3

    var geometryBoggy3 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy3 = new THREE.MeshLambertMaterial({ color: 0xfd5f00 });
	boggy3 = new THREE.Mesh(geometryBoggy3, materialBoggy3);
    boggy3.position.x=82;
    boggy3.position.y=-17.5;
    scene.add(boggy3);

	//  Boggy # 4

    var geometryBoggy4 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy4 = new THREE.MeshLambertMaterial({ color: 0x20b2aa});
	boggy4 = new THREE.Mesh(geometryBoggy4, materialBoggy4);
    boggy4.position.x=87;
    boggy4.position.y=-17.5;
    scene.add(boggy4);

    //  Boggy # 5

    var geometryBoggy5  = new THREE.BoxGeometry(5,4,5);
    const materialBoggy5 = new THREE.MeshLambertMaterial({ color: 0xff618c });
	boggy5 = new THREE.Mesh(geometryBoggy5, materialBoggy5);
    boggy5.position.x=92;
    boggy5.position.y=-17.5;
    scene.add(boggy5);

    //  Boggy # 6

    var geometryBoggy6 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy6 = new THREE.MeshLambertMaterial({ color: 0xbada55 });
	boggy6 = new THREE.Mesh(geometryBoggy6, materialBoggy6);
    boggy6.position.x=97;
    boggy6.position.y=-17.5;
    scene.add(boggy6);

    //  Boggy # 7

    var geometryBoggy7 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy7 = new THREE.MeshLambertMaterial({ color: 0x660624 });
    boggy7 = new THREE.Mesh(geometryBoggy7, materialBoggy7);
    boggy7.position.x=102;
    boggy7.position.y=-17.5;
    scene.add(boggy7);

    //  Boggy # 8

    var geometryBoggy8 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy8 = new THREE.MeshLambertMaterial({ color: 0xa1035f });
    boggy8 = new THREE.Mesh(geometryBoggy8, materialBoggy8);
    boggy8.position.x=107;
    boggy8.position.y=-17.5;
    scene.add(boggy8);

    //  Full Moon

    var geometryMoon = new THREE.SphereGeometry( 4, 30 ,30 );
    var materialMoon = new THREE.MeshLambertMaterial( { color: 0xffea6b } );
    moon = new THREE.Mesh( geometryMoon, materialMoon);
    moon.position.x=7;
    moon.position.y=15;
    scene.add(moon);

    // Light(s) of Moon

    var moonLight1 = new THREE.HemisphereLight( 0xf1ff25, 0xfafa56,0.9 );
    moonLight1.position.set(0,0,0);
    scene.add(moonLight1);
    var moonLight2 = new THREE.DirectionalLight(0xf78f00, 0.9);
    moonLight2.target = moon;
    scene.add(moonLight2);
    var light = new THREE.AmbientLight( 0xffffff,0.05 ); // soft white light
    scene.add( light);

    // Light(s) of Station

    var stationLight1 = new THREE.DirectionalLight(0xffffff, 0.6);
    stationLight1.target = centerBuildingWall;
    scene.add(stationLight1);
    var stationLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    stationLight2.target = leftBuildingWall;
    scene.add(stationLight2);
    var stationLight3 = new THREE.DirectionalLight(0xffffff, 0.4);
    stationLight3.target = rightBuildingWall;
    scene.add(stationLight3);

    //  Clouds
    // Cloud-1 (right side)

    let x = 0, y = 0;
    let cloudShapeRight = new THREE.Shape();
    cloudShapeRight.moveTo( x+5, y+5);
    cloudShapeRight.bezierCurveTo( x + 2.2, y+3.6, x+2.2,y+2.7,x+3.1,y+2.7 );
    cloudShapeRight.bezierCurveTo( x + 4.2, y+2.6, x+5.1,y+2.6,x+6,y+3.5 );
    cloudShapeRight.bezierCurveTo( x + 6.3, y+4.5, x+5.6,y+5.5,x+4.7,y+5.5 );
    cloudShapeRight.bezierCurveTo( x + 3.3, y+5.3, x+4.2,y+2.7,x+1.85,y+3.0 );
    var geometryRightCloud = new THREE.ShapeGeometry(cloudShapeRight);
    var materialCloud = new THREE.MeshLambertMaterial( { color: 0x5b5b5b } );
    var cloudRight = new THREE.Mesh( geometryRightCloud, materialCloud ) ;
    cloudRight.position.x=7.7;
    cloudRight.position.y=8;
    scene.add(cloudRight);


    // Cloud_2_left

    var x1 = 0, y1 = 0;
    var cloudShapeLeft = new THREE.Shape();
    cloudShapeLeft.moveTo( x1+5, y1+5);
    cloudShapeLeft.bezierCurveTo( x1 + 2.2, y1+3.6, x1+2.2,y1+2.7,x1+3.1,y1+2.7 );
    cloudShapeLeft.bezierCurveTo( x1 + 4.2, y1+2.6, x1+5.1,y1+2.6,x1+6,y1+3.5 );
    cloudShapeLeft.bezierCurveTo( x1 + 6.3, y1+4.5, x1+5.6,y1+5.5,x1+4.7,y1+5.5 );
    cloudShapeLeft.bezierCurveTo( x1 + 3.3, y1+5.3, x1+4.2,y1+2.7,x1+1.85,y1+3.0 );
    cloudShapeLeft.bezierCurveTo( x1 + 6.7, y1+5.5, x1+5.9,y1+5.8,x1+4.9,y1+5.8 );
    cloudShapeLeft.bezierCurveTo( x1 + 3.9, y1+5.8, x1+4.7,y1+2.9,x1+1.97,y1+3.8 );
    var geometryLeftCloud = new THREE.ShapeGeometry(cloudShapeLeft);
    var cloudLeft= new THREE.Mesh(geometryLeftCloud, materialCloud);
    cloudLeft.position.x=-2.9;
    cloudLeft.position.y=11;
    scene.add(cloudLeft);

    //  Smoke

    var x1 = 0, y1 = 0;
    var smokeShape1 = new THREE.Shape();
    smokeShape1.moveTo( x1+2 , y1+2 );
    smokeShape1.bezierCurveTo( x1 + 3.5, y1 + 3.5, x1+4,y1,x1,y1 );
    var geometrySmoke1 = new THREE.ShapeGeometry( smokeShape1 );
    var materialSmoke1 = new THREE.MeshLambertMaterial( { color: 0x5b5b5b } );
    smoke1 = new THREE.Mesh( geometrySmoke1, materialSmoke1 ) ;
    smoke1.position.x=-2;
    smoke1.position.y=-5;
    smoke1.position.z=4;
    scene.add(smoke1);

    var x2 = 0, y2 = 0;
    var smokeShape2 = new THREE.Shape();
    smokeShape2.moveTo( x2+2 , y2+2 );
    smokeShape2.bezierCurveTo( x2 + 3.5, y2 + 3.5, x2+4,y2,x2,y2 );
    var geometrySmoke2 = new THREE.ShapeGeometry( smokeShape2 );
    var materialSmoke2 = new THREE.MeshLambertMaterial( { color: 0x5b5b5b } );
    smoke2 = new THREE.Mesh( geometrySmoke2, materialSmoke2 ) ;
    smoke2.position.x=3;
    smoke2.position.y=-2;
    scene.add(smoke2);

    //  Wheel

    var geometryWheel = new THREE.CircleGeometry( 1, 30 );
    var materialWheel = new THREE.MeshLambertMaterial( {color: 0x000000} );
    wheel1 = new THREE.Mesh(geometryWheel, materialWheel);
    wheel1.position.x=61.7;
    wheel1.position.y=-22.3;
    scene.add(wheel1);

    wheel2 = new THREE.Mesh(geometryWheel, materialWheel);
    wheel2.position.x= 61.7;
    wheel2.position.y=-22.3;
    wheel2.position.z=-5;
    scene.add(wheel2);

    wheel3 = new THREE.Mesh(geometryWheel, materialWheel);
    wheel3.position.x=69;
    wheel3.position.y=-22.3;
    scene.add(wheel3);

    wheel4 = new THREE.Mesh(geometryWheel, materialWheel);
    wheel4.position.x= 75;
    wheel4.position.y=-22.3;
    scene.add( wheel4 );

    wheel5=new THREE.Mesh(geometryWheel, materialWheel);
    wheel5.position.x=80.5;
    wheel5.position.y=-22.3;
    scene.add(wheel5);

    wheel6=new THREE.Mesh(geometryWheel, materialWheel);
    wheel6.position.x=86;
    wheel6.position.y=-22.3;
    scene.add(wheel6);

    wheel7=new THREE.Mesh(geometryWheel, materialWheel);
    wheel7.position.x=91.5;
    wheel7.position.y=-22.3;
    scene.add(wheel7);

    wheel8=new THREE.Mesh(geometryWheel, materialWheel);
    wheel8.position.x=97;
    wheel8.position.y=-22.3;
    scene.add(wheel8);

    wheel9=new THREE.Mesh(geometryWheel, materialWheel);
    wheel9.position.x=102.5;
    wheel9.position.y=-22.3;
    scene.add(wheel9);

    wheel10=new THREE.Mesh(geometryWheel, materialWheel);
    wheel10.position.x=108;
    wheel10.position.y=-22.3;
    scene.add(wheel10);

    wheel11=new THREE.Mesh(geometryWheel, materialWheel);
    wheel11.position.x=113.5;
    wheel11.position.y=-22.3;
    scene.add(wheel11);

    wheel12=new THREE.Mesh(geometryWheel, materialWheel);
    wheel12.position.x=116.5;
    wheel12.position.y=-22.3;
    scene.add(wheel12);

    //  Track

    const materialLine = new THREE.LineDashedMaterial( {
        color: 0x000000,
        linewidth: 5,
        scale: 1,
        dashSize: 10,
        gapSize: 5,
    } );

    const points1 = [];
    points1.push( new THREE.Vector3( - 80, -23.5, 0 ) );
    points1.push( new THREE.Vector3( 70, -23.5, 0 ) );
    const geometryLine1 = new THREE.BufferGeometry().setFromPoints( points1 );
    const line1 = new THREE.Line( geometryLine1, materialLine );
    scene.add(line1);
    

    // Camera Position

    camera.position.z = 33 ;
    camera.position.x = -4 ;
    camera.position.y = 3;

}

// Draw the scene every time the screen is refreshed

function animate() {
        requestAnimationFrame(animate);
        engineFrontCabin.translateX(-0.15);
        engineRearCabin.translateX(-0.15);
        chimney.translateX(-0.15);
        boggy1.translateX(-0.15);
        boggy2.translateX(-0.15);
        boggy3.translateX(-0.15);
        boggy4.translateX(-0.15);
        boggy5.translateX(-0.15);
        boggy6.translateX(-0.15);
        boggy7.translateX(-0.15);
        boggy8.translateX(-0.15);
        smoke1.translateX(-0.05);
        smoke1.translateY(0.05);
        smoke1.translateZ(-0.05);
        smoke2.translateX(-0.05);
        smoke2.translateY(0.05);
        smoke2.translateZ(-0.1);
        wheel1.translateX(-0.165);
        wheel2.translateX(-0.165);
        wheel3.translateX(-0.165);
        wheel4.translateX(-0.165);
        wheel5.translateX(-0.165);
        wheel6.translateX(-0.165);
        wheel7.translateX(-0.165);
        wheel8.translateX(-0.165);
        wheel9.translateX(-0.165);
        wheel10.translateX(-0.165);
        wheel11.translateX(-0.165);
        wheel12.translateX(-0.16);
        engineWindow1.translateX(-0.15);
        engineWindow2.translateX(-0.15);
      
    const render=function(){
	requestAnimationFrame(render)
	renderer.render(scene, camera);
}
render();
}
function onWindowResize() {
	// Camera frustum aspect ratio
	camera.aspect = window.innerWidth / window.innerHeight;
	// After making changes to aspect
	camera.updateProjectionMatrix();
	// Reset size
	renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);
init(); 
animate();