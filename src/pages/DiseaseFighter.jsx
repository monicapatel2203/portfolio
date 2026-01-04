import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Navbar, StarsCanvas } from "../components";
import gameplayVideo from "../assets/projects/diseasefighter/DiseaseFighter.mp4";

const DiseaseFighter = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center pb-16">
        <Navbar />
        <header className={`${styles.paddingX} max-w-7xl mx-auto pt-32`}>
          <Link
            to="/#projects"
            className="text-secondary hover:text-white text-sm font-medium tracking-wide transition-colors"
          >
            Back to Projects
          </Link>
          <h1 className={`${styles.heroHeadText} text-left mt-6`}>Disease Fighter</h1>
          <p className="mt-6 text-secondary text-[18px] max-w-3xl leading-[30px]">
            Disease Fighter is a 3D action shooter where players sprint through labs, jungles, and space
            stations to eliminate fast-mutating viruses. Unlock gadgets, level abilities, and survive wave-based
            encounters crafted for console and PC audiences.
          </p>
        </header>
      </div>

      <main className={`${styles.paddingX} ${styles.paddingY} max-w-7xl mx-auto`}>
        <section className="mb-16">
          <h2 className={`${styles.sectionHeadText} text-left`}>Gameplay Preview</h2>
          <div className="mt-8 bg-tertiary/60 border border-white/5 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-black flex items-center justify-center">
              <video controls playsInline className="w-full h-full object-contain">
                <source src={gameplayVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

      </main>

      <div className="relative z-0">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default DiseaseFighter;
