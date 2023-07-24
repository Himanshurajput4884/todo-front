import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import InputBoxComponent from "../inputBox/inputBox.component";
import { TasksContext } from "../../context/tasks/tasks.context";
import TaskComponent from "../Task/Task.component";

const URL = `https://todo-b.onrender.com/`;

const TasksComponent = () => {
  const { notes, setNotes } =
    useContext(TasksContext);

  const deleteHandler = async (task) => {
    const noteId = task._id;

    const deleteData = await fetch(`${URL}${noteId}`, {
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        Accept: "application/json",
      }
    });

    const deleteResponse = await deleteData.json();
    if(deleteResponse.message === "success"){
      setNotes(deleteResponse.task);
    }

  };

  const checkHandler = async (task) => {
    const noteId = task._id;

    const checkData = await fetch(`${URL}check/${noteId}`, {
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        Accept: "application/json",
      }
    });

    const checkResponse = await checkData.json();
    if(checkResponse.message === "success"){
      setNotes(checkResponse.task);
    }
  };

  const updateHandler = async (task) =>{
    const taskId = task._id;
    
    const updateData = await fetch(`${URL}${taskId}`, {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Accept: "application/json",
      },
      body:JSON.stringify(task),
    })

    const updateResponse = await updateData.json();

    if(updateResponse.message === "success"){
      setNotes(updateResponse.task);
    }
  }

  useEffect(() => {
      const getAllTasks = async() =>{
          const data = await fetch(`${URL}all`, {
            method:"GET",
            headers:{
              "Content-Type":"application/json",
              Accept: "application/json",
            }
          });

          const response = await data.json();
          if(response.message === "success"){
            setNotes(response.task);
          }
      }
      getAllTasks();

  }, []);

  console.log(notes);
  return (
    <div className="TasksFragmentConatainer">
      <div>
        <InputBoxComponent style={{ marginTop: "10vh" }} />
      </div>
      <div className="Tasks">
        <div className="tasksDisplay">
          {!notes || notes.length === 0 ? (
            <div> No Task </div>
          ) : (
            notes.map((currentNote, index) => {
              return (
                <div>
                  <TaskComponent
                    key={index}
                    note={currentNote}
                    deleteHandler={deleteHandler}
                    checkHandler={checkHandler}
                    updateHandler={updateHandler}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TasksComponent;
