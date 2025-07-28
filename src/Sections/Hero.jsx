import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { lazy, Suspense } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

// 🔮 Lazy-load HeroExperience
const LazyHeroExperience = lazy(() =>
  import("../components/HeroModels/HeroExperience")
);

// 🧼 Simple fallback loader (no Canvas dependency)
const Loader = () => (
  <div className="flex justify-center items-center h-full text-white">
    <p className="text-lg animate-pulse">Loading 3D magic...</p>
  </div>
);

const Hero = () => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
        }
      );
    });

    return () => ctx.revert(); // 🧹 Clean on unmount
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* 🔲 Background image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* ⬅️ Left Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Engineering
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hey! I'm Gokulnithi, who builds circuits with syntaxes.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* ➡️ Right: Lazy-loaded 3D model with safe fallback */}
        <figure>
          <div className="hero-3d-layout">
            <Suspense fallback={<Loader />}>
              <LazyHeroExperience />
            </Suspense>
          </div>
        </figure>
      </div>

      {/* 🔢 Counter */}
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
