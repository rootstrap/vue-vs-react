import React, { useState } from "react";
import TodoList from "../TodoList";
import "./styles.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = ({ target: { value } }) => { setNewItem(value) };

  const handleAdd = () => {
    const newItems = [...items];
    newItems.push({ label: newItem, done: false });
    setItems(newItems);
    setNewItem("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const handleDone = (index) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], done: !newItems[index].done };
    setItems(newItems);
  };

  return (
    <div id="app">
      <div className="wrapper">
        <div className="item-form">
          <div className="input-wrapper">
            <label for="item"> Enter your new item: </label>
            <input
              id="item"
              className="item-input"
              type="text"
              value={newItem}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button
            className="item-button"
            type="button"
            onClick={handleAdd}
            disabled={newItem.trim() === ""}
          >
            Add
          </button>
        </div>
        <TodoList items={items} handleDone={handleDone} />
      </div>
    </div>
  );
};

export default App;
