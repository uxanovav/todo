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
    <div key={id} className={styles.settingitem}>
      {isUpdate ? (
        <div>
          <input
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <img
            src="https://img.icons8.com/ios/452/delete--v3.png"
            alt="delete"
            onClick={onDelete}
          />
          <img
            src="https://img.icons8.com/ios/452/save-as.png"
            alt="edit"
            onClick={onUpdate}
          />
        </div>
      ) : (
        <div className={styles.settingitem}>
          {label}
          <img
            src="https://mywebicons.ru/i/png/521d148e273086f246c6f7a313485392.png"
            alt="edit"
            onClick={(e) => setIsUpdate(!isUpdate)}
          />
        </div>
      )}
    </div>
  );
};

export default Category;
