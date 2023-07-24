import React, { useRef, useState } from "react";
import "../../style/taskComponent.css";

const TaskComponent = ({
  note,
  checkHandler,
  deleteHandler,
  updateHandler,
}) => {
  let { task, date, year, month, completed } = note;

  if(task.length > 15){
    task = task.slice(0, 10) + "...";
  }
  const [editName, setEditName] = useState(false);

  const [updatedName, setUpdatedName] = useState(task);

  const handleInputChange = (e) => {
    setUpdatedName(e.target.value);
  };

  const getUpdatedName = () =>{
    note.task = updatedName;
    updateHandler(note);
    setEditName(!editName);
  }

  return (
    <div className="SingleTask">
        {editName ? (
        <>
          <input name="newName" value={updatedName} onChange={handleInputChange} />
          <button onClick={getUpdatedName}>Change Name</button>
        </>
      ) : (
        <>
          {completed ? (
            <h4 className="taskhead" style={{ textDecoration: "line-through" }}>{task}</h4>
          ) : (
            <h4 className="taskhead">{task}</h4>
          )}
        </>
      )}
        <div
        className="btnclass"
      >
        <button
          id="btns"
          onClick={() => checkHandler(note)}
        >
          {" "}
          markDone{" "}
        </button>
        <button
          id="btns"
          onClick={() => deleteHandler(note)}
        >
          {" "}
          Delete{" "}
        </button>
        <button
          id="btns"
          onClick={() => setEditName(!editName)}
        >
          {" "}
          Update{" "}
        </button>
      </div>
    </div>
  );
};

export default TaskComponent;
