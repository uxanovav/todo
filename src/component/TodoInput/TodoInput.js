import React from "react";

const TodoInput = (props) => {
  let newTask = React.createRef();
  const onAdd = () => {
    let newTodo = newTask.current.value;
    props.addTask(newTodo);
  };
  return (
    <div>
      <textarea ref={newTask} />
      <button onClick={onAdd}>addTask</button>
    </div>
  );
};

export default TodoInput;
