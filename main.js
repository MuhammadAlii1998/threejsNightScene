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
    engineRearCabin.position.y=-15.1;
    scene.add(engineRearCabin);

    // Engine Window(s)

     var geometryEngineWindow = new THREE.BoxGeometry(1.5,1.5,1.5);
     var materialEngineWindow = new THREE.MeshLambertMaterial( {color: 0x000000} );
     engineWindow1 = new THREE.Mesh(geometryEngineWindow, materialEngineWindow);
     engineWindow1.position.x=57;
     engineWindow1.position.y=-16;
     engineWindow1.position.z=2;
     scene.add(engineWindow1);

     engineWindow2 = new THREE.Mesh(geometryEngineWindow, materialEngineWindow);
     engineWindow2.position.x=59;
     engineWindow2.position.y=-16;
     engineWindow2.position.z=2;
     scene.add(engineWindow2);

    // Chimney

    var geometryChimney = new THREE.CylinderGeometry( 1,1,4, 6 );
    const materialChimney = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
    chimney = new THREE.Mesh( geometryChimney, materialChimney);
    chimney.position.x=67;
    chimney.position.y=-7.9;
    scene.add(chimney);

    //  Boggy # 1

    var geometryBoggy1 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy1 = new THREE.MeshLambertMaterial({ color: 0x6a329f });
	boggy1 = new THREE.Mesh(geometryBoggy1, materialBoggy1);
    boggy1.position.x=72;
    boggy1.position.y=-17.6;
    scene.add(boggy1);

    //  Boggy # 2

    var geometryBoggy2 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy2 = new THREE.MeshLambertMaterial({ color: 0xf3294b });
	boggy2 = new THREE.Mesh(geometryBoggy2, materialBoggy2);
    boggy2.position.x=77;
    boggy2.position.y=-17.6;
    scene.add(boggy2);

    //  Boggy # 3

    var geometryBoggy3 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy3 = new THREE.MeshLambertMaterial({ color: 0xfd5f00 });
	boggy3 = new THREE.Mesh(geometryBoggy3, materialBoggy3);
    boggy3.position.x=82;
    boggy3.position.y=-17.6;
    scene.add(boggy3);

	//  Boggy # 4

    var geometryBoggy4 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy4 = new THREE.MeshLambertMaterial({ color: 0x20b2aa});
	boggy4 = new THREE.Mesh(geometryBoggy4, materialBoggy4);
    boggy4.position.x=87;
    boggy4.position.y=-17.6;
    scene.add(boggy4);

    //  Boggy # 5

    var geometryBoggy5  = new THREE.BoxGeometry(5,4,5);
    const materialBoggy5 = new THREE.MeshLambertMaterial({ color: 0xff618c });
	boggy5 = new THREE.Mesh(geometryBoggy5, materialBoggy5);
    boggy5.position.x=92;
    boggy5.position.y=-17.6;
    scene.add(boggy5);

    //  Boggy # 6

    var geometryBoggy6 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy6 = new THREE.MeshLambertMaterial({ color: 0xbada55 });
	boggy6 = new THREE.Mesh(geometryBoggy6, materialBoggy6);
    boggy6.position.x=97;
    boggy6.position.y=-17.6;
    scene.add(boggy6);

    //  Boggy # 7

    var geometryBoggy7 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy7 = new THREE.MeshLambertMaterial({ color: 0x660624 });
    boggy7 = new THREE.Mesh(geometryBoggy7, materialBoggy7);
    boggy7.position.x=102;
    boggy7.position.y=-17.6;
    scene.add(boggy7);

    //  Boggy # 8

    var geometryBoggy8 = new THREE.BoxGeometry(5,4,5);
    const materialBoggy8 = new THREE.MeshLambertMaterial({ color: 0xa1035f });
    boggy8 = new THREE.Mesh(geometryBoggy8, materialBoggy8);
    boggy8.position.x=107;
    boggy8.position.y=-17.6;
    scene.add(boggy8);

    //  Sun

    var geometrySun = new THREE.SphereGeometry( 3, 30 ,30 );
    var materialSun = new THREE.MeshLambertMaterial( { color: 0xfc9601 } );
    sun = new THREE.Mesh( geometrySun, materialSun);
    sun.position.x=53;
    sun.position.y=28;
    scene.add(sun);

    // Light(s) of Sun

    var sunLight1 = new THREE.HemisphereLight( 0xffcc33, 0xd14009,0.9 );
    sunLight1.position.set(0,0,0);
    scene.add(sunLight1);
    var sunLight2 = new THREE.DirectionalLight(0xf78f00, 0.9);
    sunLight2.target = sun;
    scene.add(sunLight2);
    var light = new THREE.AmbientLight( 0xffcc33,0.05 ); // soft light
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
    // Cloud-1

    const geometryCloud1 = new THREE.TorusKnotGeometry( 1.1, 0.6, 200, 100, 1, 7 );
    const materialCloud1 = new THREE.MeshBasicMaterial( { color: 0xbcbcbc } );
    cloud1 = new THREE.Mesh( geometryCloud1, materialCloud1 );
    cloud1.position.x=-80;
    cloud1.position.y=23;
    cloud1.position.z=5;
    scene.add(cloud1);

    // Cloud_2

    const geometryCloud2 = new THREE.TorusKnotGeometry( 0.9, 0.8, 100, 120, 2, 8 );
    const materialCloud2 = new THREE.MeshBasicMaterial( { color: 0xbcbcbc } );
    cloud2 = new THREE.Mesh( geometryCloud2, materialCloud2 );
    cloud2.position.x=-90;
    cloud2.position.y=26.5;
    cloud2.position.z=4;
    scene.add(cloud2);


    //  Smoke

    const geometrySmoke1 = new THREE.TorusKnotGeometry( 1.1, 0.8, 200, 100, 1, 7 );
    const materialSmoke1 = new THREE.MeshBasicMaterial( { color: 0x305c79 } );
    smoke1 = new THREE.Mesh( geometrySmoke1, materialSmoke1 );
    smoke1.position.x=66;
    smoke1.position.y=-3.2;
    smoke1.position.z=3;
    scene.add(smoke1);

    const geometrySmoke2 = new THREE.TorusKnotGeometry( 0.5, 0.6, 200, 100, 1, 3 );
    const materialSmoke2 = new THREE.MeshBasicMaterial( { color: 0x305c79 } );
    smoke2 = new THREE.Mesh( geometrySmoke2, materialSmoke2 );
    smoke2.position.x=72;
    smoke2.position.y=-0.2;
    smoke2.position.z=3;
    scene.add(smoke2);

        // var x1 = 0, y1 = 0;
        // var smokeShape1 = new THREE.Shape();
        // smokeShape1.moveTo(x1 + 2, y1 + 2);
        // smokeShape1.bezierCurveTo(x1 + 3.5, y1 + 3.5, x1 + 4, y1, x1, y1);
        // var geometrySmoke1 = new THREE.ShapeGeometry(smokeShape1);
        // var materialSmoke1 = new THREE.MeshLambertMaterial({color: 0x2B2727});
        // smoke1 = new THREE.Mesh(geometrySmoke1, materialSmoke1);
        // smoke1.position.x = -2;
        // smoke1.position.y = -5;
        // smoke1.position.z = 4;
        // scene.add(smoke1);


        // var x2 = 0, y2 = 0;
        // var smokeShape2 = new THREE.Shape();
        // smokeShape2.moveTo(x2 + 2, y2 + 2);
        // smokeShape2.bezierCurveTo(x2 + 3.5, y2 + 3.5, x2 + 4, y2, x2, y2);
        // var geometrySmoke2 = new THREE.ShapeGeometry(smokeShape2);
        // var materialSmoke2 = new THREE.MeshLambertMaterial({color: 0x2B2727});
        // smoke2 = new THREE.Mesh(geometrySmoke2, materialSmoke2);
        // smoke2.position.x = 3;
        // smoke2.position.y = -2;
        // smoke2.position.z = 4;
        // scene.add(smoke2);

    //  Wheel

    var geometryWheel = new THREE.CircleGeometry( 1, 30 );
    var materialWheel = new THREE.MeshLambertMaterial( {color: 0x000000} );
    wheel1 = new THREE.Mesh(geometryWheel, materialWheel);
    wheel1.position.x=62.5;
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
    wheel12.position.x=118;
    wheel12.position.y=-22.3;
    scene.add(wheel12);

    wheel13=new THREE.Mesh(geometryWheel, materialWheel);
    wheel13.position.x=119;
    wheel13.position.y=-22.3;
    wheel13.position.z=-5;
    scene.add(wheel13);

    //  Track

    const materialLine = new THREE.LineDashedMaterial( {
        color: 0x000000,
        linewidth: 0.2,
        scale: 1,
        dashSize: 10,
        gapSize: 5,
    } );

    const points1 = [];
    points1.push( new THREE.Vector3( - 80, -23.3, 0 ) );
    points1.push( new THREE.Vector3( 70, -23.3, 0 ) );
    const geometryLine1 = new THREE.BufferGeometry().setFromPoints( points1 );
    const line1 = new THREE.Line( geometryLine1, materialLine );
    scene.add(line1);

    const points1a = [];
    points1a.push( new THREE.Vector3( - 80, -23.4, 0 ) );
    points1a.push( new THREE.Vector3( 70, -23.4, 0 ) );
    const geometryLine1a = new THREE.BufferGeometry().setFromPoints( points1a );
    const line1a = new THREE.Line( geometryLine1a, materialLine );
    scene.add(line1a);

    const points2 = [];
    points2.push( new THREE.Vector3( - 80, -20.1, 0 ) );
    points2.push( new THREE.Vector3( 70, -20.1, 0 ) );
    const geometryLine2 = new THREE.BufferGeometry().setFromPoints( points2 );
    const line2 = new THREE.Line( geometryLine2, materialLine );
    scene.add(line2);

    const points2a = [];
    points2a.push( new THREE.Vector3( - 80, -20, 0 ) );
    points2a.push( new THREE.Vector3( 70, -20, 0 ) );
    const geometryLine2a = new THREE.BufferGeometry().setFromPoints( points2a);
    const line2a = new THREE.Line( geometryLine2a, materialLine );
    scene.add(line2a);

    const points3 = [];
    points3.push( new THREE.Vector3( 2, -23.4, 0 ) );
    points3.push( new THREE.Vector3( 0, -20, 0 ) );
    const geometryLine3 = new THREE.BufferGeometry().setFromPoints( points3 );
    const line3 = new THREE.Line( geometryLine3, materialLine );
    scene.add(line3);

    const points4 = [];
    points4.push( new THREE.Vector3( 12, -23.4, 0 ) );
    points4.push( new THREE.Vector3( 10, -20, 0 ) );
    const geometryLine4 = new THREE.BufferGeometry().setFromPoints( points4 );
    const line4 = new THREE.Line( geometryLine4, materialLine );
    scene.add(line4);

    const points5 = [];
    points5.push( new THREE.Vector3( 22, -23.4, 0 ) );
    points5.push( new THREE.Vector3( 20, -20, 0 ) );
    const geometryLine5 = new THREE.BufferGeometry().setFromPoints( points5 );
    const line5 = new THREE.Line( geometryLine5, materialLine );
    scene.add(line5);

    const points6 = [];
    points6.push( new THREE.Vector3( 32, -23.4, 0 ) );
    points6.push( new THREE.Vector3( 30, -20, 0 ) );
    const geometryLine6 = new THREE.BufferGeometry().setFromPoints( points6 );
    const line6 = new THREE.Line( geometryLine6, materialLine );
    scene.add(line6);

    const points7 = [];
    points7.push( new THREE.Vector3( 42, -23.4, 0 ) );
    points7.push( new THREE.Vector3( 40, -20, 0 ) );
    const geometryLine7 = new THREE.BufferGeometry().setFromPoints( points7 );
    const line7 = new THREE.Line( geometryLine7, materialLine );
    scene.add(line7);

    const points8 = [];
    points8.push( new THREE.Vector3( 52, -23.4, 0 ) );
    points8.push( new THREE.Vector3( 50, -20, 0 ) );
    const geometryLine8 = new THREE.BufferGeometry().setFromPoints( points8 );
    const line8 = new THREE.Line( geometryLine8, materialLine );
    scene.add(line8);

    const points8a = [];
    points8a.push( new THREE.Vector3( 62, -23.4, 0 ) );
    points8a.push( new THREE.Vector3( 60, -20, 0 ) );
    const geometryLine8a = new THREE.BufferGeometry().setFromPoints( points8a );
    const line8a = new THREE.Line( geometryLine8a, materialLine );
    scene.add(line8a);

    const points9 = [];
    points9.push( new THREE.Vector3( -8, -23.4, 0 ) );
    points9.push( new THREE.Vector3( -10, -20, 0 ) );
    const geometryLine9 = new THREE.BufferGeometry().setFromPoints( points9 );
    const line9 = new THREE.Line( geometryLine9, materialLine );
    scene.add(line9);

    const points10 = [];
    points10.push( new THREE.Vector3( -18, -23.4, 0 ) );
    points10.push( new THREE.Vector3( -20, -20, 0 ) );
    const geometryLine10 = new THREE.BufferGeometry().setFromPoints( points10 );
    const line10 = new THREE.Line( geometryLine10, materialLine );
    scene.add(line10);

    const points11 = [];
    points11.push( new THREE.Vector3( -28, -23.4, 0 ) );
    points11.push( new THREE.Vector3( -30, -20, 0 ) );
    const geometryLine11 = new THREE.BufferGeometry().setFromPoints( points11 );
    const line11 = new THREE.Line( geometryLine11, materialLine );
    scene.add(line11);

    const points12 = [];
    points12.push( new THREE.Vector3( -38, -23.4, 0 ) );
    points12.push( new THREE.Vector3( -40, -20, 0 ) );
    const geometryLine12 = new THREE.BufferGeometry().setFromPoints( points12 );
    const line12 = new THREE.Line( geometryLine12, materialLine );
    scene.add(line12);

    const points13 = [];
    points13.push( new THREE.Vector3( -48, -23.4, 0 ) );
    points13.push( new THREE.Vector3( -50, -20, 0 ) );
    const geometryLine13 = new THREE.BufferGeometry().setFromPoints( points13 );
    const line13 = new THREE.Line( geometryLine13, materialLine );
    scene.add(line13);

    const points14 = [];
    points14.push( new THREE.Vector3( -58, -23.4, 0 ) );
    points14.push( new THREE.Vector3( -60, -20, 0 ) );
    const geometryLine14 = new THREE.BufferGeometry().setFromPoints( points14 );
    const line14 = new THREE.Line( geometryLine14, materialLine );
    scene.add(line14);

    // Moutains
    // 1st from Left

    const geometryMountain = new THREE.ConeGeometry( 3, 10, 64, 64, true );
    const materialMountain = new THREE.MeshPhongMaterial( {color: 0x000000, bumpScale: 0.9} );

    const mountain1 = new THREE.Mesh( geometryMountain,materialMountain );
    mountain1.position.x=-50.5;
    mountain1.position.y=23;
    mountain1.position.z=4.7;
    scene.add( mountain1 );

    const mountain2 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain2.position.x=-41.5;
    mountain2.position.y=23;
    mountain2.position.z=4.7;
    scene.add( mountain2 );

    const mountain3 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain3.position.x=-33.5;
    mountain3.position.y=23;
    mountain3.position.z=4.4;
    scene.add( mountain3 );

    const mountain4 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain4.position.x=-26.5;
    mountain4.position.y=23;
    mountain4.position.z=4.1;
    scene.add( mountain4 );

    const mountain5 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain5.position.x=-20;
    mountain5.position.y=23;
    mountain5.position.z=3.8;
    scene.add( mountain5 );

    const mountain6 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain6.position.x=-14;
    mountain6.position.y=23;
    mountain6.position.z=3.5;
    scene.add( mountain6 );

    const mountain7 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain7.position.x=-8.4;
    mountain7.position.y=23;
    mountain7.position.z=3.2 ;
    scene.add( mountain7 );

    const mountain8 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain8.position.x=-3;
    mountain8.position.y=23;
    mountain8.position.z=2.9;
    scene.add( mountain8 );

    const mountain9 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain9.position.x=2.7;
    mountain9.position.y=23;
    mountain9.position.z=2.6;
    scene.add( mountain9 );

    const mountain10 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain10.position.x=8.5;
    mountain10.position.y=23;
    mountain10.position.z=2.6;
    scene.add( mountain10);

    const mountain11 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain11.position.x=14.5;
    mountain11.position.y=23;
    mountain11.position.z=2.9;
    scene.add( mountain11 );


    const mountain13 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain13.position.x=27.3;
    mountain13.position.y=23;
    mountain13.position.z=3.2;
    scene.add( mountain13 );

    const mountain14 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain14.position.x=34.5;
    mountain14.position.y=23;
    mountain14.position.z=3.8;
    scene.add( mountain14 );

    const mountain15 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain15.position.x=42.6;
    mountain15.position.y=23;
    mountain15.position.z=4.1;
    scene.add( mountain15 );

    const mountain16 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain16.position.x=51.7;
    mountain16.position.y=23;
    mountain16.position.z=4.4;
    scene.add( mountain16 );



    const mountain18 = new THREE.Mesh( geometryMountain, materialMountain );
    mountain18.position.x=19.6;
    mountain18.position.y=22;
    mountain18.position.z=4.5;
    scene.add( mountain18 );

    // River

    const length = 300, width = 5;

    const shape = new THREE.Shape();
    shape.moveTo( 110,30, -50 );
    shape.lineTo( -102, 5,-10 );
    shape.lineTo(-102 , -5, 5);

    const extrudeSettings = {
        steps: 10,
        depth: 1,
        bevelEnabled: true,
        bevelThickness: 3,
        bevelSize: 1,
        bevelOffset: 5,
        bevelSegments: 5
    };

    const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    const material = new THREE.MeshPhongMaterial( { color: 0x40b7cf } );
    const mesh = new THREE.Mesh( geometry, material ) ;
    mesh.position.z =-25;
    scene.add( mesh );

    // Tree
    // 1st Tree (from right)

    const geometryTreeTrunk = new THREE.CylinderGeometry( 2, 2, 10, 32 );
    const materialTreeTrunk = new THREE.MeshToonMaterial( {color: 0x231709} );

    const treeTrunk1 = new THREE.Mesh( geometryTreeTrunk, materialTreeTrunk );
    treeTrunk1.position.x = 63;
    treeTrunk1.position.y = -15;
    treeTrunk1.position.z = -10;
    scene.add( treeTrunk1 );

    const geometryTreeCone1 = new THREE.ConeGeometry( 8, 25, 32 );
    const materialTreeCone1 = new THREE.MeshToonMaterial( {color: 0x274e13} );

    const cone1 = new THREE.Mesh( geometryTreeCone1, materialTreeCone1 );
    cone1.position.x = 63;
    cone1.position.y = 0;
    cone1.position.z = -10;
    scene.add( cone1 );

    const geometryTreeCone2 = new THREE.ConeGeometry( 6, 20, 32 );
    const cone2 = new THREE.Mesh( geometryTreeCone2, materialTreeCone1 );
    cone2.position.x = 63;
    cone2.position.y = 8;
    cone2.position.z = -10;
    scene.add( cone2 );

    const geometryTreeCone3 = new THREE.ConeGeometry( 4, 15, 32 );
    const cone3 = new THREE.Mesh( geometryTreeCone3, materialTreeCone1 );
    cone3.position.x = 63;
    cone3.position.y = 15;
    cone3.position.z = -10;
    scene.add( cone3 );

    // 2nd Tree (from right)

    const treeTrunk2 = new THREE.Mesh( geometryTreeTrunk, materialTreeTrunk );
    treeTrunk2.position.x = 45;
    treeTrunk2.position.y = -15;
    treeTrunk2.position.z = -15;
    scene.add( treeTrunk2 );

    const cone1a = new THREE.Mesh( geometryTreeCone1, materialTreeCone1 );
    cone1a.position.x = 45;
    cone1a.position.y = 0;
    cone1a.position.z = -15;
    scene.add( cone1a );

    const cone2a = new THREE.Mesh( geometryTreeCone2, materialTreeCone1 );
    cone2a.position.x = 45;
    cone2a.position.y = 8;
    cone2a.position.z = -15;
    scene.add( cone2a );

    const cone3a = new THREE.Mesh( geometryTreeCone3, materialTreeCone1 );
    cone3a.position.x = 45;
    cone3a.position.y = 15;
    cone3a.position.z = -15;
    scene.add( cone3a );

    // 3rd Tree (from right)

    const treeTrunk3 = new THREE.Mesh( geometryTreeTrunk, materialTreeTrunk );
    treeTrunk3.position.x = 29.5;
    treeTrunk3.position.y = -15;
    treeTrunk3.position.z = -20;
    scene.add( treeTrunk3 );

    const cone1b = new THREE.Mesh( geometryTreeCone1, materialTreeCone1 );
    cone1b.position.x = 29.5;
    cone1b.position.y = 0;
    cone1b.position.z = -20;
    scene.add( cone1b );

    const cone2b = new THREE.Mesh( geometryTreeCone2, materialTreeCone1 );
    cone2b.position.x = 29.5;
    cone2b.position.y = 8;
    cone2b.position.z = -20;
    scene.add( cone2b );

    const cone3b = new THREE.Mesh( geometryTreeCone3, materialTreeCone1 );
    cone3b.position.x = 29.5;
    cone3b.position.y = 15;
    cone3b.position.z = -20;
    scene.add( cone3b );

    // Camera Position

    camera.position.z = 33 ;
    camera.position.x = 0 ;
    camera.position.y = 2;

}

