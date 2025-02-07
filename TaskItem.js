// 1. Import React to be able to use JSX syntax
import React from 'react';

// 2. Define the TaskItem component that will display individual task information
const TaskItem = ({ task }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {/* 3. Display the task's name */}
      <p>{task.name}</p>
    </div>
  );
};

// 4. Export the TaskItem component so it can be used in other files
export default TaskItem;
