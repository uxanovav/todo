import React from "react";
import TodoCategory from "./TodoCategory";
import { connect } from "react-redux";
import styles from "./TodoCategory.module.css";
import {
  addCategoryActionCreator,
  deleteCategoryActionCreator,
  setFilterActionCreator,
  updateCategoryActionCreator,
} from "../../redux/category-reducer";
import { categoryRenameActionCreator } from "../../redux/todolist-reducer";

const TodoCategoryC = (state) => {
  const renderCategory = (
    categoryData,
    addCategory,
    deleteCategory,
    updateCategory,
    setFilter,
    renameCategory
  ) => {
    return (
      <div className={styles.panel}>
        <div className={styles.logo}>LOGO</div>
        <TodoCategory
          addCategory={addCategory}
          categoryData={categoryData}
          deleteCategory={deleteCategory}
          updateCategory={updateCategory}
          setFilter={setFilter}
          renameCategory={renameCategory}
        />
      </div>
    );
  };
  return renderCategory(
    state.categoryData,
    state.addCategory,
    state.deleteCategory,
    state.updateCategory,
    state.setFilter,
    state.renameCategory
  );
};

const MapStateToPops = (state) => {
  return {
    categoryData: state.categoryReducer.categoryData,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addCategory: (newCategory) => {
      return dispatch(addCategoryActionCreator(newCategory));
    },
    deleteCategory: (id) => {
      return dispatch(deleteCategoryActionCreator(id));
    },
    updateCategory: (id, label) => {
      return dispatch(updateCategoryActionCreator(id, label));
    },
    setFilter: (filter) => {
      return dispatch(setFilterActionCreator(filter));
    },
    renameCategory: (newCategory, oldCategory) => {
      return dispatch(categoryRenameActionCreator(newCategory, oldCategory));
    },
  };
};

const TodoCategoryContainer = connect(
  MapStateToPops,
  MapDispatchToProps
)(TodoCategoryC);

export default TodoCategoryContainer;
