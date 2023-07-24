import TasksComponent from "./component/Tasks/Tasks.component";
import "./App.css";
import "./style/app.css";

function App() {
  return (
    <div id="main">
      <div id="cont1">
        <div id="cont2" style={{}}>
          <TasksComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
