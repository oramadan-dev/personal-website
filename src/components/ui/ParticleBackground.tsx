import { RefObject, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { Position } from "../../types/Position";

export interface ParticleBackgroundProps {
    scrollRef: RefObject<HTMLDivElement | null>;
}

interface Particle {
    x: number,
    y: number,

    homeX: number,
    homeY: number,

    vx: number,
    vy: number

    radius: number;
}

export default function ParticleBackground({
  scrollRef,
}: ParticleBackgroundProps) {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Update canvas width based on window size
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // Update mouse position
        const mouse: Position = { x: 0, y: 0 }
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        // Initial logic to create particles
        const particles: Particle[] = [];
        const safeZone = {
            left: canvas.width * 0.3,
            right: canvas.width * 0.7,
            top: canvas.height * 0.25,
            bottom: canvas.height * 0.65,
        };
        const createParticles = () => {
            particles.length = 0;

            for (let i = 0; i < 2000; i++) {
                let x, y;

                do {
                    x = Math.random() * 7860;
                    y = Math.random() * 4320;
                } while (
                    x > safeZone.left &&
                    x < safeZone.right &&
                    y > safeZone.top &&
                    y < safeZone.bottom
                );

                particles.push({
                    x,
                    y,
                    homeX: x,
                    homeY: y,
                    vx: 0,
                    vy: 0,
                    radius: Math.random() * 2 + 1
                })
            }
        }

        // Frame drawing logic
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#ffffff";

            for (const particle of particles) {
                // Only draw particles in current canvas
                if (
                    particle.x + particle.radius < 0 ||
                    particle.x - particle.radius > canvas.width ||
                    particle.y + particle.radius < 0 ||
                    particle.y - particle.radius > canvas.height
                ) {
                    continue;
                }

                ctx.beginPath();
                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.radius,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }
        };

        const springStrength = 0.001;
        const friction = 0.925;
        const forceMultiplier = 1.2;
        const updateParticles = () => {
            for (const particle of particles) {
                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;

                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    const unitX = dx / distance;
                    const unitY = dy / distance;

                    const force = (150 - distance) / 150;

                    particle.vx += unitX * force * forceMultiplier;
                    particle.vy += unitY * force * forceMultiplier;
                }

                // Attempt to spring towards home particle
                particle.vx += (particle.homeX - particle.x) * springStrength;
                particle.vy += (particle.homeY - particle.y) * springStrength;

                // Apply some friction to slow velocity over time
                particle.vx *= friction;
                particle.vy *= friction;

                // Move particle based on velocity
                particle.x += particle.vx;
                particle.y += particle.vy;

            }
        }

        let animationId: number;
        const animate = () => {
            updateParticles();
            draw();

            animationId = requestAnimationFrame(animate);
        };

        // Draw on initial mount and add resize handler
        handleResize();
        createParticles()
        animate();

        window.addEventListener('resize', handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [scrollRef]);

    return (
        <Box
            component="canvas"
            ref={canvasRef}
            sx={{
                position: "fixed",
                inset: 0,
                width: "100%",
                height: "100%",

                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}