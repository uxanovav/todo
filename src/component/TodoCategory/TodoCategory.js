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
    addCategory(newCategory);
    return setNewCategory("");
  };
  return (
    <>
      <div className={styles.category} onClick={() => onFilterSet("all")}>
        ALL
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
      <div>
        <div onClick={(e) => setIsAdd(!isAdd)}>Settings</div>
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

        <hr />
        <p>SEARCH:</p>
        <input
          value={newSearchFilter}
          onChange={(e) => setNewSearchFilter(e.target.value)}
        ></input>
        <button onClick={onSearchFilterChange}>SEARCH</button>
      </div>
    </>
  );
};

export default TodoCategory;
