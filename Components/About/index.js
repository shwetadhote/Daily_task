import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";

function About() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Click</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

/*const About= () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
      document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
/*
const About = () => {
    const [num, setNum] = useState(0);
    useEffect(() => {
      alert("You clicked this button");
  });
  return (
    <>
    <h1>{num}</h1>
    <button onClick={() => {setNum (num+1);}}> click </button>
  
    </>
  )
}
*/
export default About;
