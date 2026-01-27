import { Routes, Route } from "react-router-dom";
import TodoList from "./component/toDolist";
import Login from "./component/Login";
import Todoinput from "./component/todoinput";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<TodoList />} />
    </Routes>
  );
}

export default App;


