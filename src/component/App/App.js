import { BrowserRouter } from "react-router-dom";
import TodoListContainer from "../TodoListContainer";

function App() {
  return (
    <BrowserRouter>
      <TodoListContainer />
    </BrowserRouter>
  );
}

export default App;
