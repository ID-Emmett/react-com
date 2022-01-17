import React, { useState, useEffect } from "react";

const MouseEvent: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // 先执行return代码，再执行本体代码，都是晚于render，初次挂载完毕不会执行return代码但会执行本体代码
    console.log("add", positions.x);
    const onClickGetPositions = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", onClickGetPositions);
    return () => {
      console.log("remove", positions.x);

      document.removeEventListener("click", onClickGetPositions);
    };
  },[]); // 为空 则除了初次渲染，之后每次更新都不会触发了，卸载时会触发return
  // console.log("render", positions.x);

  return (
    <>
      <p>
        x:{positions.x},y:{positions.y}
      </p>
    </>
  );
};
export default MouseEvent;
