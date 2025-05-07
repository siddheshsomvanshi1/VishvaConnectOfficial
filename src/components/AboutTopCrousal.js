import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/AboutTopCrousal.module.css";

export default function AboutTopCrousal() {
    const canvasRef = useRef(null);
    const slides = [
        { title: "Our Story", text: "VishvaConnect started with a vision to transform technology into powerful solutions for businesses worldwide." },
        { title: "Our Values", text: "We believe in innovation, reliability, and integrity, ensuring every solution we build empowers our clients." },
        { title: "Our Mission", text: "To create cutting-edge digital products that help businesses grow and stay ahead in the fast-evolving tech world." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000); // 3 seconds display + 1 second transition

        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const binary = "01010110011010010111001101101000";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function drawMatrix() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0ff";
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = binary[Math.floor(Math.random() * binary.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const interval = setInterval(drawMatrix, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.heroSection}>
            {/* Matrix Animation */}
            <canvas ref={canvasRef} className={styles.matrixCanvas} />

            {/* Animated Light Beams */}
            <div className={styles.lightBeams}>
                <div className={styles.beam} style={{ left: "25%" }}></div>
                <div className={styles.beam} style={{ left: "50%" }}></div>
                <div className={styles.beam} style={{ left: "75%" }}></div>
            </div>

            {/* Floating 3D Shapes */}
            <motion.div className={styles.floatingShape1} animate={{ y: [0, 20, 0], rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />
            <motion.div className={styles.floatingShape2} animate={{ y: [0, -20, 0], rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} />

            {/* Hero Content - Carousel */}
            <div className={styles.heroContent}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 1 }}
                        className={styles.carouselSlide}
                    >
                        <h1 className={styles.heroTitle}>{slides[currentSlide].title}</h1>
                        <p className={styles.heroSubtitle}>{slides[currentSlide].text}</p>
                        <motion.button
                            className={styles.ctaButton}
                            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)" }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
