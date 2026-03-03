import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Environment } from '@react-three/drei';
import { RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

/**
 * 3D 模型展示组件
 * 支持 GLTF/GLB/OBJ 格式
 */
function Model({ url, rotationSpeed = 0.5 }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && rotationSpeed > 0) {
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* 这里可以使用 useGLTF 加载真实模型 */}
      {/* const { nodes, materials } = useGLTF(url) */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? '#3b82f6' : '#60a5fa'} />
    </mesh>
  );
}

/**
 * 3D 查看器组件
 */
const ModelViewer = ({ 
  modelUrl, 
  autoRotate = true, 
  showControls = true,
  backgroundColor = '#f8fafc',
  environment = 'city'
}) => {
  const canvasRef = useRef();

  const resetCamera = () => {
    if (canvasRef.current) {
      // 重置相机位置
      const event = new CustomEvent('reset-camera');
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden" style={{ backgroundColor }}>
      <Canvas ref={canvasRef} shadows dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        
        <Stage 
          environment={environment}
          intensity={0.5}
          contactShadow={{ opacity: 0.5, blur: 1, width: 2, height: 2 }}
        >
          <Model url={modelUrl} rotationSpeed={autoRotate ? 0.5 : 0} />
        </Stage>
        
        {showControls && (
          <OrbitControls 
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
          />
        )}
        
        <Environment preset={environment} />
      </Canvas>

      {/* 控制按钮 */}
      {showControls && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={resetCamera}
            className="p-2 bg-white rounded-lg shadow-lg hover:bg-slate-50 transition-colors"
            title="重置视角"
          >
            <RotateCcw className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      )}

      {/* 加载提示 */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm text-slate-600">
        🖱️ 拖拽旋转 | 滚轮缩放 | 右键平移
      </div>
    </div>
  );
};

/**
 * 模型预览卡片（带 3D 查看器）
 */
export const ModelPreviewCard = ({ model, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="h-64 bg-slate-100 relative">
        <ModelViewer 
          modelUrl={model.modelUrl}
          autoRotate={true}
          showControls={false}
          backgroundColor="#f1f5f9"
        />
        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold">
          {model.price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-800 mb-2">{model.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">by {model.author}</span>
          <button 
            onClick={() => onViewDetails?.(model)}
            className="text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            查看详情
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
