import React from "react";
import styles from "./TodoInput.module.css";

const TodoInput = ({ categoryData, addTask }) => {
  let newTodoText = React.createRef();
  let newTodoLabel = React.createRef();
  let newTodoCategory = React.createRef();
  const onAdd = () => {
    let newLabel = newTodoLabel.current.value;
    let newText = newTodoText.current.value;
    let newCategory = newTodoCategory.current.value;
    if (newLabel !== "") {
      addTask({ newLabel, newText, newCategory });
      newTodoLabel.current.value = "";
      newTodoText.current.value = "";
    }
  };
  return (
    <div className={styles.inputpanel}>
      <h2>ADD NEW NOTE</h2>
      <div>
        <label>
          Label:<span>*</span>
        </label>
        <input ref={newTodoLabel} />
      </div>
      <label>Text:</label>
      <textarea ref={newTodoText} />
      <label>Category:</label>
      <select ref={newTodoCategory}>
        {categoryData.map((category) => {
          return (
            <option key={category.id} value={category.label}>
              {category.label}
            </option>
          );
        })}
      </select>
      <img
        src="https://img.icons8.com/ios/452/add--v2.png"
        alt="add"
        onClick={onAdd}
      />
    </div>
  );
};

export default TodoInput;
