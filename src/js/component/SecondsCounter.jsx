import React, { useEffect, useState } from "react";
import "/workspace/react-hello/src/styles/index.css";

function SecondsCounter(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setInterval(() => {
    //   console.log("hello");
      setCounter((currentValue) => currentValue + 1);
    }, 1000);
  }, []);

//   console.log("yo yo yo");
  return (

    <div className="bigCounter p-3 m-3">
      <div className="clock ">
        <i className="far fa-clock"></i>
      </div>
      <div className="digitSix">{Math.floor((counter / 100000) % 10)}</div>
      <div className="digitFive">{Math.floor((counter / 10000) % 10)}</div>
      <div className="digitFour">{Math.floor((counter / 1000) % 10)}</div>
      <div className="digitThree">{Math.floor((counter / 100) % 10)}</div>
      <div className="digitTwo">{Math.floor((counter / 10) % 10)}</div>
      <div className="digitOne">{counter % 10}</div>
    </div>

  );
}

export default SecondsCounter;
