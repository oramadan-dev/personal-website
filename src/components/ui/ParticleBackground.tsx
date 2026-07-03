import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { Position } from "../../types/Position";
import { useScrollRef } from "../../context/ScrollContext";

interface Particle {
    x: number,
    y: number,

    homeX: number,
    homeY: number,

    vx: number,
    vy: number

    radius: number;

    opacity: number
    vOpacity: number;
}

export default function ParticleBackground() {

    const scrollRef = useScrollRef();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Particle Generation
    const boardWidth = 7860;
    const boardHeight = 4320;
    const numParticles = 2000;
    const numSafeParticles = 15;

    // Particle Sparkle
    const opacityRate = 0.0035;

    // Particle Movement
    const movementThreshold = 150;
    const springStrength = 0.001;
    const friction = 0.925;
    const forceMultiplier = 1.2;

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
            mouse.y = e.clientY + scrollY;
        }

        let scrollY = 0;
        const handleScroll = () => {
            scrollY = scrollRef.current?.scrollTop ?? 0;
        };

        // Initial logic to create particles
        const particles: Particle[] = [];
        const safeZone = {
            left: boardWidth * 0.3,
            right: boardWidth * 0.7,
            top: boardHeight * 0.35,
            bottom: boardHeight * 0.65,
        };
        const createParticles = () => {
            particles.length = 0;

            for (let i = 0; i < numParticles; i++) {
                let x, y;

                do {
                    x = Math.random() * boardWidth;
                    y = Math.random() * boardHeight;
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
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random(),
                    vOpacity: (Math.random() >= 0.5) ? -opacityRate : opacityRate
                })
            }

            for (let i = 0; i < numSafeParticles; i++) {
                const x =
                    safeZone.left + Math.random() * (safeZone.right - safeZone.left);
                const y =
                    safeZone.top + Math.random() * (safeZone.bottom - safeZone.top);

                const opacity = 0.05 + Math.random() * 0.15;

                particles.push({
                    x,
                    y,
                    homeX: x,
                    homeY: y,
                    vx: 0,
                    vy: 0,
                    radius: Math.random() * 1.5 + 0.5,
                    opacity,
                    vOpacity: (Math.random() < 0.5 ? -1 : 1) * opacityRate * 0.3,
                });
            }

        }

        // Frame drawing logic
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#ffffff";

            for (const particle of particles) {
                if (particle.y < scrollY - particle.radius) {
                    particle.y += boardHeight;
                    particle.homeY += boardHeight;
                }

                if (particle.y > scrollY + canvas.height + particle.radius) {
                    particle.y -= boardHeight;
                    particle.homeY -= boardHeight;
                }

                const screenY = particle.y - scrollY;

                if (
                    particle.x + particle.radius < 0 ||
                    particle.x - particle.radius > canvas.width ||
                    screenY + particle.radius < 0 ||
                    screenY - particle.radius > canvas.height
                ) {
                    continue;
                }

                ctx.beginPath();
                ctx.arc(
                    particle.x,
                    screenY,
                    particle.radius,
                    0,
                    Math.PI * 2
                );
                ctx.globalAlpha = particle.opacity;
                ctx.fill();
            }

            ctx.globalAlpha = 1;

        };

        const updateParticles = () => {
            for (const particle of particles) {
                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;

                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < movementThreshold) {
                    const unitX = dx / distance;
                    const unitY = dy / distance;

                    const force = (movementThreshold - distance) / movementThreshold;

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

                // Update particle opacity
                if (particle.opacity >= 1) {
                    particle.opacity = 1;
                    particle.vOpacity *= -1;
                }

                if (particle.opacity <= 0.2) {
                    particle.opacity = 0.2;
                    particle.vOpacity *= -1;
                }

                particle.opacity += particle.vOpacity;

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
        handleScroll();
        createParticles()
        animate();

        window.addEventListener('resize', handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        scrollRef.current?.addEventListener("scroll", handleScroll);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            scrollRef.current?.removeEventListener("scroll", handleScroll);
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