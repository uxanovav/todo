import React, { useState } from "react";

const CategorySetting = ({ addCategory, categoryData, deleteCategory }) => {
  const [isAdd, setIsAdd] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const onAddNewCategory = () => {
    addCategory(newCategory);
    return setNewCategory("");
  };

  return (
    <div>
      <div onClick={(e) => setIsAdd(!isAdd)}>ADD NEW</div>
      {isAdd ? (
        <div>
          <input
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category name"
          ></input>
          <br />
          <button onClick={onAddNewCategory}>ADD</button>
          <hr />
        </div>
      ) : null}
      <hr />
      <p>SEARCH:</p>
      <input></input>
    </div>
  );
};

export default CategorySetting;