// Draw the scene every time the screen is refreshed

function animate() {
        requestAnimationFrame(animate);
        engineFrontCabin.translateX(-1);
        engineRearCabin.translateX(-1);
        chimney.translateX(-1);
        boggy1.translateX(-1);
        boggy2.translateX(-1);
        boggy3.translateX(-1);
        boggy4.translateX(-1);
        boggy5.translateX(-1);
        boggy6.translateX(-1);
        boggy7.translateX(-1);
        boggy8.translateX(-1);
        smoke1.translateX(-0.9);
        smoke1.translateY(-0.2);
        smoke1.translateZ(-0.015);
        smoke1.rotateX(0.15);
        smoke1.rotateY(-0.005);
        smoke1.rotateZ(-0.001);
        smoke2.translateX(-0.9);
        smoke2.translateY(0.2);
        smoke2.translateZ(-0.01);
        smoke2.rotateX(-0.15);
        wheel1.translateX(-1.1);
        wheel2.translateX(-1.1);
        wheel3.translateX(-1.1);
        wheel4.translateX(-1.1);
        wheel5.translateX(-1.1);
        wheel6.translateX(-1.1);
        wheel7.translateX(-1.1);
        wheel8.translateX(-1.1);
        wheel9.translateX(-1.1);
        wheel10.translateX(-1.1);
        wheel11.translateX(-1.1);
        wheel12.translateX(-1.1);
        wheel13.translateX(-1.1);
        engineWindow1.translateX(-1);
        engineWindow2.translateX(-1);
        sun.translateX(-0.5);
        cloud1.translateX(0.6);

        cloud2.translateX(0.7);
      
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