var renderer, scene, camera;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 2000, 0);
  //spotLight.castShadow = true;
  scene.add(spotLight);

  var amLight = new THREE.AmbientLight(0xFFFFFF);
  amLight.position.set(0, 1000, 0);
  ambLight.add(spotLight);
  scene.add(amLight);


  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <= 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -10; y <= 10; y += 5) {
      for (var z = -10; y <= 10; y += 5) {

      //Concatenation of the x and y values (open Console to see)
      console.log("X: " +x+ ", Y: " +y+ ", Z: " +z);

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});

      if (        x >= 0 &&   y >= 0 &&   z >= 0){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
      } else if ( x >= 0 &&   y >= 0 &&   z >= 0){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000});
      } else if ( x >= 0 &&   y >= 0 &&   z >= 0){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF0F0F0});
      } else if ( x >= 0 &&   y >= 0 &&   z >= 0){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
      } else if ( x >= 0 &&   y >= 0 &&   z >= 0){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
      } else if ( x >= 0 &&   y >= 0 &&   z >= 0){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
      } else if ( x >= 0 &&   y >= 0 &&   z >= 0){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
      } else {
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
      }

        var mesh2 = new THREE.Mesh(boxGeometry, boxMaterial);
        mesh.castShadow = true;
        mesh2.position.x = x;
        mesh2.position.z = 6;
        mesh2.scale.y = 0.5;
        scene.add(mesh);
        cubes.push(mesh);
      }
    }
  }

  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);

  rot += 0.01;

  //forEach takes all the array entries and passes the c as the object,and i as
  cubes.forEach(function(c, i)  {
      c.rotation.x = rot; //Rotate that is referenced in c
  });


  renderer.render(scene, camera);
}

init();
drawFrame();
