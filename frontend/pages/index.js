import React from 'react';
import ReactDOM from 'react-dom';

export default function Hello(){
  return <div>
      Hello World
  </div>
}

ReactDOM.render(
 <Hello/>,
 document.querySelector("#root")
);