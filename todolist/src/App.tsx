import { Routes, Route } from "react-router-dom";
import { TodoList } from "./component/toDolist";
import Login from "./component/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<TodoList />} />
    </Routes>
  );
}

export default App;


