import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const LiveWallpaper = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="relative w-full h-screen bg-black flex items-center justify-center text-green-400">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: "#000000" },
                    particles: {
                        number: { value: 200 },
                        color: { value: "#00ff00" },
                        shape: { type: "circle" },
                        opacity: { value: 0.7 },
                        size: { value: 1.5 },
                        move: { speed: 2, direction: "bottom", random: false, straight: true },
                    },
                    interactivity: {
                        events: { onHover: { enable: false }, onClick: { enable: false } },
                    },
                }}
                className="absolute top-0 left-0 w-full h-full -z-10"
            />
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Hacker Rain Effect</h1>
                <p className="text-lg">A futuristic green rain effect inspired by the Matrix.</p>
            </div>
        </div>
    );
};

export default LiveWallpaper;
