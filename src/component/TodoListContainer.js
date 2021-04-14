import { connect } from "react-redux";
import {
  addTaskActionCreator,
  deleteTaskActionCreator,
  editTaskAcitonCreator,
  markComplitedActionCreator,
  markImportantActionCreator,
  updateTaskAcionCreator,
} from "../redux/todolist-reducer";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput/TodoInput";
import style from "./TodoListContainer.module.css";

const TodoListContainerC = (state) => {
  const renderTodoList = (
    todoListData,
    categoryData,
    addTask,
    deleteTask,
    markImportant,
    markComplited,
    updateTask,
    editTask
  ) => {
    return (
      <>
        <div className={style.body}>
          <TodoInput addTask={addTask} categoryData={categoryData} />
          <div>
            <TodoList
              todoListData={todoListData}
              deleteTask={deleteTask}
              markImportant={markImportant}
              markComplited={markComplited}
              updateTask={updateTask}
              editTask={editTask}
            />
          </div>
        </div>
      </>
    );
  };
  return renderTodoList(
    state.todoListData,
    state.categoryData,
    state.addTask,
    state.deleteTask,
    state.markImportant,
    state.markComplited,
    state.updateTask,
    state.editTask
  );
};

const MapStateToPops = (state) => {
  return {
    todoListData: state.todoListReducer.todoListData,
    categoryData: state.todoListReducer.categoryData,
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
    markImportant: (id) => {
      return dispath(markImportantActionCreator(id));
    },
    markComplited: (id) => {
      return dispath(markComplitedActionCreator(id));
    },
    updateTask: (id, newLabel, newText, newCategory) => {
      return dispath(
        updateTaskAcionCreator(id, newLabel, newText, newCategory)
      );
    },
    editTask: (id) => {
      return dispath(editTaskAcitonCreator(id));
    },
  };
};

const TodoListContainer = connect(
  MapStateToPops,
  MapDispatchToProps
)(TodoListContainerC);

export default TodoListContainer;
