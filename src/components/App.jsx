import React, { useState } from "react";

function App() {
  const [newItem, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleItem = (event) => {
    setItem(event.target.value);
  };
  const uploadItem = () => {
    setItems((prevItem) => {
      return [...prevItem, newItem];
    });
    setItem("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} type="text" value={newItem} />
        <button onClick={uploadItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>Add a new task </li>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
