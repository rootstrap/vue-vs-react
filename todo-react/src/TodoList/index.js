import React from "react";
import { array, func } from "prop-types";
import cn from "classnames";
import "./styles.css";

const TodoList = ({ items, handleDone }) => (
  <div className="list-wrapper">
    <h2>Your list:</h2>
    <ul className="list">
      {items.map(({ done, label }, index) => (
        <li key={`${label}-${index}`}>
          <input
            id={`item-${index}`}
            type="checkbox"
            onChange={() => handleDone(index)}
          />
          <label
            for={`item-${index}`}
            className={cn({ crossed: done })}
          >
            {label}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  items: array,
  handleDone: func
};

export default TodoList;
