import React from 'react';
import AddText from './AddText';

const UnCompleteTodo = () => {
  return (
    <>
      <div className="todoArea">
        <h3>Todo</h3>
        <div className="addTextArea">
          <AddText />
        </div>
      </div>
    </>
  );
};

export default UnCompleteTodo;
