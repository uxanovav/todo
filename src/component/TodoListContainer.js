import { useEffect } from "react";
import { connect } from "react-redux";
import { addTaskActionCreator } from "../redux/todolist-reducer";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput/TodoInput";

const TodoListContainerC = (state) => {
  const renderTodoList = (todoListData, addTask) => {
    return (
      <div>
        <TodoInput addTask={addTask} />
        <TodoList todoListData={todoListData} />
      </div>
    );
  };
  return renderTodoList(state.todoListData, state.addTask);
};

const MapStateToPops = (state) => {
  return {
    todoListData: state.todoListReducer.todoListData,
  };
};

const MapDispatchToProps = (dispath) => {
  return {
    addTask: (todoListData) => {
      return dispath(addTaskActionCreator(todoListData));
    },
  };
};

const TodoListContainer = connect(
  MapStateToPops,
  MapDispatchToProps
)(TodoListContainerC);

export default TodoListContainer;
