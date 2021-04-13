import { connect } from "react-redux";
import { addTaskActionCreator } from "../redux/todolist-reducer";
import TodoList from "./TodoList";

const TodoInputC = (state) => {
  const renderTodoList = (todoListData) => {
    debugger;
    return <TodoList todoListData={todoListData} />;
  };
  return renderTodoList(state.todoListData);
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
)(TodoInputC);

export default TodoListContainer;
