import { useState } from "react";
import "../assets/todolist.css";

type TodoInputProps = {
  onClose: () => void;
  onSave: (item: {
    id: number;
    text: string;
    time: string;
    status: string;
  }) => void;
};

export default function TodoInputModal({ onClose, onSave }: TodoInputProps) {
  const [value, setValue] = useState("");
  const [date1, setDate1] = useState("");
  const [input1, setInput1] = useState("");
  const [date2, setDate] = useState("");
  const [input, setInput] = useState("");
  const [option, setoption] = useState("doing");

  const handleSave = () => {
    const date2 = new Date(`${date1}T${input1}`);
    const utcTime = date2.toISOString();

    onSave({
      id: Date.now(),
      text: value,
      time: utcTime,
      status: option
    });

    setValue("");
    onClose();
  };

  return (  
    <div className="todo-container modal">
        <div className="modal-header">
            <h2>New Task</h2>
                <button className="close-btn" onClick={onClose}>×</button>
            </div>
        <input 
          className="inputtext"
          placeholder="todo"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="startDate">
            <div className="clockin">
                 <div className="test">starting : </div>
                <input className="calander" type="date"  onChange={e => setDate(e.target.value)}/>
                <input className="calander"  type="time"  onChange={e => setInput(e.target.value)} />
            </div>
            <div className="clockin">
                <div className="test">ending : </div>
                <input className="calander" type="date"  onChange={e => setDate1(e.target.value)}/>
                <input className="calander"  type="time"  onChange={e => setInput1(e.target.value)} />
            </div>
        </div> 
        <div className="lastrow">
            <select className="todotext" onChange={e => setoption(e.target.value)}>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
            <button
                        className="btn-time"
                        onClick={() => {
                        handleSave();
                        onClose(); 
                        }}
                        >
                        Save
                        </button>
            </div>   
        
    </div>
  );
}
