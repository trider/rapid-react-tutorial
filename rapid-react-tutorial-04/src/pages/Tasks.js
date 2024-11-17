import { Link } from "react-router-dom";
import tableCols from "../data/cols";
import userTasks from "../data/tasks";
import "./_pages.css";

const Tasks = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <table>
        <thead>
          <tr>
            {tableCols.map((col, index) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userTasks.map((task) => (
            <tr key={task.id}>
              {tableCols.map((col, index) => (
                <td key={`${col}-${task.id}-${index}`}>{task[col.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <Link to="/">Logout</Link>
      </p>
    </div>
  );
};

export default Tasks;
