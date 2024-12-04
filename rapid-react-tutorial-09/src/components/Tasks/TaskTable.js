
import { useContext } from 'react';
import { TasksContext } from './TasksContext';

import tableCols from "../../data/cols";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalComponent from '../Modal';

const TaskTable = () => {

  const { tasks, addTask, editTask, deleteTask  } = useContext(TasksContext);

  const onAddTask = (task) => {
    addTask({ task })
  }
   const onEditTask = (task) => {
     editTask({task})
   }

   const onDeleleTask = (task) => {
    deleteTask({task})
  }


  return (
    <div>
      {tasks ? <Table striped bordered hover size="lg">
        <thead>
          <tr>
            {tableCols.map((col, index) => (<th key={`col-${col}-${index}`}>{col}</th>))}
            <th colSpan={"2"}>Actions</th>
          </tr>
         
        </thead>
        <tbody>
          {tasks.map((task, key) => (
            <tr key={task._id}>
              {tableCols.map((col, index) => (
                <td key={`${task._id}-${col}-${index}-${task.added}`}>{task[col.toLowerCase()]}</td>
              ))}
               <td>
                <ModalComponent
                title='Edit'
                size='sm'
                task={task}
                onAddTask={onAddTask}
                onEditTask={onEditTask} />
              </td>


              <td>
                <Button variant="danger rounded-pill" 
                  size='sm' 
                  onClick={(e) => { onDeleleTask(task)}}
                >
                Delete
                </Button>
              </td>
            </tr>
          ))}
          <tr style={{ height: "40px" }}>

            <td colSpan={tableCols.length + 2} style={{ backgroundColor: "white" }}>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <ModalComponent
                  title='Add'
                  task={{
                    name: 'New Task',
                    description: 'Task Description',
                    user: 'jonnygold',
                    status: 'do',
                    taskId: tasks.length + 1,
                    added: new Date().toISOString(),
                    updated: new Date().toISOString(),
                    isActive: true,
                    isEdit: false
                  }}
                  onAddTask={onAddTask}

                />
              </div>



            </td>
          </tr>

        </tbody>
      </Table> : 'Loading...'}


    </div>
  );
};

export default TaskTable;
