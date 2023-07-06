import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Blue from "./components/Blue";

function App() {
  return (
    <div
      className='canvas-container'
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas style={{ background: "black" }}>
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Blue />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
