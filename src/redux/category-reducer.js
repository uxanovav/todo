const ADD_CATEGORY = "ADD-CATEGORY";
const DELETE_CATEGORY = "DELETE-CATEGORY";
const UPDATE_CATEGORY = "UPDATE-CATEGORY";
const SET_FILTER = "SET-FILTER";
const SET_SEARCH_FILTER = "SET-SEARCH-FILTER";

let initialState = {
  categoryData: [
    { id: 0, label: "Work" },
    { id: 1, label: "Shop" },
    { id: 2, label: "Other" },
  ],
  filter: "all",
  searchFilter: "",
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
    case UPDATE_CATEGORY: {
      return {
        ...state,
        categoryData: state.categoryData.map((category) => {
          if (category.id === payload.id) {
            category.label = payload.label;
          }
          return category;
        }),
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filter: payload.filter,
      };
    }
    case SET_SEARCH_FILTER: {
      return {
        ...state,
        searchFilter: payload.searchFilter,
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
export const updateCategoryActionCreator = (id, label) => {
  return { type: UPDATE_CATEGORY, id: id, label: label };
};
export const setFilterActionCreator = (filter) => {
  return { type: SET_FILTER, filter: filter };
};
export const setSearchFilterActionCreator = (searchFilter) => {
  return { type: SET_SEARCH_FILTER, searchFilter: searchFilter };
};
