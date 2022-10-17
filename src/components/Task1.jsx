import React from 'react';

const Task1 = ({ deleteBtn, styleNone }) => {
    
  return (
    <button style={styleNone} onClick={deleteBtn}>Click Me!</button>
  )
}

export default Task1