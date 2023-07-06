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
      <Canvas style={{ background: "black", zIndex: 1 }}>
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Blue />
        <OrbitControls />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          color: "#fff",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100vh",

          padding: "4rem",
        }}
      >
        <span
          style={{
            width: "30%",
            display: "flex",
            alignItems: "center",
            fontSize: "1.5rem",
            zIndex: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam
          debitis ad eos atque, sint harum architecto sed tempore consectetur
          ipsa reiciendis sit recusandae dicta cum esse illum sapiente numquam.
        </span>
      </div>
    </div>
  );
}

export default App;
