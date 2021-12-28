let camera, scene, renderer, cube,cylinder;
function init() {	
	scene = new THREE.Scene();
    scene.background = new THREE.Color('black');
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
    );
    
     //camera.position.set(3,5,-9);
     scene.add(camera);
	// Init renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });
	// Set size (whole window)
	renderer.setSize(window.innerWidth, window.innerHeight);
	// Render to canvas element
    document.body.appendChild(renderer.domElement);
    //Station
    const geometry_stn = new THREE.BoxGeometry(25,13,15);
    const materi_stn = new THREE.MeshLambertMaterial({ color: 'brown' });
	cub_stn = new THREE.Mesh(geometry_stn, materi_stn);
    cub_stn.position.x=0;
    cub_stn.position.y=-8;
    cub_stn.position.z=-11.5;
    scene.add(cub_stn);

    const geometry_stnf = new THREE.BoxGeometry(17,1,17);
    const materi_stnf = new THREE.MeshLambertMaterial({ color: 'yellow' });
	cub_stnf = new THREE.Mesh(geometry_stnf, materi_stnf);
    cub_stnf.position.x=0;
    cub_stnf.position.y=-3;
    cub_stnf.position.z=-6.5;
    scene.add(cub_stnf);

    

    const geometry_stnfpl = new THREE.CylinderGeometry( 0.5, 0.5, 9, 50 );
    const materi_stnfpl = new THREE.MeshLambertMaterial({ color: 'yellow' });
	cub_stnfpl = new THREE.Mesh(geometry_stnfpl, materi_stnfpl);
    cub_stnfpl.position.x=-9;
    cub_stnfpl.position.y=-9;
    cub_stnfpl.position.z=-3.5;
    scene.add(cub_stnfpl);

    const geometry_stnfpr = new THREE.CylinderGeometry( 0.5, 0.5, 9, 50 );
    const materi_stnfpr = new THREE.MeshLambertMaterial({ color: 'yellow' });
	cub_stnfpr = new THREE.Mesh(geometry_stnfpr, materi_stnfpr);
    cub_stnfpr.position.x=9;
    cub_stnfpr.position.y=-9;
    cub_stnfpr.position.z=-3.5;
    scene.add(cub_stnfpr)

    

    var texture = new THREE.TextureLoader().load("stt.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 4, 4);

    const geom_stn = new THREE.BoxGeometry(15,9,10);
    const mat_stn = new THREE.MeshLambertMaterial({ color: 'brown' });
	cub_stnl = new THREE.Mesh(geom_stn, mat_stn);
    cub_stnl.position.x=-11.5;
    cub_stnl.position.y=-8;
    cub_stnl.position.z=-9.5;
    scene.add(cub_stnl);

    var geometry_dl = new THREE.PlaneGeometry( 2.5, 4, 2.5 );
    var material_dl = new THREE.MeshLambertMaterial( {color: 0xffff00} );
    var plane = new THREE.Mesh( geometry_dl, material_dl );
    plane.position.x=-14.5;
    plane.position.y=-9;
    plane.position.z=-3.5;
    scene.add( plane );

    const geomet_stn = new THREE.BoxGeometry(15,9,10);
    const mate_stn = new THREE.MeshLambertMaterial({ color: 'brown' });
	cub_stnr = new THREE.Mesh(geomet_stn, mate_stn);
    cub_stnr.position.x=11.5;
    cub_stnr.position.y=-8;
    cub_stnr.position.z=-9.5;
    scene.add(cub_stnr);
    
    var geometry_dr = new THREE.PlaneGeometry( 2.5, 4, 2.5 );
    var material_dr = new THREE.MeshLambertMaterial( {color: 0xffff00} );
    var plane = new THREE.Mesh( geometry_dr, material_dr );
    plane.position.x=14.5;
    plane.position.y=-9;
    plane.position.z=-3.5;
    scene.add( plane );



	// Engine 1st cabin
    const geometr = new THREE.BoxGeometry(10,4,5);
    const materi = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    cub = new THREE.Mesh(geometr, materi);
    cub.position.x=0;
    cub.position.y=-11.5;
    scene.add(cub);
    

  
    // Engine rear cabin
	const geomet = new THREE.BoxGeometry(5,7,5);
    const mater = new THREE.MeshLambertMaterial({ color: 0xffffff });
	cu = new THREE.Mesh(geomet, mater);
    cu.position.x=7;
    cu.position.y=-10;
    scene.add(cu);
    // Head Light
     var color_light = 0xFFFFFF;
     var intensity_light = 1;
     headlight = new THREE.PointLight(color_light, intensity_light, 5000);
     headlight.castShadow = true;
     headlight.position.set(-6, -11, 0);
     scene.add(headlight);
     helper = new THREE.PointLightHelper(headlight);
     scene.add(helper);
     function updateLight() {
         helper.update();
     }
    // Chimney
    var shpe = new THREE.CylinderGeometry( 1,1,4, 6 );
    const materia = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
    cylinder = new THREE.Mesh( shpe, materia );
    cylinder.position.x=-2;
    cylinder.position.y=-8;
    scene.add(cylinder);
    //  Boggy # 1
    var geometry = new THREE.BoxGeometry(5,4,5);
    const material = new THREE.MeshLambertMaterial({ color: 0x590e667 });
	cube = new THREE.Mesh(geometry, material);
    cube.position.x=12;
    cube.position.y=-11.5;
    scene.add(cube);
    //  Boggy # 2
    var geome= new THREE.BoxGeometry(5,4,5);
    const mate = new THREE.MeshLambertMaterial({ color: 0xf3294b });
	c = new THREE.Mesh(geome, mate);
    c.position.x=17;
    c.position.y=-11.5;
    scene.add(c);
    //  Boggy # 3
    var geo_bogg_3= new THREE.BoxGeometry(5,4,5);
    const mate_bogg_3 = new THREE.MeshLambertMaterial({ color: 0xfd5f00 });
	cube_bogg_3 = new THREE.Mesh(geo_bogg_3, mate_bogg_3);
    cube_bogg_3.position.x=22;
    cube_bogg_3.position.y=-11.5;
    scene.add(cube_bogg_3);
	//  Boggy # 4
    var geo_bogg_4= new THREE.BoxGeometry(5,4,5);
    const mate_bogg_4 = new THREE.MeshLambertMaterial({ color: 0x20b2aa});
	cube_bogg_4 = new THREE.Mesh(geo_bogg_4, mate_bogg_4);
    cube_bogg_4.position.x=27;
    cube_bogg_4.position.y=-11.5;
    scene.add(cube_bogg_4);
    //  Boggy # 5
    var geo_bogg_5= new THREE.BoxGeometry(5,4,5);
    const mate_bogg_5 = new THREE.MeshLambertMaterial({ color: 0xff618c });
	cube_bogg_5 = new THREE.Mesh(geo_bogg_5, mate_bogg_5);
    cube_bogg_5.position.x=32;
    cube_bogg_5.position.y=-11.5;
    scene.add(cube_bogg_5);
    //  Boggy # 6
    var geo_bogg_6= new THREE.BoxGeometry(5,4,5);
    const mate_bogg_6 = new THREE.MeshLambertMaterial({ color: 0xbada55 });
	cube_bogg_6 = new THREE.Mesh(geo_bogg_6, mate_bogg_6);
    cube_bogg_6.position.x=37;
    cube_bogg_6.position.y=-11.5;
    scene.add(cube_bogg_6);
    //  Full Moon
    var geometry_moon = new THREE.SphereGeometry( 4, 30 ,30 );
    var material_moon = new THREE.MeshLambertMaterial( { color: 0xffea6b } );
    var circle_moon = new THREE.Mesh( geometry_moon, material_moon);
    circle_moon.position.x=7;
    circle_moon.position.y=15;
    scene.add( circle_moon );
    // // Light of Moon
   var light = new THREE.HemisphereLight( 0xffffbb, 0x080820,0.4 );
   light.position.set(0,20,0);
  scene.add( light );
   //var light = new THREE.AmbientLight( 0xffffff,0.5 ); // soft white light
   //scene.add( light);
    
   

   var light = new THREE.DirectionalLight(0xffffff, 0.7,999 );
   light.target=cube;
   scene.add( light );
   
   
    
    //  Clouds
    // Cloud_1_right
    var x = 0, y = 0;
    var cloudShape = new THREE.Shape();
    cloudShape.moveTo( x+5, y+5);
    cloudShape.bezierCurveTo( x + 2.2, y+3.6, x+2.2,y+2.7,x+3.1,y+2.7 );
    cloudShape.bezierCurveTo( x + 4.2, y+2.6, x+5.1,y+2.6,x+6,y+3.5 );
    cloudShape.bezierCurveTo( x + 6.3, y+4.5, x+5.6,y+5.5,x+4.7,y+5.5 );
    cloudShape.bezierCurveTo( x + 3.3, y+5.3, x+4.2,y+2.7,x+1.85,y+3.0 );
    var geometry_cloud = new THREE.ShapeGeometry( cloudShape );
    var material_cloud = new THREE.MeshLambertMaterial( { color: 0xe4e9eb } );
    var mesh_cloud = new THREE.Mesh( geometry_cloud, material_cloud ) ;
    mesh_cloud.position.x=7.7;
    mesh_cloud.position.y=8;
    scene.add( mesh_cloud );
    // Cloud_2_left
    var x1 = 0, y1 = 0;
    var cloudShape_left = new THREE.Shape(); 
    cloudShape_left.moveTo( x1+5, y1+5); 
    cloudShape_left.bezierCurveTo( x1 + 2.2, y1+3.6, x1+2.2,y1+2.7,x1+3.1,y1+2.7 );
    cloudShape_left.bezierCurveTo( x1 + 4.2, y1+2.6, x1+5.1,y1+2.6,x1+6,y1+3.5 );
    cloudShape_left.bezierCurveTo( x1 + 6.3, y1+4.5, x1+5.6,y1+5.5,x1+4.7,y1+5.5 );
    cloudShape_left.bezierCurveTo( x1 + 3.3, y1+5.3, x1+4.2,y1+2.7,x1+1.85,y1+3.0 );
    cloudShape_left.bezierCurveTo( x1 + 6.7, y1+5.5, x1+5.9,y1+5.8,x1+4.9,y1+5.8 );
    cloudShape_left.bezierCurveTo( x1 + 3.9, y1+5.8, x1+4.7,y1+2.9,x1+1.97,y1+3.8 );
    var geometry_left_cloud= new THREE.ShapeGeometry(cloudShape_left);
    var mesh_cloud_left= new THREE.Mesh(geometry_left_cloud, material_cloud);
    mesh_cloud_left.position.x=-2.9;
    mesh_cloud_left.position.y=11;
    scene.add( mesh_cloud_left );
    //  Smoke
    var x1 = 0, y1 = 0;
    var smokeShape = new THREE.Shape();
    smokeShape.moveTo( x1+2 , y1+2 );
    smokeShape.bezierCurveTo( x1 + 3.5, y1 + 3.5, x1+4,y1,x1,y1 );
    var geometry_smoke = new THREE.ShapeGeometry( smokeShape );
    var material_smoke = new THREE.MeshLambertMaterial( { color: 0x89b6cf } );
    mesh_smoke = new THREE.Mesh( geometry_smoke, material_smoke ) ;
    mesh_smoke.position.x=-2;
    mesh_smoke.position.y=-5;
    mesh_smoke.position.z=4;
    scene.add( mesh_smoke );
    var x2 = 0, y2 = 0;
    var smokeShape1 = new THREE.Shape();
    smokeShape1.moveTo( x2+2 , y2+2 );
    smokeShape1.bezierCurveTo( x2 + 3.5, y2 + 3.5, x2+4,y2,x2,y2 );
    var geometry_smoke1 = new THREE.ShapeGeometry( smokeShape1 );
    var material_smoke1 = new THREE.MeshLambertMaterial( { color: 0x89b6cf } );
    mesh_smoke1 = new THREE.Mesh( geometry_smoke1, material_smoke1 ) ;
    mesh_smoke1.position.x=3;
    mesh_smoke1.position.y=-2;
    scene.add( mesh_smoke1 );
    //  Wheel
    var geometry_wheel_1 = new THREE.CircleGeometry( 1, 15 );
    var material_wheel_1 = new THREE.MeshLambertMaterial( {color: 0x6897bb} );
    wheel_1 = new THREE.Mesh( geometry_wheel_1, material_wheel_1 );
    wheel_1.position.x=-3.5;
    wheel_1.position.y=-15.2;
    scene.add(wheel_1);
    var material_wheel_2 = new THREE.MeshLambertMaterial( {color: 0x755e48} );
    wheel_2 = new THREE.Mesh( geometry_wheel_1, material_wheel_2 );
    wheel_2.position.x= -3;
    wheel_2.position.y=-15.2;
    scene.add( wheel_2 );
    wheel_3 = new THREE.Mesh( geometry_wheel_1, material_wheel_1 );
    wheel_3.position.x=6;
    wheel_3.position.y=-15.2;
    scene.add(wheel_3);
    wheel_4 = new THREE.Mesh( geometry_wheel_1, material_wheel_2 );
    wheel_4.position.x= 7;
    wheel_4.position.y=-15.2;
    scene.add( wheel_4 );
    wheel_5=new THREE.Mesh(geometry_wheel_1,material_wheel_2);
    wheel_5.position.x=9;
    wheel_5.position.y=-15.2;
    scene.add(wheel_5); 
    wheel_6=new THREE.Mesh(geometry_wheel_1,material_wheel_2);
    wheel_6.position.x=13;
    wheel_6.position.y=-15.2;
    scene.add(wheel_6); 
    wheel_7=new THREE.Mesh(geometry_wheel_1,material_wheel_2);
    wheel_7.position.x=18;
    wheel_7.position.y=-15.2;
    scene.add(wheel_7); 
    wheel_8=new THREE.Mesh(geometry_wheel_1,material_wheel_2);
    wheel_8.position.x=23;
    wheel_8.position.y=-15.2;
    scene.add(wheel_8); 
    wheel_9=new THREE.Mesh(geometry_wheel_1,material_wheel_2);
    wheel_9.position.x=28;
    wheel_9.position.y=-15.2;
    scene.add(wheel_9);
    wheel_10=new THREE.Mesh(geometry_wheel_1,material_wheel_2);
    wheel_10.position.x=32;
    wheel_10.position.y=-15.2;
    scene.add(wheel_10); 
    wheel_11=new THREE.Mesh(geometry_wheel_1,material_wheel_2);
    wheel_11.position.x=37;
    wheel_11.position.y=-15.2;
    scene.add(wheel_11); 
    //  Track 
    //  
    camera.position.z = 33 ; 
    camera.position.x = 0 ;
    camera.position.y = 3;
	// 
}
// Draw the scene every time the screen is refreshed
function animate() {
    requestAnimationFrame(animate);
        cub.translateX(-0.35);
        cu.translateX(-0.35);
        headlight.translateX(-4);
        helper.translateX(-4);
        cylinder.translateX(-0.35);
        cube.translateX(-0.35);
        c.translateX(-0.35);
        cube_bogg_3.translateX(-0.35);
        cube_bogg_4.translateX(-0.35);
        cube_bogg_5.translateX(-0.35);
        cube_bogg_6.translateX(-0.35);
        mesh_smoke.translateX(-0.15);
        mesh_smoke.translateY(0.1);
        mesh_smoke.translateZ(-0.15);
        mesh_smoke1.translateX(-0.15);
        mesh_smoke1.translateY(0.1);
        mesh_smoke1.translateZ(-0.15);
        wheel_1.translateX(-0.35);
        wheel_2.translateX(-0.35);
        wheel_3.translateX(-0.35);
        wheel_4.translateX(-0.35);
        wheel_5.translateX(-0.35);
        wheel_6.translateX(-0.35);
        wheel_7.translateX(-0.35);
        wheel_8.translateX(-0.35);
        wheel_9.translateX(-0.35);
        wheel_10.translateX(-0.35);
        wheel_11.translateX(-0.35);


      
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