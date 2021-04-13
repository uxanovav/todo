import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoListContainer from "../TodoListContainer";

function App() {
  return (
    <BrowserRouter>
      <TodoListContainer />
    </BrowserRouter>
  );
}

export default App;
