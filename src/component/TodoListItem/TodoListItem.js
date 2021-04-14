import React from "react";
import { useState } from "react";
import style from "./TodoListItem.module.css";

const TodoListItem = ({
  id,
  editTask,
  isEdit,
  itemLabel,
  itemBody,
  isComplited,
  isImportant,
  category,
  deleteTask,
  markImportant,
  markComplited,
  updateTask,
}) => {
  let labelTextArea = React.createRef();
  let bodyTextArea = React.createRef();

  const [newLabel, onLabelUpdate] = useState(itemLabel);
  const [newText, onTextUpdate] = useState(itemBody);

  const onDelete = () => {
    deleteTask(id);
  };
  const onAddImportant = () => {
    markImportant(id);
  };

  const onAddComplited = () => {
    markComplited(id);
  };

  const onEdit = () => {
    onLabelUpdate(itemLabel);
    onTextUpdate(itemBody);
    return editTask(id);
  };

  const onUpdate = () => {
    editTask(id);
    return updateTask(id, newLabel, newText, category);
  };

  return (
    <>
      <div className={style.item_body}>
        <button onClick={onDelete}>x</button>
        <button onClick={onAddImportant}>!</button>
        <button onClick={onAddComplited}>C</button>
        <button onClick={onEdit}>E</button>
        <div
          className={
            (isComplited ? style.complited : style.normal) +
            " " +
            (isImportant ? style.important : style.normal)
          }
        >
          {isEdit ? (
            <>
              <input
                value={newLabel}
                ref={labelTextArea}
                onChange={(e) => onLabelUpdate(e.target.value)}
              />
              <textarea
                value={newText}
                ref={bodyTextArea}
                onChange={(e) => onTextUpdate(e.target.value)}
              />
              <button onClick={onUpdate}>SAVE</button>
            </>
          ) : (
            <>
              <h3>{itemLabel}</h3>
              <p>{itemBody}</p>
            </>
          )}
          <span>{category}</span>
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
