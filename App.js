import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';

var renderizador, camara, escena , controls;

function crearEscena() {
    escena = new THREE.Scene();
}
function crearCamara() {
    camara = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    controls = new OrbitControls(camara, renderizador.domElement);
    camara.name = "camara";
    camara.position.set(0, 10, 100);
    controls.update();
    controls.autoRotate = true;
}

function crearDona(){
    var torusGeometria = new THREE.TorusGeometry(20, 5 ,100,100);
    var torusMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00});
    var torus = new THREE.Mesh(torusGeometria,torusMaterial);
    torus.name = "torus";
    escena.add(torus);
    }

 function esfera(){
const geometry = new THREE.SphereGeometry( 5, 32, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const sphere = new THREE.Mesh( geometry, material );
escena.add( sphere );
 }

 function esfera1(){
    const geometry1 = new THREE.SphereGeometry( 8, 32,32 );
    const material1 = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    const sphere1 = new THREE.Mesh( geometry1, material1 );
    sphere1.position.x=15;
    sphere1.position.y=23;
    escena.add( sphere1 );
     }

     function esfera2(){
        const geometry2 = new THREE.SphereGeometry( 8, 32,32 );
        const material2 = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        const sphere2 = new THREE.Mesh( geometry2, material2 );
        sphere2.position.x=-15;
        sphere2.position.y=23;
        escena.add( sphere2 );
         }
         function esfera3(){
            const geometry3 = new THREE.SphereGeometry( 3, 32,32 );
            const material3 = new THREE.MeshBasicMaterial( {color: 0x000000} );
            const sphere3 = new THREE.Mesh( geometry3, material3 );
            sphere3.position.x=-10;
            sphere3.position.y=20;
            sphere3.position.z=5;
            escena.add( sphere3 );
             }

             function esfera4(){
                const geometry4 = new THREE.SphereGeometry( 3, 32,32 );
                const material4 = new THREE.MeshBasicMaterial( {color: 0x000000} );
                const sphere4 = new THREE.Mesh( geometry4, material4 );
                sphere4.position.x=10;
                sphere4.position.y=20;
                sphere4.position.z=5;
                escena.add( sphere4 );
                 }
                
function crearRenderizador() {
    renderizador = new THREE.WebGLRenderer({ antialias: true });
    renderizador.setSize(window.innerWidth, window.innerHeight);
    renderizador.setClearColor(0x000000);
    document.body.appendChild(renderizador.domElement)
}

function render() {
    renderizador.render(escena, camara);
    requestAnimationFrame(render);
}


function init()
{
   crearEscena();
   crearRenderizador();
   crearCamara();
   crearDona();
   esfera();
   esfera1();
   esfera2();
   esfera3();
   esfera4();
   render();
  

}

init();