import { combineReducers, createStore } from "redux";
import todoListReducer from "./todolist-reducer";
import categoryReducer from "./category-reducer";

let reducers = combineReducers({
  todoListReducer,
  categoryReducer,
});

let store = createStore(reducers);

export default store;
