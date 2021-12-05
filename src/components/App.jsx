import React, { useState } from "react";
import ToDoItem from "./todoItems";

function App() {
  const [entry, setEntry] = useState("");
  const [items, setItem] = useState([]);

  function onEntry() {
    const newEntry = event.target.value;
    setEntry(newEntry);
  }
  function addItem() {
    setItem(function (prevItems) {
      return [...prevItems, entry];
    });
    setEntry("");
  }
  function deleteItem(event) {
    const id = event.target.id;

    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="entry" onChange={onEntry} value={entry} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(function (items, index) {
            return (
              <ToDoItem
                key={index}
                id={index}
                onclick={deleteItem}
                listItem={items}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
