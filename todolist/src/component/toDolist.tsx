import { useState } from "react";
import "../assets/todolist.css";

export function TodoList() {
  const [myList, setMyList] = useState([
    { id: 1, text: "sleep", time: "2026-01-02T03:15:00.123Z" },
    { id: 2, text: "eat", time: "2026-01-24T04:18:00.123Z" },
  ]);

  const [value, setValue] = useState("");
  const [input, setInput] = useState(""); // MM/DD HH:mm

  const handleSave = () => {
    const date = parseUserInput(input);
    if (!date || !value) return;
    const utcTime = date.toISOString(); // ✅ local → UTC
    setMyList(prev => [
      ...prev,
      {
        id: prev.length + 1,
        text: value,
        time: utcTime
      }
    ]);

    setValue("");
    setInput("");
  };

  return (
    <div className="todo-container">
      {/* Todo text */}
      <input
        placeholder="todo"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      {/* Date & time input */}
      <input
        placeholder="MM/DD HH:mm"
        value={input}
        onChange={e => setInput(e.target.value)}
      />

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
        </div>
      ))}
    </div>
  );
}
function parseUserInput(input: string): Date | null {
  // Expects input in "MM/DD HH:mm" format
  const match = input.match(/^(\d{2})\/(\d{2}) (\d{2}):(\d{2})$/);
  if (!match) return null;
  const [, month, day, hour, minute] = match.map(Number);
  const year = new Date().getFullYear();
  const date = new Date(year, month - 1, day, hour, minute);
  return isNaN(date.getTime()) ? null : date;
}

