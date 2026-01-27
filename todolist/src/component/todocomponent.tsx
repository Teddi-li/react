
type TodoItemProps = {
  item: {
    id: number;
    text: string;
    time: string;
    status: string;
  };
  moveUp: (id: number) => void;
  moveDown: (id: number) => void;
  setMyList: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function TodoItem({
  item,
  moveUp,
  moveDown,
  setMyList
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
              .filter((e: { id: number; }) => e.id !== item.id)
              .map((e: any, index: number) => ({ ...e, id: index + 1 }))
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