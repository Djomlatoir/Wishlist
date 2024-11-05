import { Component, AfterViewInit, ElementRef, ViewChild, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as THREE from 'three';
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Import FooterComponent


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: Window, useValue: window }]
})
export class AppComponent implements AfterViewInit {
  title = '3Dmodel';
  
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  constructor(private window: Window) {}

  ngAfterViewInit(): void {
    const width = this.canvasContainer.nativeElement.clientWidth;
    const height = this.canvasContainer.nativeElement.clientHeight;

    // init
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 10);
    camera.position.z = 1;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    
    
    const loader = new GLTFLoader();
    
   

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);
    renderer.setClearColor(0x1c1c1c, 1); // Ova linija postavlja pozadinsku boju renderer-a
    scene.background = new THREE.Color(0x1c1c1c); // Ova linija postavlja pozadinsku boju scene

    
    
    // Append the renderer to the canvasContainer
    this.canvasContainer.nativeElement.appendChild(renderer.domElement);

    // animation
    function animate(time: number) {
      mesh.rotation.x = time / 20000;
      mesh.rotation.y = time / 10000;
      renderer.render(scene, camera);
    }
  }
}
