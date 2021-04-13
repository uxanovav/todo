import { combineReducers, createStore } from "redux";
import todoListReducer from "./todolist-reducer";

let reducers = combineReducers({
  todoListReducer,
});

let store = createStore(reducers);

export default store;
