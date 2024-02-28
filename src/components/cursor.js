"use client";

import useMousePosition from "../hooks/useMousePosition";

const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
};

export default function Cursor({ isNav }) {
  const position = useMousePosition();
  const { x, y } = position;

  /*
    We do not want the cursor on mobile devices
  */
  if (isMobileDevice()) return null;

  if (isNav) {
    return (
      <div
        style={{
          height: '40px',
          width: '50px',
          position: 'absolute',
          left: x - 50,
          top: y - 30,
          backgroundColor: "#78A584",
          borderRadius: '40%'
        }}>
      </div>
    )
  }

  return (
    <div
      style={{
        height: '30px',
        width: '30px',
        position: 'absolute',
        left: x,
        top: y,
        backgroundColor: 'black',
        borderRadius: '50%',
      }}>
    </div>
  )
};