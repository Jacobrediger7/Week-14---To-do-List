// 1. Import React to be able to use JSX syntax
import React from 'react';

// 2. Import the TaskItem component to render individual tasks
import TaskItem from './TaskItem';

// 3. Define the TaskList component which receives tasks as a prop
const TaskList = ({ tasks }) => {
  return (
    <div>
      {/* 4. Map over the tasks array and render a TaskItem for each task */}
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

// 5. Export the TaskList component so it can be used in other files
export default TaskList;
