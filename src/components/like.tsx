import React, { useState,useEffect } from "react";

const Likecom: React.FC = () => {
  let [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  useEffect(() => {
    console.log('updeate title--------------');
    document.title = `${like}`
    // useEffect参数一是回调可return，参数二是数组，可以存放任意多的state或props，
    // 当其中一项发生改变时useEffect就会触发，为空数组[]表示只执行一次，但是卸载组件时，
    // return内容都会被触发，无论[]是否有值
  },[like]) 
  return (
    <>
      <button onClick={() => setLike(++like)}>{like} 😍</button>
      <button onClick={() => setOn(!on)}>{on ? "开" : "关"}</button>
    </>
  );
};
export default Likecom;
