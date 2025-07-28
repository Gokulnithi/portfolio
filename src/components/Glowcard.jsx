import React from "react";
import { useRef } from "react";
const Glowcard = ({ card, children,index,k}) => {
  const cardRef = useRef([]);
  const handleMouseMove = (index,e) => {
    const card = cardRef.current[index];
    if (!card) return;
    //position
    const rect = card.getBoundingClientRect();
    const MouseX = e.clientX - rect.left - rect.width/2;
    const MouseY = e.clientY - rect.top - rect.height/2;

    //angle
    let angle = Math.atan2(MouseY,MouseX) * (180/Math.PI);
    angle = (angle +360) % 360;
    card.style.setProperty('--start',angle + 60)
  };
  return (
    <div
      ref={(el) => (cardRef.current[index] = el)}
      onMouseMove={(e)=>{handleMouseMove(index,e)}}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" alt="star" key={i} className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default Glowcard;
