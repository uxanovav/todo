import React from "react";
import TodoListItem from "./TodoListItem/TodoListItem";
import style from "./TodoListContainer.module.css";

const TodoList = ({
  todoListData,
  deleteTask,
  markImportant,
  markComplited,
  updateTask,
  editTask,
  categoryData,
}) => {
  const todoListArr = todoListData.map((todoData) => {
    return (
      <TodoListItem
        categoryData={categoryData}
        isEdit={todoData.isEdit}
        key={todoData.id}
        id={todoData.id}
        itemLabel={todoData.itemLabel}
        itemBody={todoData.itemBody}
        isComplited={todoData.isComplited}
        isImportant={todoData.isImportant}
        category={todoData.category}
        deleteTask={deleteTask}
        markImportant={markImportant}
        markComplited={markComplited}
        updateTask={updateTask}
        editTask={editTask}
      />
    );
  });
  return <div className={style.todolist}>{todoListArr}</div>;
};

export default TodoList;
