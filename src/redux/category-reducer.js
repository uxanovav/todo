const ADD_CATEGORY = "ADD-CATEGORY";
const DELETE_CATEGORY = "DELETE-CATEGORY";
const UPDATE_CATEGORY = "UPDATE-CATEGORY";

let initialState = {
  categoryData: [
    { id: 0, label: "work" },
    { id: 1, label: "other" },
    { id: 2, label: "buy" },
  ],
};

export default function categoryReducer(state = initialState, payload) {
  switch (payload.type) {
    case ADD_CATEGORY: {
      let newCategory = {
        id:
          state.categoryData.length !== 0
            ? state.categoryData[state.categoryData.length - 1].id + 1
            : 0,
        label: payload.newCategory,
      };
      return {
        ...state,
        categoryData: [...state.categoryData, newCategory],
      };
    }
    case DELETE_CATEGORY: {
      return {
        ...state,
        categoryData: state.categoryData.filter(
          (category) => category.id !== payload.id
        ),
      };
    }
    default: {
      return state;
    }
  }
}

export const addCategoryActionCreator = (newCategory) => {
  return { type: ADD_CATEGORY, newCategory: newCategory };
};

export const deleteCategoryActionCreator = (id) => {
  return { type: DELETE_CATEGORY, id: id };
};
