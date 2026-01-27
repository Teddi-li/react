import "../assets/todolist.css";
import { ToDoList } from "../hooks/todolist";
import TodoItem from "./todocomponent";
import TodoInputModal from "./todoinput";
import { useState } from "react";

export default function TodoList() {
  const { myList, moveUp, moveDown, setMyList } = ToDoList();
  const [open, setOpen] = useState(false);

  const handleSave = (newItem: {
    id: number;
    text: string;
    time: string;
    status: string;
  }) => {
    setMyList(prev => [...prev, newItem]);
  };

  return (
    <>
      {open && (
        <>
          <div className="overlay" onClick={() => setOpen(false)} />
          <div className="modal" onClick={e => e.stopPropagation()}>
            <TodoInputModal
              onClose={() => setOpen(false)}
              onSave={handleSave}
            />
          </div>
        </>
      )}

      <div className="columns">
        <div className="column">
          <div className="headeroftodo">
            <h2>Doing</h2>
            <button className="edit-btn"onClick={() => setOpen(true)} title="Edit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 16l1.5-4.5L15.5 5.5l3 3-6 6L8 16z"
              fill="currentColor"
            />
          </svg>
        </button>
          </div>
          {myList
            .filter(item => item.status === "doing")
            .map(item => (
              <TodoItem
                key={item.id}
                item={item}
                moveUp={moveUp}
                moveDown={moveDown}
                setMyList={setMyList}
              />
            ))}
        </div>

        <div className="column">
          <div className="headeroftodo">
            <h2>Done</h2>
            <button className="edit-btn"onClick={() => setOpen(true)} title="Edit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 16l1.5-4.5L15.5 5.5l3 3-6 6L8 16z"
              fill="currentColor"
            />
          </svg>
        </button>
          </div>
          {myList
            .filter(item => item.status === "done")
            .map(item => (
              <TodoItem
                key={item.id}
                item={item}
                moveUp={moveUp}
                moveDown={moveDown}
                setMyList={setMyList}
              />
            ))}
        </div>
        
      </div>
      
        <div className="add-btn"><button  onClick={() => setOpen(true)}>new List</button></div>
    </>
  );
}
          