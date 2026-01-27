import "../assets/todolist.css";
import { useNavigate } from "react-router-dom";
import { ToDoList } from "../hooks/todolist";

export default function TodoList() {
  const navigate = useNavigate();
  const {
    myList,
    setMyList,
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

      <button className="btn-time" onClick={handleSave}>
        save
      </button>
      <h1 className="h1">To Do List</h1>

      {myList.map(item => (
        <div className="listColumn" key={item.id}>
          <div className="id">{item.id}</div>
          <div className="text">{item.text}</div>
          <div className="space">
            {new Date(item.time).toLocaleString("en-US", {
              timeZone: "Asia/Tokyo",
              month: "2-digit",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true
            })}
          </div>
          <div className="status">{item.status}</div>

          <button
            className="btn"
            onClick={() =>
              setMyList(prev =>
                prev
                  .filter(e => e.id !== item.id)
                  .map((e, index) => ({ ...e, id: index + 1 }))
              )
            }
          >
            delete
          </button>
          <div className="updownbtn">
          <button className="updown" onClick={() => moveUp(item.id)}>⬆</button>
          <button className="updown" onClick={() => moveDown(item.id)}>⬇</button>

              </div>
        </div>
      ))}
    </div>
  );
}

