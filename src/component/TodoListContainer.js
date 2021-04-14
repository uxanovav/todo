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
    editTask,
    filter,
    searchFilter
  ) => {
    let filtredTodoListData = todoListData.filter(
      (todoListItem) =>
        (todoListItem.category === filter || filter === "all") &&
        (todoListItem.itemLabel.toLowerCase().includes(searchFilter) ||
          todoListItem.itemBody.toLowerCase().includes(searchFilter))
    );
    return (
      <>
        <div className={style.body}>
          <TodoInput addTask={addTask} categoryData={categoryData} />
          <div>
            <TodoList
              categoryData={categoryData}
              todoListData={filtredTodoListData}
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
    state.editTask,
    state.filter,
    state.searchFilter
  );
};

const MapStateToPops = (state) => {
  return {
    todoListData: state.todoListReducer.todoListData,
    categoryData: state.categoryReducer.categoryData,
    filter: state.categoryReducer.filter,
    searchFilter: state.categoryReducer.searchFilter,
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
