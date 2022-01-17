import React, { useState, useEffect } from "react";

const useMousePosition = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("add-mousemove", positions.x);
    const onClickGetPositions = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", onClickGetPositions);
    return () => {
      console.log("remove-mousemove", positions.x);
      document.removeEventListener("mousemove", onClickGetPositions);
    };
  }, []);
  return positions;
};
export default useMousePosition;
