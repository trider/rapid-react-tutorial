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

         {task[col]}

        </td>

       ))}
      </tr>
      ))}
   
        
      </tbody>    
      

      

     </table>
      <Link to="/">Go to login</Link>
    </div>
  );
}

export default Tasks;