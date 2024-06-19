// import { useEffect, useState } from 'react';
// import Clock from 'react-clock';

// import React from 'react'

// function App() {
//   let time = useState(new Date().getTime())
//   console.log(time)
//   return (
//     <div>
//       <h1>Current Time:</h1>
//     </div>
//   )
// }

// export default App

import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function App() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current time:</p>
      <Clock value={value} />
    </div>
  );
}
export default App