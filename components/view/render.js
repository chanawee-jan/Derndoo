import React, { useRef, useState, Suspense } from "react";
import {
  Canvas,
  extend,
  useThree,
  useFrame,
  useLoader,
  Dom,
} from "react-three-fiber";
import * as THREE from "three";
import ThreeOrbit from "three-orbit-controls";
import { VRButton } from "./webvr";
//import {VRCanvas, DefaultXRControllers } from "react-xr";

const OrbitControls = ThreeOrbit(THREE);

import image1 from "../../pics/npm1/npm1_r.jpg";
import image2 from "../../pics/npm1/npm1_l.jpg";
import image3 from "../../pics/npm1/npm1_u.jpg";
import image4 from "../../pics/npm1/npm1_d.jpg";
import image5 from "../../pics/npm1/npm1_f.jpg";
import image6 from "../../pics/npm1/npm1_b.jpg";
import hotspot from "../../pics/icon/hotspot.png";
import floor from "../../pics/icon/dot.png";

extend({ OrbitControls });


const Controls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      enableDamping={true}
      rotateSpeed={-0.2}
    />
  );
};

function SkyBox() {
  const { scene } = useThree();
  const loader = new THREE.CubeTextureLoader();
  const texture = loader.load([image1, image2, image3, image4, image5, image6]);
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

function HotSpot({ url, ...props }) {
  const sprite = useRef();
  const [spriteactive, setSpriteactive] = useState(false);
  const texture = useLoader(THREE.TextureLoader, url);
  return (
    <sprite
      {...props}
      ref={sprite}
      scale={spriteactive ? [1, 1, 1] : [0.5, 0.5, 0.5]}
      onClick={(e) => setSpriteactive(!spriteactive)}
      onPointerOver={(e) => setSpriteactive(true)}
    >
      <spriteMaterial attach="material" map={texture} />
    </sprite>
  );
}

function Floor({ url, ...props }){
    const mesh = useRef();
    const texture = useLoader(THREE.TextureLoader, url);
    return(
        <mesh>
            <planeGeometry attach="geometry" args={[1, 1]}/>
            <meshBasicMaterial attach="material" map={texture} opacity={1} side={THREE.DoubleSide} transparent={true}/>
        </mesh>
    )
}

function App() {
  return (
    <div className="canvas-three">
      <Canvas
        vr
        camera={{ fov: 90, position: [0, 0, -0.01] }}
        resize={{ scroll: false }}
        onCreated={({ gl }) =>
          document.body.appendChild(VRButton.createButton(gl))
        }
      >
        <ambientLight />
        <Controls />
        <SkyBox />
        <Suspense fallback={<Dom>loading...</Dom>}>
          <HotSpot url={hotspot} position={[0.2, -2, 4]} />
          
        </Suspense>
        
      </Canvas>
    </div>
  );
}

export default App;
