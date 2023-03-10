import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TodoList, todoText, todoTextLength } from '../../../store';
import { Todo } from '../../../type';

const AddText = () => {
  const [text, setText] = useRecoilState(todoText);
  const [todoList, setTodoList] = useRecoilState(TodoList);
  const textLength = useRecoilValue(todoTextLength);
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const addText = () => {
    if (text.length === 0) return;
    const newTodo: Todo = {
      id: todoList.length + 1,
      task: text,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setText('');
  };

  return (
    <div className="addTextArea">
      <input type="text" onChange={(e) => onChangeText(e)} value={text} />
      <button onClick={() => addText()}>追加</button>
      <div className="textLength">長さ：{textLength}</div>
    </div>
  );
};

export default AddText;
