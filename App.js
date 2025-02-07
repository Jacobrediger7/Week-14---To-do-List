// 1. Import React to be able to use JSX syntax
import React from 'react';

// 2. Import the TaskList component to display the list of tasks
import TaskList from './TaskList';

// 3. Import the test data (tasks) from the tasks.js file
import tasks from '../tasks';

// 4. Define the App component as a functional component
const App = () => {
  return (
    <div>
      {/* 5. Render the header of the app */}
      <h1>My To-Do List</h1>
      
      {/* 6. Render the TaskList component, passing the tasks array as a prop */}
      <TaskList tasks={tasks} />
    </div>
  );
};

// 7. Export the App component so it can be used in other files
export default App;
