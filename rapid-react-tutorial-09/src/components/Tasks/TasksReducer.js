
const TasksReducer = (state, action) => {
 switch (action.type) {
   case 'set':
     return action.tasks.filter(task => task.isActive);
   case 'add':
     return [...state,{...action.task}];
   case 'edit':
     return state.map((task) =>
       task.taskId === action.task.taskId ? action.task : task
     );
   case 'delete':
     return state.filter((task) => task.taskId !== action.task.taskId);
   default:
     throw new Error(`Unhandled action type: ${action.type}`);
 }
};

export default TasksReducer