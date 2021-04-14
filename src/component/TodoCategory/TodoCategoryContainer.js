import React from "react";
import TodoCategory from "./TodoCategory";
import CategorySetting from "./CategorySetting/CategorySetting";
import { connect } from "react-redux";
import styles from "./TodoCategory.module.css";
import {
  addCategoryActionCreator,
  deleteCategoryActionCreator,
} from "../../redux/category-reducer";

const TodoCategoryC = (state) => {
  const renderCategory = (categoryData, addCategory, deleteCategory) => {
    return (
      <div className={styles.panel}>
        <div className={styles.logo}>LOGO</div>
        <TodoCategory
          categoryData={categoryData}
          deleteCategory={deleteCategory}
        />
        <CategorySetting
          addCategory={addCategory}
          categoryData={categoryData}
        />
      </div>
    );
  };
  return renderCategory(
    state.categoryData,
    state.addCategory,
    state.deleteCategory
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
  };
};

const TodoCategoryContainer = connect(
  MapStateToPops,
  MapDispatchToProps
)(TodoCategoryC);

export default TodoCategoryContainer;
