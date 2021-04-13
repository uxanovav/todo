import { connect } from "react-redux";
import {
  addTaskActionCreator,
  deleteTaskActionCreator,
} from "../redux/todolist-reducer";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput/TodoInput";

const TodoListContainerC = (state) => {
  const renderTodoList = (todoListData, addTask, deleteTask) => {
    return (
      <div>
        <TodoInput addTask={addTask} />
        <TodoList todoListData={todoListData} deleteTask={deleteTask} />
      </div>
    );
  };
  return renderTodoList(state.todoListData, state.addTask, state.deleteTask);
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
    deleteTask: (id) => {
      return dispath(deleteTaskActionCreator(id));
    },
  };
};

const TodoListContainer = connect(
  MapStateToPops,
  MapDispatchToProps
)(TodoListContainerC);

export default TodoListContainer;
