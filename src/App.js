import TasksComponent from "./component/Tasks/Tasks.component";
import "./App.css";


function App() {
 
  return (
    <div style={{"height":"100vh", "display":"flex", "alignContent":"center", "justifyContent":"center"}}>
      <div style={{"width":"60%", "display":"flex", "flexDirection":"column"}}>
        <h1 >ToDo List</h1>
        <TasksComponent />
      </div>
    </div>
  );
}

export default App;

