import React, { useState } from "react";

const Likecom: React.FC = () => {
  let [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  return (
    <>
      <button onClick={() => setLike(++like)}>{like} 😍</button>
      <button onClick={() => setOn(!on)}>{on ? "开" : "关"}</button>
    </>
  );
};
export default Likecom;
