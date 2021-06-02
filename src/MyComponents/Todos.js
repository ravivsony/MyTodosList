import React from "react";
import { TodoItem } from "./TodoItem";
export const Todos = (props) => {
  let myStyle = {
    height: "100vh",
    margin: "10px auto",
  };
  return(
    <div className="container" style={myStyle}>
      <h3 className="m-2">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
