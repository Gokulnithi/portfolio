import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Showcase = () => {
  const secRef = useRef(null);
  const Project1 = useRef(null);
  const Project2 = useRef(null);
  const Project3 = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(secRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    // Animations for each app showcase
    const cards = [Project1.current, Project2.current, Project3.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
  return (
    <section ref={secRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*Left */}
          <div className="first-project-wrapper" ref={Project1}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="1" />
            </div>
            <div className="text-content">
              <h2>Movie Recommendation System</h2>
              <p className="text-white-50 md:text-xl">
                A ML based movie recommendation system which built on top of
                React.
              </p>
              <a
                href="https://github.com/Gokulnithi/Intelligent-Movie-Recommender"
                target="_blank"
                rel="noopener noreferrer"
                 className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded"
              >
                View Project
              </a>
            </div>
          </div>
          {/*Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={Project2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="2" />
              </div>
              <h2>A Event Calendar</h2>
              <a
                href="https://github.com/Gokulnithi/CalendarApp"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gradient-to-r from-red-500 to-yellow-600 text-white px-5 py-2 rounded"
              >
                View Project
              </a>
            </div>
            <div className="project" ref={Project3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/projectsd.jpg" alt="3" />
              </div>
              <h2>Smart Medical Pill Dispenser</h2>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
