//Setup the global variables
var camera, scene, renderer, geometry, material, mesh;
var texture;
var cubesNum = 10;

var cubes = [];
var speed = [];

function init() {
	// Create a scene
	scene = new THREE.Scene();

	// Create a geometry
	// 	Create a box (cube) of 10 width, length, and height
	geometry = new THREE.BoxGeometry( 10, 10, 10 );

for (var i=0; i<cubesNum; i++){
	var randomValue = Math.random() * 0.5;
	speed.push(randomValue);

	var randomSelection = Math.round(Math.random()*3) + 1;

	// Load a texture
	texture = new THREE.TextureLoader().load( "textures/texture"+randomSelection+".jpg");

	// Create a MeshBasicMaterial with a loaded texture
	material = new THREE.MeshBasicMaterial( { map: texture} );

	// Combine the geometry and material into a mesh
	mesh = new THREE.Mesh( geometry, material );
	// Add the mesh to the scene
mesh.position.y = (Math.random() * -40) -10;
mesh.position.x = (Math.random() * -40) -10;

//mesh.scale.x = (Math.random() * -2) + 1;;
//mesh.scale.y = (Math.random() * -2) + 1;;
//mesh.scale.z = (Math.random() * -2) + 1;;

	scene.add( mesh );
	cubes.push( mesh );
}
	// Create a camera
	// 	Set a Field of View (FOV) of 75 degrees
	// 	Set an Apsect Ratio of the inner width divided by the inner height of the window
	//	Set the 'Near' distance at which the camera will start rendering scene objects to 2
	//	Set the 'Far' (draw distance) at which objects will not be rendered to 1000
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 2, 1000 );
	// Move the camera 'out' by 30
	camera.position.z = 30;

	// Create a WebGL Rendered
	renderer = new THREE.WebGLRenderer();
	// Set the size of the rendered to the inner width and inner height of the window
	renderer.setSize( window.innerWidth, window.innerHeight );

	// Add in the created DOM element to the body of the document
	document.body.appendChild( renderer.domElement );

}
function animate() {
	// Call the requestAnimationFrame function on the animate function
	// 	(thus creating an infinite loop)
	requestAnimationFrame( animate );

for (var i=0; i<cubesNum; i++){
	cubes[i].rotation.x += 0.002;
	cubes[i].rotation.y += 0.001;
	cubes[i].rotation.z -= speed[i];

if (cubes[i].position.y<-30){
	cubes[i].position.y = 10;
	cubes[i].position.x = (Math.random() * -20) +10;
	cubes[i].scale.x = (Math.random() * -2) + 1;
	cubes[i].scale.y = (Math.random() * -2) + 1;
	cubes[i].scale.z = (Math.random() * -2) + 1;

 }
}
	// Rotate the x position of the mesh by 0.03
	//mesh.rotation.x += 0.02;
	//mesh.rotation.y += 0.01;
//	mesh.position.y -= 0.2;
//	if (mesh.position.y <- 30){
//		mesh.position.y = 35;
//		mesh.position.x = (Math.random() * -20) +10;
//	}

	// Render everything using the created renderer, scene, and camera
	renderer.render( scene, camera );
}

init();
animate();
