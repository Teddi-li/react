import "../assets/todolist.css";
import { ToDoList } from "../hooks/todolist";
import TodoItem from "./todocomponent";

export default function TodoList() {
  const {
    myList,
    value,
    setValue,
    setInput,
    setDate, 
    setoption, 
    handleSave,
    moveUp,
    moveDown
  } = ToDoList();


  return (
    <div className="todolist">
      <div className="todo-container">
        <input
          placeholder="todo"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <input type="date"  onChange={e => setDate(e.target.value)}/>
        <input type="time"  onChange={e => setInput(e.target.value)} />
        <select onChange={e => setoption(e.target.value)}>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button className="btn-time" onClick={handleSave}> save</button>
      </div>

      <div className="columns">
        <div className="column">
          <h2>Doing</h2>
          {myList
            .filter(item => item.status === "doing")
            .map(item => (
              <TodoItem
                  key={item.id}
                  item={item}
                  moveUp={moveUp}
                  moveDown={moveDown}
                  />
            ))}
        </div>

        <div className="column">
          <h2>Done</h2>
          {myList
            .filter(item => item.status === "done")
            .map(item => (
              <TodoItem
                  key={item.id}
                  item={item}
                  moveUp={moveUp}
                  moveDown={moveDown}
                  />
            ))}
        </div>
      </div>
    </div>
  );
}

