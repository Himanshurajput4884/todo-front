import React from "react";
import { useContext } from "react";
import { TasksContext } from "../../context/tasks/tasks.context";
import { useState } from "react";
import "../../style/inputbox.css";

const InputBoxComponent = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [task, setTask] = useState("");
  const { notes, setNotes } = useContext(TasksContext);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (task === "") return;

    const nd = new Date();
    let date = nd.toLocaleDateString();
    let year = nd.getFullYear();
    let monthIndex = new Date().getMonth();
    let month = monthNames[monthIndex];
    let completed = false;

    const currNote = {
      task,
      date,
      year,
      month,
      completed,
    };

    const data = await fetch(`http://localhost:5001/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(currNote),
    });

    const res = await data.json();
    if (res.message === "success") {
      setNotes(res.task);
      setTask("");
    }
  };

  return (
    <div id="InputBox">
      <form id="InputBoxForm" onSubmit={handleSubmitForm}>
        <input
          required={true}
          id="iptBox"
          name="task"
          type="text"
          onChange={(event) => {
            setTask(event.target.value);
          }}
          value={task}
          className="form-control"
          placeholder=" Add Your Task "
        />

        <div id="btncont">
            <button id="btn" className="btn btn-success" type="submit">
              Add Task{" "}
            </button>
        </div>
      </form>
    </div>
  );
};

export default InputBoxComponent;
