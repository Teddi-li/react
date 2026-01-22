import { useState } from 'react';
import '../assets/todolist.css';
export function TodoList() {
const [myList, setmylist] = useState([
    { id: 1, text: "sleep" },
    { id: 2, text: "eat" },
    { id: 3, text: "code" },
    { id: 4, text: "repeat" },
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
            text: value
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
          <div className="space">UTC : {new Date().toUTCString()}</div>
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
