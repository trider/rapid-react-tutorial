import{ createContext, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export const TasksContext = createContext();
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();
  const user = location.state;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/tasks/user/${user.user.userName}`);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  });

  return (
    <TasksContext.Provider value={tasks}>
      {children}
    </TasksContext.Provider>
  );
};