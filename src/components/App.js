import react from 'react';
import React from 'react'
import { useState, useRef } from 'react/cjs/react.development';
import '../styles/App.css';

const App = () => {
  const [state,setState] = useState(0);
  const shapeInput = useRef();
  const holder = useRef();
  const handleClick = () =>{  
      let newDiv = document.createElement("div")
      newDiv.innerHTML = state;
      newDiv.setAttribute('key',state);
      if(shapeInput.current.value == "Square"){
        newDiv.setAttribute('class','square');
      }
      else{
        newDiv.setAttribute('class','circle')
      }
      holder.current.appendChild(newDiv);
      setState((prev)=>prev+1);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select ref={shapeInput}>
          <option>Square</option>
          <option>Circle</option>
        </select>
        <button onClick={handleClick}>Add Shape</button>
      </div>
      <div id="shapes-holder" ref={holder}>
        
      </div>
    </div>
  )
}

export default App;
