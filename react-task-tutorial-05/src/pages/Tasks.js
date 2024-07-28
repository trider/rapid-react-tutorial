import { useLocation } from "react-router-dom";
import { useReducer } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import Footer from '../components/Footer';
import userTasks from "../data/tasks";
import tableCols from "../data/cols";

import NavbarComponent from '../components/Navigation';
import Info from "../components/Info";
const states = ['do', 'doing', 'done'];


const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          ...action.task,
        },
      ];
    }

    case 'setStatus': {
      return tasks.map((t) => {
        if (t.taskId === action.task.taskId) {
          return {
            ...t,
            isEdit: !t.isEdit
          }
        }


        return t;


      });

    }



    case 'changed': {


      return tasks.map((t) => {
        if (t.taskId === action.task.taskId) {
          return {
            ...action.task,
            isEdit: !t.isEdit
          }
        }


        return t;


      });

    }
    case 'deleted': {
      return tasks.filter((t) => t.taskId !== action.task.taskId);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}



const Tasks = () => {
  const location = useLocation();
  const user = location.state;


  const [tasks, dispatch] = useReducer(tasksReducer, userTasks);
  const [taskName, setTaskName] = useState("A Task");
  const [taskDescription, setTaskDescription] = useState("Task Description");
  const [dateAdded, setDateAdded] = useState(new Date().toISOString());
  const [dateUpdated, setDateUpdated] = useState(new Date().toISOString());
  const [taskStatus, setTaskStatus] = useState("do");
  const [isAdd, setIsAdd] = useState(false);

  const onTaskAdd = (task) => {

    dispatch({
      type: 'added',
      task: task,
    });
  }

  const onTaskStatus = (task) => {
    

    dispatch({
      type: 'setStatus',
      task: task,
    });

  }

  const onEditTask = (task) => {
    setDateUpdated(new Date().toISOString())
    task.updated = dateUpdated
    dispatch({
      type: 'changed',
      task: task,
    });

  }

  const onDeleleTask = (task) => {
    dispatch({
      type: 'deleted',
      task: task,
    });
  }

  const getTask = (task, col) => {
    if (task.isEdit) {
      
      if (col === 'name') {
        return <Form.Control
          type="text"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value)
            task.name = e.target.value
          }}
        />
      }
      else if (col === 'description') {
        return <Form.Control
          type="text"
          value={taskDescription}
          onChange={(e) => {
            setTaskDescription(e.target.value)
            task.description = e.target.value
          }}
        />
      }
      else if (col === 'status') {
        return <Form.Select onChange={(e) => {
          setTaskStatus(e.target.value)
          task.status = e.target.value
        }}>
          {states.map((state) => (<option key={state} value={state}>{state}</option>))}
        </Form.Select>
      }
      else {
        return task[col]
      }


    }
    else {
      return task[col]
    }


  }




  const getTableButton = (task) => {

    if (task.isEdit) {
      return <Button variant="primary rounded-pill" size='sm' onClick={(e) => {
        setIsAdd(isAdd)
        setTaskName(task.name)
        onEditTask(task)
   


      }}>
        Update
      </Button>
    }
    else  {

      return <Button variant="primary rounded-pill" size='sm' onClick={(e) => onTaskStatus(task)}>
        Edit
      </Button>
    }

  }
 
 const setAddStatus = () => {

   setIsAdd(!isAdd)
   if(!isAdd){
    
     setTaskName("A Task")
     setTaskDescription("Task Description")
     setTaskStatus("do")
   }

 }








  return (
    <div>
      <NavbarComponent />



      <Container style={{ padding: "2%" }}>
        <Info {...user} infoType='profile' variantInfo="info" />

        <h1>Tasks</h1>

        <Table striped bordered hover size="lg">
          <thead>
            <tr>

              {tableCols.map((col) => (
                <th key={col}>{col}</th>
              ))}
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
         <tbody>
            {!isAdd &&tasks.map((task) => (
              <tr key={task.id}>
                {tableCols.map((col) => (
                  <td key={col}>
                    {getTask(task, col.toLowerCase())}
                  </td>


                ))}
                <td>
                  {getTableButton(task)}


                </td>
                <td>
                  <Button variant="danger rounded-pill"
                    size='sm'
                    onClick={(e) => { onDeleleTask(task) }}
                  >
                    Delete
                  </Button>

                </td>

              </tr>
            ))}
            {isAdd &&       <tr style={{ height: "40px" }}>
                <td>
                  <Form.Control
                    type="text"
                    value={taskName}
                    onChange={(e) => {
                      setTaskName(e.target.value)
                    }


                    }
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}

                  />
                </td>
                <td>
                  {dateAdded}
                </td>
                <td>
                  {dateUpdated}
                </td>
                <td>
                  {taskStatus}
                </td>
                <td>
                  {
                      <Button 
                         variant="primary" 
                         className='rounded-pill'
                         size="sm"
                         onClick={(e) => {
                           setDateAdded(new Date().toISOString())
                           setDateUpdated(new Date().toISOString())
                           setIsAdd(!isAdd)
                           onTaskAdd({
                             id: tasks.length + 1,
                             name: taskName,
                             description: taskDescription,
                             user: user.name,
                             status: 'do',
                             taskId: tasks.length + 1,
                             added: new Date().toISOString(),
                             updated: dateUpdated,
                             isActive: true,
                             isEdit: false,
                             isAdd: isAdd
   
   
   
                           }
   
                           )
     
                         }}>
                         Add
                       </Button>


                  }



                </td>



              </tr>
              
            
            
            }



          </tbody>
          
          <tfoot>


  
            

            <tr style={{ height: "40px" }}>


              <td colSpan={tableCols.length + 2} style={{ backgroundColor: "white" }}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  {!isAdd && 
                    <Button variant="primary rounded-pill" size='sm' onClick={(e) => 
                      setAddStatus()
                    }>
                    Add Task
                  </Button>


                  }
           

                </div>
              </td>

            </tr>




          </tfoot>





        </Table>


        <Info {...user} infoType='status' variantInfo="secondary" />


      </Container>


      <Footer />
    </div>
  );
}

export default Tasks;