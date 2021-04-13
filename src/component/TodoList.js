import React from "react";
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = ({ todoListData, deleteTask }) => {
  const todoListArr = todoListData.map((todoData) => {
    return (
      <TodoListItem
        key={todoData.id}
        id={todoData.id}
        itemLabel={todoData.itemLabel}
        itemBody={todoData.itemBody}
        isComplited={todoData.isComplited}
        isImportant={todoData.isImportant}
        category={todoData.category}
        deleteTask={deleteTask}
      />
    );
  });
  return (
    <div>
      <h1>Hi Huy</h1>
      {todoListArr}
    </div>
  );
};

export default TodoList;
