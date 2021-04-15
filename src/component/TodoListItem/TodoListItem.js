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
  categoryData,
}) => {
  let labelTextArea = React.createRef();
  let bodyTextArea = React.createRef();
  let categorySelectArea = React.createRef();

  const [newLabel, onLabelUpdate] = useState(itemLabel);
  const [newText, onTextUpdate] = useState(itemBody);
  const [newCategory, onCategoryUpdate] = useState(category);

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
    return updateTask(id, newLabel, newText, newCategory);
  };

  return (
    <>
      <div className={style.item_body}>
        {isEdit ? (
          <>
            <div className={style.buttongroup}>
              <img
                src="https://img.icons8.com/ios/452/delete--v3.png"
                alt="delete"
                onClick={onDelete}
              />
              <img
                src="https://mywebicons.ru/i/png/521d148e273086f246c6f7a313485392.png"
                alt="edit"
                onClick={onEdit}
              />
            </div>
            <hr />
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
            <div className={style.saveblock}>
              <select
                ref={categorySelectArea}
                onChange={(e) => onCategoryUpdate(e.target.value)}
              >
                {categoryData.map((categoryEl) => {
                  return categoryEl.label === category ? (
                    <option value={categoryEl.label} selected>
                      {categoryEl.label}
                    </option>
                  ) : (
                    <option value={categoryEl.label}>{categoryEl.label}</option>
                  );
                })}
              </select>
              <img
                src="https://img.icons8.com/ios/452/save-as.png"
                alt="edit"
                onClick={onUpdate}
              />
            </div>
          </>
        ) : (
          <div>
            <div className={style.buttongroup}>
              {" "}
              <img
                src="https://api.icons8.com/download/7d0affd31152bba3d8450158edff2a01c56ee88f/windows8/PNG/512/Very_Basic/attention-512.png"
                alt="important"
                onClick={onAddImportant}
              />
              <img
                src="https://img.icons8.com/ios/452/task-completed.png"
                alt="complete"
                onClick={onAddComplited}
              />
              <img
                src="https://mywebicons.ru/i/png/521d148e273086f246c6f7a313485392.png"
                alt="edit"
                onClick={onEdit}
              />
            </div>
            <hr />
            <div
              className={
                (isComplited ? style.complited : style.normal) +
                " " +
                (isImportant ? style.important : style.normal)
              }
            >
              <h2>{itemLabel}</h2>
              <p>{itemBody}</p>
              <span>{category}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoListItem;
