import React from "react";
import style from "./button.module.css"
export const Counter = () => {
  let [count, setCount] = React.useState(0);

  return (
    <>
      <h1>
        Counter:<span style={{color: count%2==0?"green":"red"}}>{count}</span>
      </h1>
      <button className={style.button}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button className={style.button}
        onClick={() => {
            if(count>0){
                setCount(count - 1);
            }
          
        }}
      >
        Decrement
      </button>
      <button className={style.button}
      onClick={()=>{
          setCount(count*2)
      }}>Double</button>
    </>
  );
};
