# 3D Model Viewer

A Three.js-based 3D model viewer with orbit controls and dynamic lighting.

## Features

- Black background scene
- Orbit controls for rotating, zooming, and panning
- Dynamic lighting with shadows
- Responsive design
- Automatic model centering
- Support for GLB file format

## Setup

1. Install dependencies:
```bash
npm install
```

2. Place your .glb model file in either the `Pbr` or `Shadow` folder and name it `model.glb`

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

## Controls

- Left mouse button: Rotate the view
- Right mouse button: Pan the view
- Mouse wheel: Zoom in/out

## Technical Details

The viewer uses the following technologies:
- Three.js for 3D rendering
- OrbitControls for camera manipulation
- GLTFLoader for loading 3D models
- Vite as the development server and build tool 