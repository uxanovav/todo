import React, { useState } from "react";
import Category from "./Category";
import styles from "./TodoCategory.module.css";

const TodoCategory = ({
  categoryData,
  deleteCategory,
  addCategory,
  updateCategory,
  setFilter,
  renameCategory,
  setSearchFilter,
}) => {
  const [isAdd, setIsAdd] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [newSearchFilter, setNewSearchFilter] = useState("");

  const onFilterSet = (filter) => {
    if (filter === "all") {
      setSearchFilter("");
    }
    return setFilter(filter);
  };

  const onSearchFilterChange = () => {
    setFilter("all");
    setSearchFilter(newSearchFilter.toLowerCase());
    return setNewSearchFilter("");
  };
  const onAddNewCategory = () => {
    if (newCategory !== "" && newCategory !== "all") {
      addCategory(newCategory);
      return setNewCategory("");
    }
  };
  return (
    <>
      <br />
      <input
        value={newSearchFilter}
        onChange={(e) => setNewSearchFilter(e.target.value)}
      ></input>
      <button onClick={onSearchFilterChange}>SEARCH</button>
      <hr />
      <div className={styles.category} onClick={() => onFilterSet("all")}>
        All
      </div>
      {categoryData.map((categoryItem) => {
        return (
          <div
            className={styles.category}
            onClick={() => onFilterSet(categoryItem.label)}
          >
            {categoryItem.label}
          </div>
        );
      })}
      <hr />
      <div>
        <div className={styles.setting} onClick={(e) => setIsAdd(!isAdd)}>
          Settings
        </div>
        <hr />
        {isAdd ? (
          <div>
            <div className={styles.addcategory}>
              <input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="New category name"
              ></input>
              <br />
              <img
                src="https://img.icons8.com/ios/452/add--v2.png"
                alt="add"
                onClick={onAddNewCategory}
              />
            </div>
            <hr />
            {categoryData.map((categoryItem) => {
              return (
                <Category
                  key={categoryItem.id}
                  id={categoryItem.id}
                  label={categoryItem.label}
                  deleteCategory={deleteCategory}
                  updateCategory={updateCategory}
                  renameCategory={renameCategory}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default TodoCategory;
