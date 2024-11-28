
import { useContext } from 'react';
import { TasksContext } from './TasksContext';

import tableCols from "../../data/cols";
import Table from 'react-bootstrap/Table';

const TaskTable = () => {
  
  const tasks = useContext(TasksContext);

  return (
    <div>
      { tasks ? <Table striped bordered hover size="lg">
        <thead>
          <tr>
            {tableCols.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              {tableCols.map((col) => (
                <td key={col}>{task[col.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table> : 'Loading...'}
      
     
    </div>
  );
};

export default TaskTable;
