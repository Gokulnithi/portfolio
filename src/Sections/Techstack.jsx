import React from "react";
import Title from "../components/Title";
import { techStackIcons } from "../constants";
import Techicon from "../components/Models/Techicon";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
const Techstack = () => {
    useGSAP(()=>{
        gsap.fromTo('.tech-card',{
            y:50,
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:1,
            stagger:0.2,
            ease:'power2.inOut',
            scrollTrigger:{
                trigger:'#skills',
                start:'top center'
            }
        })
    })
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <Title
          title="My Preferred Tech Stack"
          sub="Not only this, There is more!!"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg"></div>
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                    <Techicon model ={icon}/>
                </div>

                <div className="padding-x w-full">
                    <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
