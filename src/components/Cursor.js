"use client";

import useMousePosition from "../hooks/useMousePosition";
import { useCursorContext } from "@/context/CursorContext";

export default function Cursor() {
  const { isMouseOverNav } = useCursorContext();
  const position = useMousePosition();
  const { x, y } = position;

  const isMobileDevice = () => {
    if (typeof window !== "undefined") {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    }
    // Return a default value or perform a different check for server-side logic
    return false;
  };
  

  /*
    We do not want the cursor on mobile devices
  */
  if (isMobileDevice()) return null;

  if (isMouseOverNav) {
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