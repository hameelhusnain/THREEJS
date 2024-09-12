import * as THREE from 'three';

//1. Create the scene 
const scene = new THREE.scene();
scene.background = new THREE.color('#F0F0F0')

// 2. Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5;


// 3. Create & add a cude object


// 4. Add lighting 

// 5. Setup the renderer

// 6. Animate the scene
