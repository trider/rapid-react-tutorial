import{ createContext, useEffect, useReducer } from 'react';
import { useLocation } from "react-router-dom";
import TasksReducer from './TasksReducer';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const location = useLocation();
  const urlBase = 'http://localhost:3000/api/tasks'
  const user = location.state ? location.state: JSON.parse(localStorage.getItem('user'))
  const [tasks, dispatch] = useReducer(TasksReducer, []);

  useEffect(() => {
   
    const fetchTasks = async (user) => {

      try {
        const response = await fetch(`${urlBase}/user/${user.userName}`); 
        const data = await response.json();
        dispatch({ type: 'set', tasks: data });
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    if (user) fetchTasks(user);
    
  }, );

  const addTask = async (payload) => {
    try {
      const response = await fetch(`${urlBase}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload.task),
      });
      const taskAdded = await response.json();
     
      dispatch({ type: 'add', task: taskAdded });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const editTask = async (payload) => {
    try {
      const response = await fetch(`${urlBase}/update/${payload.task.taskId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload.task),
      });
      const taskUpated = await response.json();
     
      dispatch({ type: 'edit', task: taskUpated });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (payload) => {
    try {
      const response = await fetch(`${urlBase}/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskId:payload.task.taskId
        }),
      });
      const taskDeleted = await response.json();
     
      dispatch({ type: 'delete', task: taskDeleted });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };


  return (
    <TasksContext.Provider value={{ tasks, dispatch, addTask, editTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};