import React, { useRef, useState } from "react";
const TaskComponent = ({
  note,
  checkHandler,
  deleteHandler,
  updateHandler,
}) => {
  const { task, date, year, month, completed } = note;

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
            <h2 style={{ textDecoration: "line-through" }}>{task}</h2>
          ) : (
            <h2>{task}</h2>
          )}
        </>
      )}
      <div
        style={{
          display: "flex",
          width: "10%",
          justifyContent: "space-between",
        }}
      >
        <i
          style={{ margin: "10px 10px", cursor: "pointer" }}
          onClick={() => checkHandler(note)}
        >
          {" "}
          markDone{" "}
        </i>
        <i> </i>
        <i
          style={{ margin: "10px 10px", cursor: "pointer" }}
          onClick={() => deleteHandler(note)}
        >
          {" "}
          Delete{" "}
        </i>
        <i
          style={{ margin: "10px 10px", cursor: "pointer" }}
          onClick={() => setEditName(!editName)}
        >
          {" "}
          Update{" "}
        </i>
      </div>
    </div>
  );
};

export default TaskComponent;
