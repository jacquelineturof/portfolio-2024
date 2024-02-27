"use client";

import useMousePosition from "../hooks/useMousePosition";

export default function Cursor({ color, isNav }) {
  const position = useMousePosition();
  const { x, y } = position;

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