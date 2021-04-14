import React from "react";
import styles from "./TodoCategory.module.css";

const TodoCategory = ({ categoryData, deleteCategory }) => {
  return (
    <>
      <div className={styles.category}>ALL</div>
      {categoryData.map((categoryItem) => {
        return (
          <div key={categoryItem.id} className={styles.category}>
            {categoryItem.label}
          </div>
        );
      })}
    </>
  );
};

export default TodoCategory;
