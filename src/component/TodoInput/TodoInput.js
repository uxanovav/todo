import React from "react";

const TodoInput = (props) => {
  let newTodoText = React.createRef();
  let newTodoLabel = React.createRef();
  let newTodoCategory = React.createRef();
  const onAdd = () => {
    let newLabel = newTodoLabel.current.value;
    let newText = newTodoText.current.value;
    let newCategory = newTodoCategory.current.value;
    props.addTask({ newLabel, newText, newCategory });
  };
  return (
    <div>
      <input ref={newTodoLabel} />
      <textarea ref={newTodoText} />
      <select ref={newTodoCategory}>
        {props.categoryData.map((category) => {
          return <option value={category.label}>{category.label}</option>;
        })}
      </select>
      <button onClick={onAdd}>addTask</button>
    </div>
  );
};

export default TodoInput;
