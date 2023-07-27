// import { useState } from 'react'
import './App.css'


import DragComponent from './conponents/DragComponent/DragComponent';
import DropComponent from './conponents/DropComponent/DropComponent';


function App() {

  const dragCompArr: string[] = ['Prva','Druga','Treca','Cetvrta','Peta','Sesta'];

  return (
    <div className="appContainer">
      <div>
        <label>DRAG CONTAINER</label>

        {dragCompArr.map((item) => (
          <DragComponent key={item} name={item} />
        ))}
      </div>
      <div>
        <label>DROP CONTAINER</label>
        <DropComponent />
      </div>
    </div>
  );
}

export default App
