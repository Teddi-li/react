type TodoItemProps = {
  item: {
    id: number;
    text: string;
    time: string;
    status: string;
  };
  setMyList: React.Dispatch<React.SetStateAction<any[]>>;
  moveUp: (id: number) => void;
  moveDown: (id: number) => void;
};

export default function TodoItem({
  item,
  setMyList,
  moveUp,
  moveDown
}: TodoItemProps) {
  return (
    <div className="listColumn">
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
        <button className="updown" onClick={() => moveUp(item.id)}>up</button>
        <button className="updown" onClick={() => moveDown(item.id)}>down</button>
      </div>
    </div>
  );
}