//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

    var W = window.innerWidth,
        H = window.innerHeight;

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;
  scene.add(camera);

  solidObject = new THREE.Object3D();
  frameObject = new THREE.Object3D();

  scene.add(solidObject);
  scene.add(frameObject);

  //var particlesGeometry = new THREE.TetrahedronGeometry(0, 0);
  var solidGeometry = new THREE.SphereGeometry(7, 7);
  var frameGeometry = new THREE.SphereGeometry(14, 14);

  var solidMaterial = new THREE.MeshPhongMaterial({
    color: 0xFF9966,
    shading: THREE.Stereoscopic
  });

  var solidMesh = new THREE.Mesh(solidGeometry, solidMaterial);
  solidMesh.scale.x = solidMesh.scale.y = solidMesh.scale.z = 16;
  solidObject.add(solidMesh);

  var frameMaterial = new THREE.MeshPhongMaterial({
    color: 0x336666,
    wireframe: true,
    side: THREE.DoubleSide
  });

  var frameMesh = new THREE.Mesh(frameGeometry, frameMaterial);
  frameMesh.scale.x = frameMesh.scale.y = frameMesh.scale.z = 10;
  frameObject.add(frameMesh);

  var ambientLight = new THREE.AmbientLight(0xFFC0CB );
  scene.add(ambientLight);

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#FF20FF");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  var material = new THREE.MeshPhongMaterial();

  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.SphereGeometry(50,50,50);
  material = new THREE.MeshPhongMaterial( { color: "#FF9966" } );
  mesh = new THREE.Mesh( geometry, material );

  // Add mesh to scene
  scene.add( mesh );

};
// Render Loop
var render = function () {
  requestAnimationFrame( render );

  //mesh.rotation.x += 0.5; //Continuously rotate the mesh
  //mesh.rotation.y += 0.5;
  solidObject.rotation.x -= 0.03;
  solidObject.rotation.y -= 0.03;
  frameObject.rotation.x -= 0.01;
  frameObject.rotation.y += 0.01;

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
