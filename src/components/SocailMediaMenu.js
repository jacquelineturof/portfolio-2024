import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { IoLogoLinkedin, IoLogoGithub, IoMailOpenOutline } from "react-icons/io5";

const SOCIAL_MEDIA = [
  { icon: IoLogoLinkedin, href: "", backgroundColor: "#0077b5" },
  { icon: IoLogoGithub, href: "", backgroundColor: "black" },
  { icon: IoMailOpenOutline, href: "", backgroundColor: "#EA4335" },
];

export default function SocialMediaMenu() {
  // State to manage hover index
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div className="mt-auto flex">
      {SOCIAL_MEDIA.map((sm, index) => (
        <IconContext.Provider
          key={index}
          value={{
            color: hoverIndex === index ? 'white' : 'black',
            size: 28,
            className: "social-icon"
          }}
        >
          <a
            href="#"
            className="p-2 rounded-full flex items-center justify-center mr-4"
            style={{
              transition: 'background-color 0.3s ease',
              backgroundColor: hoverIndex === index ? sm.backgroundColor : 'transparent',
              border: `2px solid ${hoverIndex === index ? sm.backgroundColor : "black"}`
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <sm.icon />
          </a>
        </IconContext.Provider>
      ))}
    </div>
  );
}
