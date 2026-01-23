import { useState } from "react";
import "../assets/todolist.css";

export function TodoList() {
  const [myList, setMyList] = useState([
    { id: 1, text: "sleep", time: "2026-01-02T03:15:00.123Z" },
    { id: 2, text: "eat", time: "2026-01-24T04:18:00.123Z" },
  ]);

  const [value, setValue] = useState("");
  const [input, setInput] = useState(""); 
  const [datetime, setDate] = useState(""); 
  

  const handleSave = () => {
    const date = new Date(`${datetime}T${input}`);
    const utcTime = date.toISOString(); 
    
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
const moveDown = (id: number) => {
  setMyList(prev => {
    let index = -1;

    // 1️⃣ Find the index of the item
    for (let i = 0; i < prev.length; i++) {
      if (prev[i].id === id) {
        index = i;
        break;
      }
    }

    // 2️⃣ If not found or already at bottom → do nothing
    if (index === -1 || index === prev.length - 1) {
      return prev;
    }

    // 3️⃣ Copy the array (do NOT mutate state)
    const newList = [];
    for (let i = 0; i < prev.length; i++) {
      newList[i] = prev[i];
    }

    // 4️⃣ Swap current item with the one below it
    const temp = newList[index];
    newList[index] = newList[index + 1];
    newList[index + 1] = temp;

    // 5️⃣ Reassign IDs sequentially
    for (let i = 0; i < newList.length; i++) {
      newList[i] = {
        ...newList[i],
        id: i + 1
      };
    }

    return newList;
  });
};
const moveUp = (id:number) => {
  setMyList(prev => {
    let index = -1;

    // 1️⃣ Find index of the clicked item
    for (let i = 0; i < prev.length; i++) {
      if (prev[i].id === id) {
        index = i;
        break;
      }
    }

    // 2️⃣ If not found or already at top → do nothing
    if (index === -1 || index === 0) {
      return prev;
    }

    // 3️⃣ Copy array (no direct mutation)
    const newList = [];
    for (let i = 0; i < prev.length; i++) {
      newList[i] = prev[i];
    }

    // 4️⃣ Swap with the item above
    const temp = newList[index];
    newList[index] = newList[index - 1];
    newList[index - 1] = temp;

    // 5️⃣ Reassign IDs
    for (let i = 0; i < newList.length; i++) {
      newList[i] = {
        ...newList[i],
        id: i + 1
      };
    }

    return newList;
  });
};


  return (
    <div className="todo-container">
      <input
        placeholder="todo"
        value={value}
        onChange={e => setValue(e.target.value)}
      />


      <input type="date"  onChange={e => setDate(e.target.value)}/>
      <input type="time"  onChange={e => setInput(e.target.value)} />
      

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
          <div className="updownbtn">
          <button className="updown" onClick={() => moveUp(item.id)}>⬆</button>
          <button className="updown" onClick={() => moveDown(item.id)}>⬇</button>

              </div>
        </div>
      ))}
    </div>
  );
}

