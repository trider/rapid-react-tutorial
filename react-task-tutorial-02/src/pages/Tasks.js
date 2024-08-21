import {  Link } from "react-router-dom";
import userTasks from "../data/tasks";
import tableCols from "../data/cols";
import './_pages.css';

const Tasks = () => { 

  return (
    <div>
      <h1>Tasks</h1>
     <table >
      <thead>
        <tr>
          {tableCols.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {userTasks.map((task) => (
      <tr key={task.id}>
       {tableCols.map((col) => (
        <td key={col}>

         {task[col.toLowerCase()]}

        </td>

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
}

export default Tasks;