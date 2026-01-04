import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Navbar, StarsCanvas } from "../components";
import gameplayVideo from "../assets/projects/coronawarrior/CoronaWarrior.mp4";
import screenshotArena from "../assets/projects/coronawarrior/CoronaWarrior01.jpg";
import screenshotBoss from "../assets/projects/coronawarrior/CoronaWarrior02.jpg";
import screenshotPowerup from "../assets/projects/coronawarrior/CoronaWarrior03.jpg";
import screenshotDefense from "../assets/projects/coronawarrior/CoronaWarrior04.jpg";
import screenshotStats from "../assets/projects/coronawarrior/CoronaWarrior05.jpg";
import screenshotVictory from "../assets/projects/coronawarrior/CoronaWarrior06.jpg";

const screenshots = [
  screenshotArena,
  screenshotBoss,
  screenshotPowerup,
  screenshotDefense,
  screenshotStats,
  screenshotVictory,
];

const CoronaWarrior = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? screenshots.length - 1 : current - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current === screenshots.length - 1 ? 0 : current + 1));
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
          <h1 className={`${styles.heroHeadText} text-left mt-6`}>Corona Warrior</h1>
          <p className="mt-6 text-secondary text-[18px] max-w-3xl leading-[30px]">
            Corona Warrior is a fast-paced FPS where players neutralize waves of viral enemies across
            stylized arenas. Precision shooting, tactical power-ups, and escalating difficulty keep each
            mission tense on mobile and desktop platforms.
          </p>
        </header>
      </div>

      <main className={`${styles.paddingX} ${styles.paddingY} max-w-7xl mx-auto`}>
        <section className="mb-16">
          <h2 className={`${styles.sectionHeadText} text-left`}>Gameplay Preview</h2>
          <div className="mt-8 bg-tertiary/60 border border-white/5 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-black flex items-center justify-center">
              <video controls playsInline className="w-full h-full object-contain" poster={screenshots[0]}>
                <source src={gameplayVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section>
          <h3 className={`${styles.sectionSubText}`}>Preview Gallery</h3>
          <div className="relative mt-8">
            <div className="bg-tertiary border border-white/5 rounded-2xl overflow-hidden shadow-lg">
              <motion.div
                key={screenshots[activeIndex]}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="aspect-video bg-black flex items-center justify-center"
              >
                <img
                  src={screenshots[activeIndex]}
                  alt="Corona Warrior preview"
                  loading="lazy"
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </motion.div>
            </div>

            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/70 text-white w-12 h-12 transition hover:bg-black"
              aria-label="View previous screenshot"
            >
              &#8592;
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/70 text-white w-12 h-12 transition hover:bg-black"
              aria-label="View next screenshot"
            >
              &#8594;
            </button>
          </div>
        </section>
      </main>

      <div className="relative z-0">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default CoronaWarrior;
