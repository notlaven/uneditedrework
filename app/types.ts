import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      grainShaderMaterial: any;
    }
  }
}

export interface AnimatedShapeProps {
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  color: THREE.Color;
  index: number;
}