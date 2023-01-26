import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#F2CEA0",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.2,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 10);
};

export default function home() {
  return (
    <div className="w-screen h-screen bg-[#191D1F] flex justify-center items-center">
      <ParticleImage
        height={720}
        src={"/logo.png"}
        scale={0.4}
        entropy={30}
        maxParticles={8000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor="#191D1F"
      />
    </div>
  );
}
