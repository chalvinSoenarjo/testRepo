import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
  const [tileCount, setTileCount] = useState<number>(0);
  
  const handleButtonClick = ( ) => {
    setTileCount(tileCount + 1);




    
  };


  return (
    <>

    {/* button is in header but how to make a label in assignments? to make a file */}
      <Header onClick={handleButtonClick} />
      <Assignments  tileCount={tileCount} />
    </>
  );
}

export default App;
