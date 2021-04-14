import React, { useState } from "react";
import styles from "./TodoCategory.module.css";

const Category = ({
  id,
  label,
  deleteCategory,
  updateCategory,
  renameCategory,
}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [newLabel, setNewLabel] = useState(label);
  const onDelete = () => {
    return deleteCategory(id);
  };
  const onUpdate = () => {
    updateCategory(id, newLabel);
    renameCategory(newLabel, label);
    return setIsUpdate(!isUpdate);
  };
  return (
    <div key={id} className={styles.category}>
      {isUpdate ? (
        <div>
          <input
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <button onClick={onDelete}>DELETE</button>
          <button onClick={onUpdate}>SAVE</button>
        </div>
      ) : (
        label
      )}
      <button onClick={(e) => setIsUpdate(!isUpdate)}>UPTD</button>
    </div>
  );
};

export default Category;
