import { useState } from 'react';
import '../assets/todolist.css';
export function TodoList() {
const [myList, setmylist] = useState([
    { id: 1, text: "sleep", time: "2026-01-02T03:15:00.123Z" },
    { id: 2, text: "eat", time: "2026-01-24T04:18:00.123Z" },
    { id: 3, text: "code", time: "2026-01-22T03:10:00.123Z" },
    { id: 4, text: "repeat", time: "2026-01-28T08:14:00.123Z" },
  ]);
  const [value, setvalue] = useState("");

  return (
    <div className="todo-container">
       <input 
      value={value}
      onChange={(e => setvalue(e.target.value) )}/>
      
      <button onClick = {() => {
        setmylist( e => [
          ...e,
          { 
            id:e.length+1,
            text: value,
            time: new Date().toISOString()
          }
        ]);
        setvalue("");
      }}>add</button>

      <button onClick={() => setvalue("")}>clear</button>

      <button onClick={() =>
        setmylist(items => 
          items.map((e, index) => ({ 
            ...e,
             id: index + 1 
              })
            ))
        }>refresh</button>
      
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
                hour12: true,
              })}</div>
          <button 
          className="btn"
           onClick={() => setmylist( prev=>
            prev.filter(e => e.id !== item.id)
            .map((e, index) => ({ ...e, id: index + 1 }))
           )}>delete</button>
        </div>
        
      ))}
    </div>
  );
}