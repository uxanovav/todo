import { BrowserRouter } from "react-router-dom";
import TodoListContainer from "../TodoListContainer";
import TodoCategoryContainer from "../TodoCategory/TodoCategoryContainer";
import style from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <TodoCategoryContainer />
        <TodoListContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
