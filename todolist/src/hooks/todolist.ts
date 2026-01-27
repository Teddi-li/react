import { useState } from "react";

export function ToDoList(){
  const [myList, setMyList] = useState([
    { id: 1, text: "sleep", time: "2026-01-02T03:15:00.123Z", status: "doing" },
    { id: 2, text: "eat", time: "2026-01-24T04:18:00.123Z", status: "done" },
  ]);
  const [value, setValue] = useState("");
  const [input, setInput] = useState(""); 
  const [datetime, setDate] = useState(""); 
  const [option, setoption] = useState("doing | done");
  


  const handleSave = () => {
    const date = new Date(`${datetime}T${input}`);
    const utcTime = date.toISOString(); 
    setMyList(prev => [
      ...prev,
      {
        id: prev.length + 1,
        text: value,
        time: utcTime,
        status: option
      }
    ]);

    setValue("");
    setInput("");
  };
  const moveDown = (id: number) => {
  setMyList(prev => {
    let index = -1;
    for (let i = 0; i < prev.length; i++) {
      if (prev[i].id === id) {
        index = i;
        break;
      }
    }

    if (index === -1 || index === prev.length - 1) {
      return prev;
    }

    const newList = [];
    for (let i = 0; i < prev.length; i++) {
      newList[i] = prev[i];
    }
    const temp = newList[index];
    newList[index] = newList[index + 1];
    newList[index + 1] = temp;
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
    for (let i = 0; i < prev.length; i++) {
      if (prev[i].id === id) {
        index = i;
        break;
      }
    }
    if (index === -1 || index === 0) {
      return prev;
    }
    const newList = [];
    for (let i = 0; i < prev.length; i++) {
      newList[i] = prev[i];
    }
    const temp = newList[index];
    newList[index] = newList[index - 1];
    newList[index - 1] = temp;
    for (let i = 0; i < newList.length; i++) {
      newList[i] = {
        ...newList[i],
        id: i + 1
      };
    }

    return newList;
  });
};

    return {
        value,
        setInput,
        setDate,
        setoption,
        handleSave,
        moveUp,
        moveDown,
        setMyList,
        myList,
        setValue
    };      
}