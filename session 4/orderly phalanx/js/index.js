var renderer, scene, camera;
var controls;
var cubes=[];
var rot=0;
function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(50, 25, 55);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFF00);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0xFFC0CB);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  //controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -5; x <= 20; x += 5) { // Start from -45 and sequentially add one every 5 pixels
  for (var y = -5; y <= 20; y += 5) {
  for (var z = -5; z <= 20; z += 5) {

  //console.log("x:" +x);
  //Concatennation of the x and y values(open Console to see)
    console.log("X:"+x+",Y:"+y+",Z:"+z);

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      if (x>=0 && z>=0&& y>=0){
          boxMaterial = new THREE.MeshLambertMaterial({color: 0x99cc99});
        } else if (x<=0 && y>=0 && z>=0){
          boxMaterial = new THREE.MeshLambertMaterial({color: "#336666"});
        } else if(x>=0 && y<=0&& z>=0){
          boxMaterial = new THREE.MeshLambertMaterial({color: 0xccff99});
        } else if(x<=0 && y<=0&& z>=0){
          boxMaterial = new THREE.MeshLambertMaterial({color: "#ff9966"});
        }else if(x>=0 && y>=0&& z<=0){
          boxMaterial = new THREE.MeshLambertMaterial({color: "#996600"});
        }else if(x<=0 && y>=0&& z<=0){
          boxMaterial = new THREE.MeshLambertMaterial({color: "#ff9933"});
        }else if(x>=0 && y<=0&& z<=0){
          boxMaterial = new THREE.MeshLambertMaterial({color: "#0099cc"});
        } else{
            boxMaterial = new THREE.MeshLambertMaterial({color: "0000cc"});
        }
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;

      mesh.position.x = x;
      mesh.position.y = y;
      mesh.position.z = z;

      scene.add(mesh);
      cubes.push(mesh);
  }
    }
  }
  console.log(cubes);
  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);
  rot+=0.01;
  cubes.forEach(function(c,i){
    c.rotation.x=rot;
    c.rotation.y=rot;

  });
  renderer.render(scene, camera);
}

init();
drawFrame();
