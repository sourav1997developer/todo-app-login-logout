import React from "react";
import "./Task.css";

const Task = ({ title, description, index, task, setTask }) => {

  const deleteTask = () =>{
    const filteredArr = task.filter((val, i) => {
      return i !== index;
    })
    setTask(filteredArr)
  }
  return (
    <div className="task">
      <div className="title_des">
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <div>
        <button className="minus" onClick={deleteTask}>-</button>
      </div>
    </div>
  );
};

export default Task;
