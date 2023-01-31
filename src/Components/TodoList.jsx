import React, { useState,useEffect } from "react";
import Task from "./Task";
import "./TodoList.css";

const TodoList = () => {

  const initialArray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  const [task, setTask] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  const inputHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionHandler = (e) => {
    setdescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      {
        title,
        description,
      },
    ]);
    setTitle("");
    setdescription("");
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="container">
      <h2>TODO LIST</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={inputHandler}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={descriptionHandler}
          required
        ></textarea>
        <button type="submit">ADD</button>
      </form>
      {task.map((item, index) => (
        <Task key={index} title={item.title} description={item.description} task={task} setTask={setTask} index={index}/>
      ))}
    </div>
  );
};

export default TodoList;
