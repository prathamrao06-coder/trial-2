// import React, {useEffect, useState } from 'react'

// export default function npm() {

//   const[count,setCount]=useState(0);

//   useEffect(()=>{
//     console.log("Component rendered");
//   });
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={()=>setCount(count+1)}>Increase</button>
//     </div>

//   )
// }

// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <h2>Window width: {width}px</h2>;
// }

// import { useEffect, useRef, useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(0);

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   return (
//     <div>
//       <h3>Current: {count}</h3>
//       <h3>Previous: {prevCount.current}</h3>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// import React, { useState, useMemo } from "react";

// const slowFunction = (num) => {
//   console.log("Running slow function...");
//   for (let i = 0; i < 1000000000; i++) {} // heavy loop
//   return num * 2;
// };

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   // useMemo prevents slowFunction from running on every render
//   const slowValue = useMemo(() => {
//     return slowFunction(count);
//   }, [count]);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <h2>Slow Value: {slowValue}</h2>

//       <button onClick={() => setCount(count + 1)}>Increase Count</button>

//       <br /><br />

//       <input 
//         type="text" 
//         value={name} 
//         onChange={(e) => setName(e.target.value)} 
//         placeholder="Type name..."
//       />
//     </div>
//   );
// }


import React, { useState, useCallback } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // useCallback ensures the function is not recreated on every render
  const sayHello = useCallback(() => {
    alert("Hello!");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>

      {/* Button to change state */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      {/* Button using useCallback function */}
      <button onClick={sayHello}>Say Hello</button>
    </div>
  );
}

