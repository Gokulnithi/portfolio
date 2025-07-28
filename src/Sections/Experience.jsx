import React from "react";
import Title from "../components/Title";
import { expCards } from "../constants";
import Glowcard from "../components/Glowcard";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
const Experience = () => {
  let i =  0;
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    gsap.utils.toArray('.timeline-card').forEach((card)=>{
      gsap.from(card,{
        xPercent: -100,
        opacity:0,
        transformOrigin:'left left',
        duration:1,
        ease: 'power2.inout',
        scrollTrigger:{
          trigger: card,
          start :'top 80%',}}
          )
        })

      gsap.to('.timeline',{
        transformOrigin: 'bottom bottom',
        ease: 'power1.inOut',
        scrollTrigger:{
          trigger : '.timeline',
          start:'top center',
          end: '70% center',
          onUpdate: (self)=>{
            gsap.to('.timeline',{
              scaleY: 1-self.progress,
            })
          }
        }
      })

      gsap.utils.toArray('.expText').forEach((text)=>{
        gsap.from(text,{
          xPercent: 0,
          opacity:0,
          duration:1,
          ease: 'power2.inout',
          scrollTrigger:{
            trigger: text ,
            start :'top 60%',}}
            )
          })
  },[])
  return (
    <section
      
      className="w-full md:mt-40 mt-20 section-padding xl:p-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <Title
          id="experience"
          title="Academic Background"
          sub="A journey shaped by continuous learning."
        />
        <div className="mt-32 relative">
            <div className="relative z-50 xl:space-y-32 space-y-10">
                {expCards.map((card,index)=>(
                    <div key={card.id} className="exp-card-wrapper">
                        <div className="xl:w-2/6">
                            <Glowcard card={card} index={index}>
                                <div>
                                    <h2 className="text-lg">{card.area}</h2>
                                </div>
                            </Glowcard>
                        </div>
                        <div className="xl:w-4/6">
                          <div className="flex items-start">
                            <div className="timeline-wrapper">
                              <div className="timeline "/>
                              <div className="gradient-line w-1 h-full"/>
                            </div>
                            <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                              <div className="timeline-logo">
                                <img src={card.logoPath} className="mix-blend-screen" alt="logo" />
                              </div>
                              <div>
                                <h1 className="font-semibold text-3xl">{card.title}</h1>
                                <p className="my-5 text-white-50">
                                   🗓️{card.date}
                                </p>            
                                <p className="text-[#839cb5] italic">
                                Things I’ve Tried, Explored, and Learned
                                </p>
                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                  {card.responsibilities.map((res)=>{
                                    return (
                                      <li className="text-lg" key={i++}>
                                      {res}
                                    </li>
                                    )
                                  })} 

                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
